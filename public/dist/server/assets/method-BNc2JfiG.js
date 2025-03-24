import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
const createRenderer = () => {
  var renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("bagModel1"),
    antialias: true,
    alpha: true
  });
  const windowWidth = document.getElementById("modelPlace").clientWidth;
  const windowHeigth = document.getElementById("modelPlace").clientHeight;
  renderer.shadowMap.enabled = true;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(windowWidth, windowHeigth);
  return renderer;
};
const createScene = () => {
  var scene = new THREE.Scene();
  return scene;
};
const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(5.7, document.getElementById("modelPlace").clientWidth / document.getElementById("modelPlace").clientHeight, 20, 4e3);
  camera.position.z = 100;
  camera.position.x = 0;
  camera.position.y = 0;
  return camera;
};
const createLight = (scene) => {
  const ambientlight = new THREE.AmbientLight(16777215, 1);
  const pointlightFront = new THREE.PointLight(16777215, 1, 100);
  pointlightFront.position.set(0, 0, 10);
  new THREE.PointLightHelper(pointlightFront, 2, "red");
  const pointlightBackTop = new THREE.PointLight(16777215, 1, 100);
  pointlightBackTop.position.set(0, 0, -10);
  new THREE.PointLightHelper(pointlightBackTop, 2, "blue");
  scene.add(ambientlight, pointlightFront, pointlightBackTop);
};
const createModel = (model, scene, path, setLoading, renderer, selectedColor) => {
  setLoading(true);
  let loadingEnvornment = true;
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
  let loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  new THREE.PMREMGenerator(renderer);
  new RGBELoader().setPath("https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/").load("dancing_hall_4k.hdr", function(texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
    loadingEnvornment = false;
  });
  loader.load(path, function(gltf) {
    model.current = gltf.scene;
    model.current.position.y = -1.2;
    model.current.position.x = 0;
    const baseMesh = model.current.children.find((item) => item.name === "base");
    baseMesh.children.map((item) => {
      if (item.isMesh && item.name != "NurbsPath003" && item.name != "Cylinder002") {
        item.material.color = new THREE.Color("#C95a65");
      }
    });
    if (!loadingEnvornment) {
      scene.add(model.current);
      setLoading(false);
    }
  }, void 0, function(error) {
    console.error(error);
  });
};
const createFloor = (scene) => {
  const floorGeometry = new THREE.PlaneGeometry(5e3, 5e3, 1, 1);
  const floorMaterial = new THREE.MeshPhongMaterial({
    color: 16382715,
    shininess: 0
  });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -0.5 * Math.PI;
  floor.receiveShadow = true;
  floor.position.y = -1;
  scene.add(floor);
};
const animate = (callback) => {
  function loop(time) {
    callback(time);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
};
const onWindowResize = (camera, renderer) => {
  const windowWidth = document.getElementById("modelPlace").clientWidth;
  const windowHeigth = document.getElementById("modelPlace").clientHeight;
  renderer.setSize(windowWidth, windowHeigth);
};
export {
  animate,
  createCamera,
  createFloor,
  createLight,
  createModel,
  createRenderer,
  createScene,
  onWindowResize
};
