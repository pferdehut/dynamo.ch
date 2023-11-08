const keyvisualTemplate = document.createElement('template');
let menu = document. getElementsByClassName('mainMenu');
let menuList = menu[0].innerHTML;

class Keyvisual extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
		<div class="start component active">
			<ul class="quicklinks">
				${menuList}
			</ul>
			<div id="keyvisual">
			</div>
		</div>
        `;
    }
}
  
customElements.define('keyvisual-component', Keyvisual);

import * as THREE from '/node_modules/three/build/three.module.min.js';

import { EffectComposer } from '/node_modules/three/examples/jsm/postprocessing/EffectComposer.js';
import { TexturePass } from '/node_modules/three/examples/jsm/postprocessing/TexturePass.js';
import { ClearPass } from '/node_modules/three/examples/jsm/postprocessing/ClearPass.js';
import { MaskPass, ClearMaskPass } from '/node_modules/three/examples/jsm/postprocessing/MaskPass.js';
import { OutputPass } from '/node_modules/three/examples/jsm/postprocessing/OutputPass.js';

let camera, composer, renderer;
let box, torus;

init();
animate();

function init() {

	const canvas = document.getElementById('keyvisual');

    const width = window.innerWidth;
	const height = window.innerHeight;

	camera = new THREE.PerspectiveCamera( 50, width / height, 1, 1000 );
	camera.position.z = 10;

	const scene1 = new THREE.Scene();
	const scene2 = new THREE.Scene();

	box = new THREE.Mesh( new THREE.BoxGeometry( 4, 4, 4 ) );
	scene1.add( box );

	torus = new THREE.Mesh( new THREE.TorusGeometry( 3, 1, 16, 32 ) );
	scene2.add( torus );

	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( 0xffffff );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( width, height );
	renderer.autoClear = false;
	canvas.appendChild( renderer.domElement );

	//

	const clearPass = new ClearPass();

	const clearMaskPass = new ClearMaskPass();

	const maskPass1 = new MaskPass( scene1, camera );
	const maskPass2 = new MaskPass( scene2, camera );

	const texture1 = new THREE.TextureLoader().load( './img/bernina.jpeg' );
	texture1.colorSpace = THREE.SRGBColorSpace;
	texture1.minFilter = THREE.LinearFilter;
	const texture2 = new THREE.TextureLoader().load( './img/monatssujet.jpg' );
	texture2.colorSpace = THREE.SRGBColorSpace;
	texture2.minFilter = THREE.LinearFilter;

	const texturePass1 = new TexturePass( texture1 );
	const texturePass2 = new TexturePass( texture2 );

	const outputPass = new OutputPass();

	const parameters = {
		stencilBuffer: true
	};

	const renderTarget = new THREE.WebGLRenderTarget( width, height, parameters );

	composer = new EffectComposer( renderer, renderTarget );
	composer.addPass( clearPass );
	composer.addPass( maskPass1 );
	composer.addPass( texturePass1 );
	composer.addPass( clearMaskPass );
	composer.addPass( maskPass2 );
	composer.addPass( texturePass2 );
	composer.addPass( clearMaskPass );
	composer.addPass( outputPass );

	window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

	const width = window.innerWidth;
	const height = window.innerHeight - window.innerWidth;

	camera.aspect = width / height;
	camera.updateProjectionMatrix();

	renderer.setSize( width, height );
	composer.setSize( width, height );

}

function animate() {

	requestAnimationFrame( animate );

	const time = performance.now() * 0.001 + 6000;

	box.position.x = Math.cos( time / 1.5 ) * 2;
	box.position.y = Math.sin( time ) * 2;
	box.rotation.x = time;
	box.rotation.y = time / 2;

	torus.position.x = Math.cos( time ) * 2;
	torus.position.y = Math.sin( time / 1.5 ) * 2;
	torus.rotation.x = time;
	torus.rotation.y = time / 2;

	renderer.clear();
	composer.render( time );

}
