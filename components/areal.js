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


import * as THREE from '/node_modules/three/build/three.module.min.js';

import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from '/node_modules/three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from '/node_modules/three/examples/jsm/loaders/MTLLoader.js';


let scene, camera, renderer, controls, materials;
const areal = document.getElementById('areal');

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 20, window.innerWidth / (window.innerHeight/2), 1, 4000 );
camera.position.z = 1000;
camera.position.x = 1500;

var light = new THREE.AmbientLight(0xffffff);
scene.add(light);

light = new THREE.HemisphereLight(0xffffff, 0xffffff, 1.0);
light.position.set(0, 1, 0);
scene.add(light);

var directionalLight = new THREE.DirectionalLight( 0xffffff );
directionalLight.position.set( 1, 1, 0.5 ).normalize();
scene.add( directionalLight );

var mesh = null;

var mtlLoader = new MTLLoader();
mtlLoader.load("./models/Ganzes_Areal_black.mtl", function(materials){
    materials.preload();
	var objLoader = new OBJLoader();
	objLoader.setMaterials(materials);
	objLoader.load( './models/Ganzes_Areal_black.obj', function ( object ) {    
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