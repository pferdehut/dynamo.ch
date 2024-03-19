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
        <button id="barrierefrei" class="show_arrows"><img src="../img/barrierefreiheit.png" alt="Barrierefreiheit"></button>
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
let isArrowColorToggled = false;

const areal = document.getElementById('areal');
const perspective = 40;
const fov = 25;

const gui = new GUI({ autoPlace: false });
let guiFolders = {}; // Stores references to folders
let guiControls = {}; // Stores references to controls within their folders

const rooms = {
	buro: { id: 1, folder: "21", name: "Büros" },
	saal: { id: 8, folder: "21", name: "Saal" },
	tanzdach: { id: 10, folder: "21", name: "Tanzdach" },
	probe: { id: 6, folder: "21", name: "Probebühne" },
	werk21: { id: 0, folder: "21", name: "Werk 21" },
	foto: { id: 0, folder: "21", name: "Werkbereich (Fotolabor)" },
	kermamik: { id: 12, folder: "21", name: "Werkbereich (Kermik)" },
	textil: { id: 11, folder: "21", name: "Werkbereich (Textil)" },
	sitzung: { id: 9, folder: "19", name: "Sitzungsräume" },
	restaurant: { id: 2, folder: "19", name: "Restaurant (Chuchi am Wasser)" },
	prototyping: { id: 7, folder: "17", name: "Prototyping Raum" },
	digital: { id: 3, folder: "17", name: "Werkbereich (Digital)" },
	metall: { id: 5, folder: "15", name: "Werkbereich (Metall/Schmuck)" },
	projekt: { id: 13, folder: "13", name: "Projektraum" },
	medien: { id: 4, folder: "13", name: "Werkbereich (Medien)" },
};

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(fov, document.body.clientWidth / (window.innerHeight / 2), 1, 10000);
    camera.position.set(20, 15, perspective);

    const ambientLight = new THREE.AmbientLight('#ffffff', 2);
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight('#ffffff', 1.5);
    light.position.set(1, 1, 1);
    scene.add(light);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(document.body.clientWidth, window.innerHeight / 2);
    renderer.setClearColor(0xffffff, 0);
    areal.appendChild(renderer.domElement);

    labelRenderer = new CSS3DRenderer();
    labelRenderer.setSize(document.body.clientWidth, window.innerHeight / 2);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0px';
    areal.appendChild(labelRenderer.domElement);

    controls = new OrbitControls(camera, labelRenderer.domElement);

    dynamo = new GLTFLoader();

	dynamo.load('./models/Outlines_new.gltf', function (gltf) {
		gltfScene = gltf.scene;
		scene.add(gltfScene);

		for (let i = 0; i < gltf.scene.children.length - 3; i++) {
			gltf.scene.children[i].material.color.set(0xFFFFFF);
			gltf.scene.children[i].material.opacity = 0.75;
			gltf.scene.children[i].material.transparent = true;
            gltf.scene.children[i].material.forceSingePlass = true;
            gltf.scene.children[i].material.side = THREE.FrontSide;
		}

        gltf.scene.children[14].material.opacity = 1;
		gltf.scene.children[14].material.color.set(0x000000);
		gltf.scene.children[14].material.transparent = true;
		gltf.scene.children[14].material.smoothShading = true;

		gltf.scene.children[15].material.opacity = 0.75;
		gltf.scene.children[15].material.color.set(0xffffff);
		gltf.scene.children[15].material.transparent = true;
		gltf.scene.children[15].material.smoothShading = true;

		gltf.scene.children[17].material.color.set(0xb200ff);
        gltf.scene.children[17].visible = false;
		gltf.scene.children[17].material.transparent = true;

		gltf.scene.traverse((node) => {
			if (node.isMesh) {
				materials[node.name] = node.material;
				// Store original material properties
				originalMaterials[node.name] = {
					color: node.material.color.clone(), // Clone the color so changes don't affect the stored value
					opacity: node.material.opacity,
                    forceSingePlass: node.material.forceSingePlass
				};
			}
		});

        

	}, undefined, function (error) {
		console.error('An error happened during loading:', error);
	});

    setupGUI();
    document.getElementById("barrierefrei").addEventListener("click", toggleArrows, false);
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
            material.opacity = 0.95; // New opacity
            material.forceSingePlass = false;
        } else {
            // Reset other materials to their original state
            if (originalMaterials[key]) {
                material.color.copy(originalMaterials[key].color); // Reset color
                material.opacity = originalMaterials[key].opacity; // Reset opacity
                material.forceSingePlass =  originalMaterials[key].forceSingePlass;
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

// Toggle Pause
function toggleArrows() {
    gltfScene.traverse((child) => {
        if (child.name === 'Arrows') {
            // Toggle the color based on the current state
            if (isArrowColorToggled) {
                child.visible = false;
            } else {
                child.visible = true;
            }
        }
    });

    // Invert the toggle state
    isArrowColorToggled = !isArrowColorToggled;
}

function onWindowResize() {
    camera.aspect = document.body.clientWidth / (window.innerHeight / 2);
    camera.updateProjectionMatrix();
    renderer.setSize(document.body.clientWidth, window.innerHeight / 2);
    labelRenderer.setSize(document.body.clientWidth, window.innerHeight / 2);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
    controls.update();
}

init();