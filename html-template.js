export function getHeader(metaData) {
  return `
    <title>${metaData.title}</title>
     
    <!-- Other Important Meta Tags -->
    <meta name="description" content="${metaData.description}" />
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content="${metaData.keywords}" />
    <meta name="author" content="${metaData.author}" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Open Graph Meta Tags -->
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${metaData.title}" />
    <meta property="og:description" content="${metaData.description}" />
    <meta property="og:url" content="${metaData.url}" />
    <meta property="og:site_name" content="ContentKing" />
    <meta property="og:image" content="${metaData.image}" />
    <meta property="og:image:secure_url" content="${metaData.image}" />
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${metaData.title}" />
    <meta name="twitter:description" content="${metaData.description}" />
    <meta name="twitter:image" content="${metaData.image}" />

    <!-- Canonical Link -->
    <link rel="canonical" href="${metaData.url}" />
    `;
  }
  
  // <meta property="og:image:width" content="${metaData.imageWidth}" />
  // <meta property="og:image:height" content="${metaData.imageHeight}" />


// export function getHeader(metaData) {
//   return `
//     <title>${metaData.title}</title>
    
//     <!-- Other Important Meta Tags -->
//     <meta name="description" content="${metaData.description}" />
//     <meta name="robots" content="index, follow" />
//     <meta name="keywords" content="${metaData.keywords}" />
//     <meta name="author" content="${metaData.author}" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />

//     <!-- Open Graph Meta Tags -->
//     <meta property="og:locale" content="en_US" />
//     <meta property="og:type" content="website" />
//     <meta property="og:title" content="${metaData.title}" />
//     <meta property="og:description" content="${metaData.description}" />
//     <meta property="og:url" content="${metaData.url}" />
//     <meta property="og:site_name" content="ContentKing" />
//     <meta property="og:image" content="${metaData.image}" />
//     <meta property="og:image:secure_url" content="${metaData.image}" />


//     <!-- Twitter Card Meta Tags -->
//     <meta name="twitter:card" content="summary_large_image" />
//     <meta name="twitter:title" content="${metaData.title}" />
//     <meta name="twitter:description" content="${metaData.description}" />
//     <meta name="twitter:image" content="${metaData.image}" />
//   `;
// }

  