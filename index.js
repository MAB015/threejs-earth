import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import getStarfield from "./src/getStarfield.js";

const w = window.innerWidth;
const h = window.innerHeight;

const scene = new THREE.Scene();

const fov = 75; // Camera frustum vertical field of view
const aspect = w / h; //Camera frustum aspect ratio
const near = 0.1; //Camera frustm ner plane
const far = 1000; //Camera frustum far plane
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({  antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const earthGroup = new THREE.Group();
earthGroup.rotation.z = -23.4 * Math.PI / 180;
scene.add(earthGroup);

new OrbitControls(camera, renderer.domElement);
const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, 12);
const material = new THREE.MeshStandardMaterial({
    map: loader.load("./textures/00_earthmap1k.jpg")
});
const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh);

const stars = getStarfield();
// scene.add(stars);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(hemiLight);

function animate() {
    requestAnimationFrame(animate);
    earthMesh.rotation.y += 0.002;
    renderer.render(scene, camera);
}

animate();