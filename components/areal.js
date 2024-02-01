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
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

let scene, camera, renderer, labelRenderer, controls, dynamo;
let parameters;
const areal = document.getElementById('areal');
const perspective = 40;
const fov = 25;

init();
animate();

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(fov, window.innerWidth / (window.innerHeight / 2), 1, 10000);

    var ambientLight = new THREE.AmbientLight('#ffffff', 2);
    scene.add(ambientLight);

    var light = new THREE.DirectionalLight('#ffffff', 1.5);
    light.position.set(1, 1, 1);
    scene.add(light);

    dynamo = new GLTFLoader();

    function functionActive() {
        console.log('Calling functionActive for active mesh');

        // Find the active mesh using the custom property
        const activeMesh = scene.children.find(child => child.userData.isActive);

        if (activeMesh) {
            console.log('Found active mesh:', activeMesh);
            activeMesh.material.color.set(0x4dff00);
            activeMesh.material.opacity = 1;
        } else {
            console.log('Active mesh not found.');
        }
    }

    dynamo.load(
        './models/Outlines.gltf',
        function ( gltf ) {

            console.log('Traversing scene:');
            gltf.scene.traverse((node) => {
                console.log(node);
            });

            gltf.scene.children[0].material.opacity = 1;
            gltf.scene.children[0].material.color.set(0x000000);
            gltf.scene.children[0].material.transparent = true;
            gltf.scene.children[0].material.smoothShading = true;

            gltf.scene.children[2].material.opacity = 1;
            gltf.scene.children[2].material.color.set(0x000000);
            gltf.scene.children[2].material.transparent = true;
            gltf.scene.children[2].material.smoothShading = true;

            gltf.scene.children[1].material.opacity = 0.75;
            gltf.scene.children[1].material.color.set(0xE5E4E2);
            gltf.scene.children[1].material.transparent = true;
            gltf.scene.children[1].material.smoothShading = true;

            for (let i = 3; i < gltf.scene.children.length; i++) {
                gltf.scene.children[i].material.color.set(0xE5E4E2);
                gltf.scene.children[i].material.opacity = 0.5;
                gltf.scene.children[i].material.transparent = true;
                gltf.scene.children[i].material.depthWrite = false;
            }

            //gltf.scene.children[11].material.alphaHash = true;
			//gltf.scene.children[11].material.color.set(0x4dff00);
			//gltf.scene.children[11].material.opacity = 1;

			function handleButtonClick(materialIndex) {
				console.log('Changing color for material at index:', materialIndex);

				for (let i = 3; i < gltf.scene.children.length; i++) {
					gltf.scene.children[i].material.color.set(0xE5E4E2);
					gltf.scene.children[i].material.opacity = 0.5;
					gltf.scene.children[i].material.transparent = true;
					gltf.scene.children[i].material.depthWrite = false;
				}

				if (materialIndex >= 0 && materialIndex < gltf.scene.children.length) {
					const material = gltf.scene.children[materialIndex].material;
			
					// Set the new color for the material
					material.color.set(0x4dff00);
					material.opacity = 1;
				} else {
					console.log('Material at index', materialIndex, 'not found.');
				}
			}

			const params = {
				buro: () => handleButtonClick(0),
				saal: () => handleButtonClick(11),
				tanzdach: () => handleButtonClick(16),
				probe: () => handleButtonClick(14),
				werk: () => handleButtonClick(13),
				foto: () => handleButtonClick(0),
				keramik: () => handleButtonClick(0),
				textil: () => handleButtonClick(12),
				sitzung: () => handleButtonClick(8),
				restaurant: () => handleButtonClick(3),
				digital: () => handleButtonClick(4),
				prototyping: () => handleButtonClick(7),
				metall: () => handleButtonClick(6),
				medien: () => handleButtonClick(5),
			};

			var gui = new GUI({ autoPlace: false });
		
			var first = gui.addFolder("21");
			first.add(params, "buro").name("Büros");
			first.add(params, "saal").name("Saal");
			first.add(params, "tanzdach").name("Tanzdach");
			first.add(params, "probe").name("Probebühne");
			first.add(params, "werk").name("Werk 21");
			first.add(params, "foto").name("Werkbereich (Fotolabor)");
			first.add(params, "keramik").name("Werkbereich (Keramik)");
			first.add(params, "textil").name("Werkbereich (Textil)");
		
			var second = gui.addFolder("19");
			second.add(params, "sitzung").name("Sitzungsräume");
			second.add(params, "restaurant").name("Restaurant 'Chuchi am Wasser'");
		
			var third = gui.addFolder("17");
			third.add(params, "digital").name("Werkbereich (Digital)");
			third.add(params, "prototyping").name("Prototyping Raum");
		
			var fourth = gui.addFolder("15");
			fourth.add(params, "metall").name("Werkbereich (Metall/Schmuck)");
		
			var sixth = gui.addFolder("13");
			sixth.add(params, "medien").name("Werkbereich (Medien)");
			sixth.add(params, "medien").name("Projektraum");
		
			var customContainer = document.getElementById('arealDescription');
			customContainer.appendChild(gui.domElement);
			handleButtonClick(11); 

			scene.add( gltf.scene );
        },
        function ( xhr ) {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        function ( error ) {
            console.log( 'An error happened' );
        }
    );

    const nummern = document.getElementsByClassName('hausnummer');
    const labels = [13, 15, 17, 19, 21];

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
    label13.rotateY(- Math.PI / 3);
    label15.position.set(8, 1.75, 1.8);
    label15.rotateY(0.0872664626);
    label17.position.set(5, 4.5, -2.25);
    label17.rotateY(0.0872664626);
    label19.position.set(2.25, 3.5, 1.9);
    label21.position.set(-6.5, 7.25, 0);
    label21.rotateY(0.1047197551);

    scene.add(label13, label15, label17, label19, label21);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight / 2);
    renderer.setClearColor(0xffffff);
    renderer.shadowMap.enabled = true;
    renderer.autoClear = false;
    areal.appendChild(renderer.domElement);

    labelRenderer = new CSS3DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight / 2);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0px';
    areal.appendChild(labelRenderer.domElement);

    controls = new OrbitControls(camera, labelRenderer.domElement);
    var obj = {
        add: function() {
            alert("clicked!")
        }
    };


    camera.position.set(20, 15, perspective);
    controls.update();

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerHeight / 2);
    labelRenderer.setSize(window.innerWidth, window.innerHeight / 2);

    camera.aspect = window.innerWidth / (window.innerHeight / 2);
    camera.updateProjectionMatrix();
}

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);

    controls.update();
}