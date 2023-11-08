const arealTemplate = document.createElement('template');

class Areal extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
		<div class="component lage active">
			<h2>Lageplan</h2>
			<div id="areal">
				<canvas id="lageplan"></canvas>
			</div>
		</div>
        `;
    }
}
  
customElements.define('areal-component', Areal);


import * as THREE from '/node_modules/three/build/three.module.min.js';

import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from '/node_modules/three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from '/node_modules/three/examples/jsm/loaders/MTLLoader.js';


let scene, camera, renderer, controls, materials;
//const canvas = document.getElementById('lageplan');
const areal = document.getElementById('areal');

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 20, window.innerWidth / (window.innerHeight/2), 1, 4000 );
camera.position.z = 1000;
camera.position.x = 1500;

var light = new THREE.AmbientLight(0x000000);
scene.add(light);

light = new THREE.HemisphereLight(0x000000, 0x000000, 1.0);
light.position.set(0, 1, 0);
scene.add(light);

var directionalLight = new THREE.DirectionalLight( 0x000000 );
directionalLight.position.set( 1, 1, 0.5 ).normalize();
scene.add( directionalLight );

var mesh = null;

var mtlLoader = new MTLLoader();
mtlLoader.load("./models/H19_wireframe_transparent.mtl", function(materials){
    materials.preload();
	var objLoader = new OBJLoader();
	objLoader.setMaterials(materials);
	objLoader.load( './models/H19_wireframe_transparent.obj', function ( object ) {    
		mesh = object;
		scene.add( mesh );
	});
});


renderer = new THREE.WebGLRenderer({antialias: true, alpha: true, logarithmicDepthBuffer: true});
renderer.setSize( window.innerWidth, window.innerHeight/2 );
renderer.setClearColor(0xffffff);
areal.appendChild( renderer.domElement );

controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', renderer);

animate();

function animate() {
	renderer.render( scene, camera );
	requestAnimationFrame( animate );
}