import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
const createRenderer = () => {
  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("model"),
    antialias: true,
    alpha: true
  });
  const windowWidth = document.body.clientWidth;
  renderer.shadowMap.enabled = true;
  renderer.setPixelRatio(window.devicePixelRatio);
  if (windowWidth < 410) {
    renderer.setSize(300, 300);
  } else if (windowWidth < 700) {
    renderer.setSize(400, 300);
  } else {
    renderer.setSize(680, 500);
  }
  return renderer;
};
const createScene = () => {
  const scene = new THREE.Scene();
  return scene;
};
const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(75, 680 / 500, 0.1, 4e3);
  camera.position.z = 1;
  camera.position.x = 3;
  camera.position.y = 1.8;
  return camera;
};
const createLight = (scene) => {
  const hemiLight = new THREE.HemisphereLight(16777215, 16777215, 0.5);
  hemiLight.position.set(0, 50, 0);
  const pointLightRight = new THREE.DirectionalLight(16777215, 0.6);
  pointLightRight.position.set(10, 0, 0);
  pointLightRight.castShadow = true;
  const pointLightLeft = new THREE.DirectionalLight(16777215, 0.6);
  pointLightLeft.position.set(-6, 0, 0);
  pointLightLeft.castShadow = true;
  const pointLightTop = new THREE.DirectionalLight(16777215, 0.6);
  pointLightTop.position.set(0, 6, 0);
  pointLightTop.castShadow = true;
  pointLightRight.shadow.mapSize.width = 1024;
  pointLightRight.shadow.mapSize.width = 1024;
  pointLightRight.shadow.mapSize.height = 1024;
  pointLightRight.shadow.mapSize.height = 1024;
  pointLightLeft.shadow.camera.near = 0.5;
  pointLightLeft.shadow.camera.near = 0.5;
  pointLightLeft.shadow.camera.near = 0.5;
  pointLightLeft.shadow.camera.near = 0.5;
  pointLightTop.shadow.camera.far = 0;
  pointLightTop.shadow.camera.far = 0;
  pointLightTop.shadow.camera.far = 0;
  pointLightTop.shadow.camera.far = 0;
  new THREE.AmbientLight(14540253);
  scene.add(hemiLight, pointLightTop);
};
const createModel = (model, scene, path, setLoading) => {
  const loader = new GLTFLoader();
  loader.load(path, function(gltf) {
    model.current = gltf.scene;
    model.current.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        console.log(o);
      }
    });
    model.current.scale.set(2, 2, 2);
    model.current.position.y = 0.8;
    const txt = new THREE.TextureLoader().load("/textures/1-webp.webp");
    model.current.traverse((o) => {
      if (o.isMesh) {
        o.material = new THREE.MeshPhongMaterial({
          map: txt,
          shininess: 40
        });
        console.log(o);
      }
    });
    scene.add(model.current);
    setLoading(false);
  }, void 0, function(error) {
    console.error(error);
  });
};
const createFloor = (scene) => {
  const floorGeometry = new THREE.PlaneGeometry(5e3, 5e3, 1, 1);
  const floorMaterial = new THREE.MeshPhongMaterial({
    color: 16777215,
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
  const windowWidth = document.body.clientWidth;
  if (windowWidth < 410) {
    camera.aspect = 300 / 300;
    camera.updateProjectionMatrix();
    camera.position.z = 1.6;
    renderer.setSize(300, 300);
  } else if (windowWidth < 700) {
    renderer.setSize(400, 300);
    camera.aspect = 400 / 300;
    camera.updateProjectionMatrix();
  } else {
    camera.aspect = 680 / 500;
    camera.updateProjectionMatrix();
    renderer.setSize(680, 500);
  }
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
