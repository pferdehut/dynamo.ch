const arealTemplate = document.createElement('template');

arealTemplate.innerHTML = `
<div class="component lage active">
    <h2>Lageplan</h2>
    <div id="areal">
        <div class="hausnummer"></div>
        <div class="hausnummer"></div>
        <div class="hausnummer"></div>
        <div class="hausnummer"></div>
        <div class="hausnummer"></div>
    </div>
    <div id="arealDescription"></div>
</div>
`;

class Areal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(arealTemplate.content.cloneNode(true));
    }
}

customElements.define('areal-component', Areal);

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

let scene, camera, renderer, labelRenderer, controls, dynamo;
let activeRoomID = 11; // Example initial active room ID

let gltfScene; // Global variable to store the loaded scene
let materials = {}; // Object to store materials by some identifier
let originalMaterials = {}; 

const areal = document.getElementById('areal');
const perspective = 40;
const fov = 25;

const gui = new GUI({ autoPlace: false });
let guiFolders = {}; // Stores references to folders
let guiControls = {}; // Stores references to controls within their folders

const rooms = {
	buro: { id: 0, folder: "21", name: "Büros" },
	saal: { id: 11, folder: "21", name: "Saal" },
	tanzdach: { id: 16, folder: "21", name: "Tanzdach" },
	probe: { id: 14, folder: "21", name: "Probebühne" },
	werk21: { id: 13, folder: "21", name: "Werk 21" },
	foto: { id: 0, folder: "21", name: "Werkbereich (Fotolabor)" },
	kermamik: { id: 0, folder: "21", name: "Werkbereich (Kermik)" },
	textil: { id: 12, folder: "21", name: "Werkbereich (Textil)" },
	sitzung: { id: 8, folder: "19", name: "Sitzungsräume" },
	restaurant: { id: 3, folder: "19", name: "Restaurant (Chuchi am Wasser)" },
	prototyping: { id: 7, folder: "17", name: "Prototyping Raum" },
	digital: { id: 4, folder: "17", name: "Werkbereich (Digital)" },
	metall: { id: 6, folder: "15", name: "Werkbereich (Metall/Schmuck)" },
	projekt: { id: 5, folder: "13", name: "Projektraum" },
	medien: { id: 5, folder: "13", name: "Werkbereich (Medien)" },

};

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(fov, window.innerWidth / (window.innerHeight / 2), 1, 10000);
    camera.position.set(20, 15, perspective);

    const ambientLight = new THREE.AmbientLight('#ffffff', 2);
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight('#ffffff', 1.5);
    light.position.set(1, 1, 1);
    scene.add(light);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight / 2);
    renderer.setClearColor(0xffffff, 0);
    areal.appendChild(renderer.domElement);

    labelRenderer = new CSS3DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight / 2);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0px';
    areal.appendChild(labelRenderer.domElement);

    controls = new OrbitControls(camera, labelRenderer.domElement);

    dynamo = new GLTFLoader();

	dynamo.load('./models/Outlines.gltf', function (gltf) {
		gltfScene = gltf.scene;
		scene.add(gltfScene);

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

		gltf.scene.traverse((node) => {
			if (node.isMesh) {
				materials[node.name] = node.material;
				// Store original material properties
				originalMaterials[node.name] = {
					color: node.material.color.clone(), // Clone the color so changes don't affect the stored value
					opacity: node.material.opacity // Assuming opacity might also be changed
				};
			}
		});

	}, undefined, function (error) {
		console.error('An error happened during loading:', error);
	});

    setupGUI();
    window.addEventListener('resize', onWindowResize, false);

    animate();
}

function handleButtonClick(materialIndex) {
    console.log('Changing color for material at index:', materialIndex);

    const materialKeyToUpdate = Object.keys(materials)[materialIndex]; // Get the key for the material to update
    Object.keys(materials).forEach(key => {
        const material = materials[key];
        if (key === materialKeyToUpdate) {
            // Update the selected material
            material.color.set(0x4dff00); // New color
            material.opacity = 1; // New opacity
        } else {
            // Reset other materials to their original state
            if (originalMaterials[key]) {
                material.color.copy(originalMaterials[key].color); // Reset color
                material.opacity = originalMaterials[key].opacity; // Reset opacity
            }
        }
    });
}


function setupGUI() {

	Object.values(rooms).forEach(room => {
		const folder = guiFolders[room.folder] || gui.addFolder(room.folder);
		guiFolders[room.folder] = folder; // Ensure the folder is stored if newly created
		
		const control = folder.add({[room.name]: () => setActiveRoom(room.id)}, room.name).name(room.name);
		if (!guiControls[room.folder]) guiControls[room.folder] = {};
		guiControls[room.folder][room.name] = control;
	});	

    const customContainer = document.getElementById('arealDescription');
    customContainer.appendChild(gui.domElement);
}

function setActiveRoom(roomId) {
    const roomEntry = Object.entries(rooms).find(([_, room]) => room.id === roomId);
    if (roomEntry) {
        const [roomName, roomDetails] = roomEntry;
        console.log(`Activating room: ${roomId}`);
		handleButtonClick(roomId);
        // Additional logic to activate the room in your application...

        highlightActiveRoomInGUI(roomDetails.folder, roomId);
    } else {
        console.warn(`Room with ID ${roomId} not found.`);
    }
}
let lastActiveControl = null; // Store the last active control for efficient class removal

function highlightActiveRoomInGUI(folderName, roomId) {
    // Remove 'active-control' class from the last active control
    if (lastActiveControl) {
        lastActiveControl.classList.remove('active-control');
    }

    // Find the new active control using roomId and folderName
    const roomEntry = Object.entries(rooms).find(([_, room]) => room.id === roomId && room.folder === folderName);
    if (roomEntry) {
        const [roomName, roomDetails] = roomEntry;
        const control = guiControls[roomDetails.folder][roomDetails.name];
        if (control && control.domElement) {
            const domElement = control.domElement; // Accessing the parent element for styling
            domElement.classList.add('active-control');
            lastActiveControl = domElement; // Update last active control reference
        }
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / (window.innerHeight / 2);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight / 2);
    labelRenderer.setSize(window.innerWidth, window.innerHeight / 2);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
    controls.update();
}

init();
