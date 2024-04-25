
import * as THREE from "three"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

const cubo = new THREE.Mesh(geometry, material);

cubo.position.x = 0;
camera.position.z = 8;

scene.add(cubo)


function animation () {
    requestAnimationFrame(animation)
    cubo.rotation.x += 0.01
    cubo.rotation.y += 0.01
    renderer.render(scene, camera)
}

animation()


