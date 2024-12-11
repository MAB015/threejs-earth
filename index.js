import * as THREE from "three";
import  { OrbitControls } from "..libs/jsm143/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;

const scene = new THREE.scene();

const fov = 75; // Camera frustum vertical field of view
const aspect = w / h; //Camera frustum aspect ratio
const near = 0.1; //Camera frustm ner plane
const far = 1000; //Camera frustum far plane
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({  antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

new OrbitalControls(camera, renderer.domElement);