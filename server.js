
// @ts-check
import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import compression from 'compression';
import serveStatic from 'serve-static';
import { createServer as createViteServer } from 'vite';
import { generateMetaInfo } from './seoData.js';
import { getHeader } from './html-template.js';
import { promises } from "fs";
import dotenv from "dotenv";
dotenv.config();

// Get __dirname equivalent in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;
process.env.MY_CUSTOM_SECRET = 'API_KEY_qwertyuiop';

async function createServer(root = process.cwd(), isProd = process.env.VITE_NODE_ENV === "production") {
  const resolve = (p) => path.resolve(__dirname, p);

  const indexProd = isProd ? fs.readFileSync(resolve('./public/dist/client/index.html'), 'utf-8') : '';

  const app = express();

  let vite;
  if (!isProd) {
    vite = await createViteServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,  // Change 'ssr' to true
      },
      appType: "custom",
    });
  
    app.use(vite.middlewares);
  } else {
    app.use(compression());
    app.use(serveStatic(resolve('./public/dist/client'), { index: false }));
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      let template, render;
      if (!isProd) {
        let template = await promises.readFile("./public/dist/client/index.html", "utf-8");

        const metaData = generateMetaInfo({ path: url });
        const metaTags = getHeader(metaData);
  
        // 🚀 REPLACING `<!--meta-tags-->` IN HTML FILE 🚀
        template = template.replace("<!--meta-tags-->", metaTags);
  
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } else {
        template = indexProd;
        render = (await import('./public/dist/server/entry-server.js')).render;

        const context = {};
        const appHtml = await render(url, context);
  
        if (context.url) {
          return res.redirect(301, context.url);
        }
  
        const metaData = generateMetaInfo({ path: url });
        const metaTags = getHeader(metaData);
  
        template = template.replace("<!--meta-tags-->", metaTags);
        
        const html = template.replace(`<!--app-html-->`, appHtml);
  
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
        
      }
    } catch (e) {
      if (!isProd) vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app, vite };
}

if (!isTest) {
  createServer().then(({ app }) =>
    app.listen(3000, () => {
      console.log('http://localhost:3000');
    })
  );
}

export { createServer };








// import fs from "fs";
// import path from "path";
// import express from "express";
// import { fileURLToPath } from "url";
// import compression from "compression";
// import serveStatic from "serve-static";
// import { createServer as createViteServer } from "vite";
// import { generateMetaInfo } from "./seoData.js";
// import { getHeader } from "./html-template.js";
// import { promises } from "fs";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const isTest = process.env.NODE_ENV === "test" || !!process.env.VITE_TEST_BUILD;
// process.env.MY_CUSTOM_SECRET = "API_KEY_qwertyuiop";

// async function createServer(root = process.cwd(), isProd = process.env.NODE_ENV === "production") {
//   const resolve = (p) => path.resolve(__dirname, p);

//   console.log("this is resolve", resolve);

//   const indexProd = isProd ? fs.readFileSync(resolve("./public/dist/client/index.html"), "utf-8") : "";

//   const app = express();

//   let vite;
//   if (!isProd) {
//     vite = await createViteServer({
//       root,
//       logLevel: isTest ? "error" : "info",
//       server: {
//         middlewareMode: true,
//       },
//       appType: "custom",
//     });

//     app.use(vite.middlewares);
//   } else {
//     app.use(compression());

//     // ✅ Cache Static Assets (JS, CSS, images)
//     app.use(
//       serveStatic(resolve("./public/dist/client"), {
//         index: false,
//         setHeaders: (res, filePath) => {
//           if (filePath.endsWith(".html")) {
//             res.setHeader("Cache-Control", "no-cache, must-revalidate");
//           } else {
//             res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
//           }
//         },
//       })
//     );
//   }

//   app.use("*", async (req, res) => {
//     try {
//       const url = req.originalUrl;
//       let template, render;

//       if (!isProd) {
//         let template = await promises.readFile("./public/dist/client/index.html", "utf-8");

//         const metaData = generateMetaInfo({ path: url });
//         const metaTags = getHeader(metaData);

//         template = template.replace("<!--meta-tags-->", metaTags);

//         res.status(200).set({
//           "Content-Type": "text/html",
//           "Cache-Control": "no-cache, must-revalidate", // ✅ Cache Control for `index.html`
//         }).end(template);
//       } else {
//         template = indexProd;
//         render = (await import("./public/dist/server/entry-server.js")).render;

//         const context = {};
//         const appHtml = await render(url, context);

//         if (context.url) {
//           return res.redirect(301, context.url);
//         }

//         const metaData = generateMetaInfo({ path: url });
//         const metaTags = getHeader(metaData);

//         template = template.replace("<!--meta-tags-->", metaTags);

//         const html = template.replace(`<!--app-html-->`, appHtml);

//         res.status(200).set({
//           "Content-Type": "text/html",
//           "Cache-Control": "no-cache, must-revalidate", // ✅ Ensure fresh HTML always loads
//         }).end(html);
//       }
//     } catch (e) {
//       if (!isProd) vite.ssrFixStacktrace(e);
//       console.log(e.stack);
//       res.status(500).end(e.stack);
//     }
//   });

//   return { app, vite };
// }

// if (!isTest) {
//   createServer().then(({ app }) =>
//     app.listen(3000, () => {
//       console.log("http://localhost:3000");
//     })
//   );
// }

// export { createServer };









































