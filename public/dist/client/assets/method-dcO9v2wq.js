import { G as GLTFLoader } from "./GLTFLoader-BPQOngCf.js";
import { OrbitControls } from "./OrbitControls-q2ME1qS5.js";
import { D as DRACOLoader, R as RGBELoader } from "./RGBELoader-CvUzLPi7.js";
import { S as Scene, P as PerspectiveCamera, A as AmbientLight, H as HemisphereLight, D as DirectionalLight, a as PointLight, f as SpotLight, W as WebGLRenderer, b as PMREMGenerator, E as EquirectangularReflectionMapping, g as AnimationMixer, c as PlaneGeometry, M as MeshPhongMaterial, d as Mesh, h as Clock } from "./index-DOKwj8w9.js";
let scene;
let camera;
let renderer;
let mixer;
const clock = new Clock();
const createScene = () => {
  const scene2 = new Scene();
  return scene2;
};
const createCamera = () => {
  document.body.clientWidth;
  const camera2 = new PerspectiveCamera(5.7, document.getElementById("modelPlace").clientWidth / document.getElementById("modelPlace").clientHeight, 0.9, 4e3);
  camera2.position.z = 190;
  camera2.position.x = 0;
  camera2.position.y = 20;
  return camera2;
};
const createLight = (scene2) => {
  const ambientlight = new AmbientLight(16777215, 0.2);
  const hemiLight = new HemisphereLight(16777215, 16777215, 0.8);
  hemiLight.position.set(10, 50, 0);
  const pointLightExtra = new DirectionalLight(16777215, 0.9);
  pointLightExtra.position.set(0, 20, 0);
  pointLightExtra.castShadow = true;
  const pointLightRight = new DirectionalLight(16777215, 0.9);
  pointLightRight.position.set(10, 0, 0);
  const pointLightLeft = new DirectionalLight(16777215, 0.2);
  pointLightLeft.position.set(-5, 0, 0);
  const pointLightTop = new PointLight(16777215, 0.9);
  pointLightTop.position.set(0, 0, 5);
  const spotLight = new SpotLight(16777215);
  spotLight.position.set(5, 5, 20);
  pointLightExtra.shadow.mapSize.width = 1025;
  pointLightExtra.shadow.camera.far = 0;
  new AmbientLight(16777215, 2);
  scene2.add(ambientlight);
};
const createRenderer = () => {
  var renderer2 = new WebGLRenderer({
    canvas: document.getElementById("Robotmodel3"),
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
  controls.autoRotate = true;
  controls.autoRotateSpeed = 4;
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  new PMREMGenerator(renderer);
  new RGBELoader().setPath("https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/").load("dancing_hall_4k.hdr", function(texture) {
    texture.mapping = EquirectangularReflectionMapping;
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
    model.current.rotation.y = 0.9;
    model.current.position.x = 0;
    model.current.position.y = -4.5;
    model.current.scale.set(5, 5, 5);
    if (!loadingEnvornment) {
      scene.add(model.current);
      mixer = new AnimationMixer(model.current);
      console.log("mixer", mixer);
      let clips = gltf.animations;
      console.log("clips", clips);
      mixer.timeScale = 0.5;
      clips.forEach(function(clip) {
        mixer.clipAction(clip).play();
      });
      animate2();
      setLoading(false);
    }
  }, void 0, function(error) {
    console.error("model err", error);
  });
};
const createFloor = (scene2) => {
  const floorGeometry = new PlaneGeometry(5e3, 5e3, 1, 1);
  const floorMaterial = new MeshPhongMaterial({
    color: 16777215,
    shininess: 0
  });
  const floor = new Mesh(floorGeometry, floorMaterial);
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
  requestAnimationFrame(animate2);
  const delta = clock.getDelta();
  if (mixer) {
    mixer.update(delta);
  }
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
