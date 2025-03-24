import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
let scene;
let camera;
let renderer;
let mixer;
const clock = new THREE.Clock();
const createScene = () => {
  const scene2 = new THREE.Scene();
  return scene2;
};
const createCamera = () => {
  document.getElementById("model-container");
  document.body.clientWidth;
  const camera2 = new THREE.PerspectiveCamera(100, document.getElementById("modelPlace").clientWidth / document.getElementById("modelPlace").clientHeight, 0.1, 4e3);
  camera2.position.z = 5;
  camera2.position.x = 0;
  camera2.position.y = 0;
  return camera2;
};
const createLight = (scene2) => {
  const ambientlight = new THREE.AmbientLight(16777215, 0.8);
  const hemiLight = new THREE.HemisphereLight(16777215, 16777215, 0.8);
  hemiLight.position.set(10, 50, 0);
  const pointLightExtra = new THREE.DirectionalLight(16777215, 0.9);
  pointLightExtra.position.set(0, 20, 0);
  pointLightExtra.castShadow = true;
  const pointLightRight = new THREE.DirectionalLight(16777215, 0.9);
  pointLightRight.position.set(10, 0, 0);
  const pointLightLeft = new THREE.DirectionalLight(16777215, 0.2);
  pointLightLeft.position.set(-5, 0, 0);
  const pointLightTop = new THREE.PointLight(16777215, 0.9);
  pointLightTop.position.set(0, 0, 5);
  const spotLight = new THREE.SpotLight(16777215);
  spotLight.position.set(5, 5, 20);
  pointLightExtra.shadow.mapSize.width = 1025;
  pointLightExtra.shadow.camera.far = 0;
  new THREE.AmbientLight(16777215, 2);
  scene2.add(ambientlight);
};
const createRenderer = () => {
  var renderer2 = new THREE.WebGLRenderer({
    canvas: document.getElementById("Robotmodel1"),
    antialias: true,
    alpha: true
  });
  const windowWidth = document.getElementById("modelPlace").clientWidth;
  const windowHeigth = document.getElementById("modelPlace").clientHeight;
  renderer2.shadowMap.enabled = true;
  renderer2.setPixelRatio(window.devicePixelRatio);
  renderer2.setSize(windowWidth, windowHeigth);
  return renderer2;
};
const createAnimatedModel = (model, path, setLoading) => {
  setLoading(true);
  let loadingEnvornment = true;
  renderer = createRenderer();
  scene = createScene();
  camera = createCamera();
  createLight(scene);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.dampingFactor = 0.1;
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  new THREE.PMREMGenerator(renderer);
  new RGBELoader().setPath("https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/").load("dancing_hall_4k.hdr", function(texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
    loadingEnvornment = false;
  });
  loader.load(path, function(gltf) {
    model.current = gltf.scene;
    model.current.traverse(function(node) {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });
    model.current.position.y = -0.8;
    model.current.position.x = 0;
    model.current.scale.set(1.2, 1.2, 1.2);
    if (!loadingEnvornment) {
      scene.add(model.current);
      mixer = new THREE.AnimationMixer(model.current);
      let clips = gltf.animations;
      clips.forEach(function(clip) {
        mixer.clipAction(clip).play();
      });
      animate();
      setLoading(false);
    }
  }, void 0, function(error) {
    console.error("model err", error);
  });
};
const createFloor = (scene2) => {
  const floorGeometry = new THREE.PlaneGeometry(5e3, 5e3, 1, 1);
  const floorMaterial = new THREE.MeshPhongMaterial({
    color: 16777215,
    shininess: 0
  });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -0.5 * Math.PI;
  floor.receiveShadow = true;
  floor.position.y = -1;
  scene2.add(floor);
};
const applyTextureToModel = (parent, type, mtl) => {
  parent.traverse((o) => {
    if (o.isMesh) {
      if (o.name.includes(type)) {
        o.material = mtl;
        o.nameID = type;
      }
    }
  });
};
const animate = () => {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();
  mixer.update(delta);
  renderer.render(scene, camera);
};
const onWindowResize = (camera2, renderer2) => {
  const windowWidth = document.getElementById("modelPlace").clientWidth;
  const windowHeigth = document.getElementById("modelPlace").clientHeight;
  renderer2.setSize(windowWidth, windowHeigth);
};
export {
  animate,
  applyTextureToModel,
  createAnimatedModel,
  createCamera,
  createFloor,
  createLight,
  createRenderer,
  createScene,
  onWindowResize
};
