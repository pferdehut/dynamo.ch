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
				<div class="hausnummer"></div>
				<div class="hausnummer"></div>
				<div class="hausnummer"></div>
				<div class="hausnummer"></div>
				<div class="hausnummer"></div>
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


import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

let scene, camera, renderer, labelRenderer, controls, dynamo;
const areal = document.getElementById('areal');
const perspective = 30;
const fov = 25;

init();
animate();

function init() {

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( fov, window.innerWidth / (window.innerHeight/2), 1, 10000 );
	//areal.style.perspective = `${perspective}px`;
	
	//camera = new THREE.PerspectiveCamera( 20, window.innerWidth / (window.innerHeight/2), 1, 4000 );
	//camera.position.z = 100;
	//camera.position.x = 50;

	var light = new THREE.AmbientLight(0xffffff, 3);
	scene.add(light);

	dynamo = new GLTFLoader();

	// Load a glTF resource
	dynamo.load(
		'./models/areal.gltf',
		// called when the resource is loaded
		function ( gltf ) {
			gltf.scene.children[3].material.opacity = 0.3;
			gltf.scene.children[3].material.transparent = true;
			gltf.scene.children[3].material.smoothShading = true;
			gltf.scene.children[1].material.opacity = 1.0;
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

	const nummern = document.getElementsByClassName('hausnummer');
	const labels = [13, 15, 17, 19 ,21];

	for (let i = 0; i < nummern.length; i++) {
		nummern[i].textContent = "HAUS " + labels[i];
		nummern[i].style.backgroundColor = 'transparent';
		nummern[i].style.color = "#00ff1b";
		nummern[i].style.fontWeight = "bold";
		nummern[i].style.fontFamily = "'Helvetice Neue Bold', Helvetica, Arial, sans-serif";
		nummern[i].style.fontSize = "0.05em";
	}

	const label13 = new CSS3DObject(nummern[0]);
	const label15 = new CSS3DObject(nummern[1]);
	const label17 = new CSS3DObject(nummern[2]);
	const label19 = new CSS3DObject(nummern[3]);
	const label21 = new CSS3DObject(nummern[4]);

	label13.position.set(13, 2, -1.2);
	label13.rotateY( - Math.PI / 3 );
	label15.position.set(8, 1.75, 1.8);
	label15.rotateY( 0.0872664626 );
	label17.position.set(5, 4.5, -2.25);
	label17.rotateY( 0.0872664626 );
	label19.position.set(2.25, 3.5, 1.9);
	label21.position.set(-6.5, 7.25, 0);
	label21.rotateY( 0.1047197551 );

	scene.add( label13, label15, label17, label19, label21 );

	//const haus15 = document.createElement( 'div' );
	//haus15.className = 'hausnummer';
	//haus15.textContent = 'HAUS 15';
	//haus15.style.backgroundColor = 'transparent';
	//haus15.style.color = "#00ff1b";
	//haus15.style.fontWeight = "bold";
	//haus15.style.fontFamily = "'Helvetice Neue Bold', Helvetica, Arial, sans-serif";
	//haus15.style.fontSize = "0.1em";

	//const haus15Label = new CSS3DObject( haus15 );
	//haus15Label.position.set( 0, 0, 0 );
	//scene.add( haus15Label );

	//camera.lookAt(haus15);

	renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
	renderer.setSize( window.innerWidth, window.innerHeight/2 );
	renderer.setClearColor(0xffffff);
	areal.appendChild( renderer.domElement );

	labelRenderer = new CSS3DRenderer();
	labelRenderer.setSize( window.innerWidth, window.innerHeight/2 );
	labelRenderer.domElement.style.position = 'absolute';
	labelRenderer.domElement.style.top = '0px';
	areal.appendChild( labelRenderer.domElement );

	controls = new OrbitControls(camera, labelRenderer.domElement);

	camera.position.set( -10, 15, perspective );
	controls.update();

	window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {
	renderer.setSize( window.innerWidth, window.innerHeight/2 );
	labelRenderer.setSize( window.innerWidth, window.innerHeight/2 );

	camera.aspect = window.innerWidth / (window.innerHeight/2);
	camera.updateProjectionMatrix();
}

function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
	labelRenderer.render( scene, camera );

	controls.update();
}