import { aB as jsxs, aC as motion, aD as jsx, G as TextureLoader, aE as Fragment, aF as FaArrowLeft, M as MeshPhongMaterial } from "./index-DOKwj8w9.js";
const COLOR_PALLETTE = ["#ff0000", "#68b745", "#66717E", "#D4D6B9", "#D1CAA1"];
const BED_PALLETE = [{
  txt: new TextureLoader().load("/textures/bed/1-webp.webp"),
  img: "/textures/bed/1-webp.webp"
}];
const CLOTH_PALLETE = [{
  txt: new TextureLoader().load("/textures/cloth/1-webp.webp"),
  img: "/textures/cloth/1-webp.webp"
}, {
  txt: new TextureLoader().load("/textures/cloth/2-webp.webp"),
  img: "/textures/cloth/2-webp.webp"
}];
const MATTRESS_PALLETE = [{
  txt: new TextureLoader().load("/textures/mattress/1-webp.webp"),
  img: "/textures/mattress/1-webp.webp"
}];
const ColorPallete = ({
  activeLayer,
  setActiveLayer,
  data,
  setData,
  model,
  setTooltipOpen
}) => {
  const mesh = data.meshes.find((item) => item.name === activeLayer.value);
  const handleColorChange = (color) => {
    setTooltipOpen(false);
    model.current.traverse((o) => {
      if (o.isMesh && o.name === activeLayer.value) {
        o.material = new MeshPhongMaterial({
          color,
          emmisive: 16776437,
          shininess: 0
        });
      }
    });
    setData({
      ...data,
      meshes: data.meshes.map((item) => {
        if (item.name === activeLayer.value) {
          return {
            ...item,
            color
          };
        } else {
          return item;
        }
      })
    });
  };
  const handleTextureChange = (text) => {
    console.log(text);
    setTooltipOpen(false);
    model.current.traverse((o) => {
      if (o.isMesh && o.name === activeLayer.value) {
        o.material = new MeshPhongMaterial({
          map: text.txt,
          emmisive: 16776437,
          shininess: 0
        });
      }
    });
    setData({
      ...data,
      meshes: data.meshes.map((item) => {
        if (item.name === activeLayer.value) {
          return {
            ...item,
            color: text.texture
          };
        } else {
          return item;
        }
      })
    });
  };
  return /* @__PURE__ */ jsxs(motion.div, {
    className: "px-4 text-center -mt-12 md:-mt-24 relative",
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    children: [/* @__PURE__ */ jsx("span", {
      className: "inline-block text-xl text-center text-white font-bold capitalize",
      children: mesh.display_name
    }), /* @__PURE__ */ jsxs("div", {
      className: "px-4 justify-center overflow-x-auto py-4 whitespace-nowrap flex items-center space-x-2 md:space-x-4",
      children: [activeLayer.value === "bed" ? BED_PALLETE.map((text, index) => /* @__PURE__ */ jsx(Fragment, {
        children: /* @__PURE__ */ jsx("div", {
          className: "transform cursor-pointer hover:scale-105 h-7 w-7 md:h-12 md:w-12 bg-gray-200 rounded-full border-2 border-bg-white",
          style: {
            backgroundImage: `url(${text.img})`
          },
          onClick: () => handleTextureChange(text)
        }, index)
      })) : activeLayer.value === "pillow" || activeLayer.value === "blanket" ? CLOTH_PALLETE.map((text, index) => /* @__PURE__ */ jsx(Fragment, {
        children: /* @__PURE__ */ jsx("div", {
          className: "transform cursor-pointer hover:scale-105 h-7 w-7 md:h-12 md:w-12 bg-gray-200 rounded-full border-2 border-bg-white",
          style: {
            backgroundImage: `url(${text.img})`
          },
          onClick: () => handleTextureChange(text)
        }, index)
      })) : activeLayer.value === "_Mattress" ? MATTRESS_PALLETE.map((text, index) => /* @__PURE__ */ jsx(Fragment, {
        children: /* @__PURE__ */ jsx("div", {
          className: "transform cursor-pointer hover:scale-105 h-7 w-7 md:h-12 md:w-12 bg-gray-200 rounded-full border-2 border-bg-white",
          style: {
            backgroundImage: `url(${text.img})`
          },
          onClick: () => handleTextureChange(text)
        }, index)
      })) : COLOR_PALLETTE.map((color, index) => /* @__PURE__ */ jsx(Fragment, {
        children: /* @__PURE__ */ jsx("div", {
          className: "transform cursor-pointer hover:scale-105 h-7 w-7 md:h-12 md:w-12 bg-gray-200 rounded-full border-2 border-bg-white",
          style: {
            backgroundColor: color
          },
          onClick: () => handleColorChange(color)
        }, index)
      })), /* @__PURE__ */ jsxs("div", {
        className: "cursor-pointer flex items-center",
        onClick: () => {
          setTooltipOpen(false);
          setActiveLayer(false);
        },
        children: [/* @__PURE__ */ jsx(FaArrowLeft, {
          className: "text-xl md:text-2xl text-white"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-sm md:text-base text-white ml-2",
          children: "Back"
        })]
      })]
    })]
  });
};
export {
  ColorPallete as default
};
