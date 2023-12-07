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
			</div>
			<div id="arealDescription">
				<div class="haus">
					<div class="number">
						13
					</div>
					<div class="rooms">
						<div>Medienwerkstatt</div>
						<div>Projektraum</div>
					</div>
				</div>
				<div class="haus">
					<div class="number">
						15
					</div>
					<div class="rooms">
						<div>Metallwerkstatt</div>
						<div>Schmuckwerkstatt</div>
					</div>
				</div>
				<div class="haus">
					<div class="number">
						17
					</div>
					<div class="rooms">
						<div>Digitalwerk</div>
					</div>
				</div>
				<div class="haus">
					<div class="number">
						19
					</div>
					<div class="rooms">
						<div>Küche</div>
						<div>Besprechungsraum 1</div>
						<div>Besprechungsraum 2</div>
						<div>Besprechungsraum 3</div>
					</div>
				</div>
			</div>
		</div>
        `;
    }
}
  
customElements.define('areal-component', Areal);


import * as THREE from 'https://unpkg.com/three@v0.159.0/build/three.module.js';

import { OrbitControls } from 'https://unpkg.com/three@v0.159.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@v0.159.0/examples/jsm/loaders/GLTFLoader.js';


let scene, camera, renderer, controls, dynamo;
const areal = document.getElementById('areal');

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 20, window.innerWidth / (window.innerHeight/2), 1, 4000 );
camera.position.z = 100;
camera.position.x = 50;

var light = new THREE.AmbientLight(0xffffff);
scene.add(light);

var directionalLight = new THREE.DirectionalLight( 0xffffff );
directionalLight.position.set( 1, 1, 1 ).normalize();
scene.add( directionalLight );

dynamo = new GLTFLoader();

// Load a glTF resource
dynamo.load(
	'./models/areal.glb',
	// called when the resource is loaded
	function ( gltf ) {
		gltf.scene.children[1].material.opacity = 0.5;
		gltf.scene.children[1].material.transparent = true;
		gltf.scene.children[1].material.smoothShading = true;
		scene.add( gltf.scene );
	},
	// called while loading is progressing
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	// called when loading has errors
	function ( error ) {
		console.log( 'An error happened' );
	}
);

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