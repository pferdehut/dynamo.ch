import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';

let container, uniforms;
let camera, scene, renderer, controls;
let composer, effectFXAA, outlinePass;

let selectedObjects = [];

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const obj3d = new THREE.Object3D();
const group = new THREE.Group();

const params = {
	edgeStrength: 10.0,
	edgeGlow: 0.0,
	edgeThickness: 1.0,
	pulsePeriod: 0,
	rotate: false,
	usePatternTexture: false
};

init();
animate();

function init() {

    const canvas = document.getElementById('lageplan');
    const areal = document.getElementById('areal');

    const width = window.innerWidth*0.925;
	const height = window.innerHeight*0.5;

    renderer = new THREE.WebGLRenderer({canvas, alpha: true, premultipliedAlpha: false});
	renderer.shadowMap.enabled = true;
	renderer.setSize( width, height );

    areal.appendChild( renderer.domElement );

	scene = new THREE.Scene();

				camera = new THREE.PerspectiveCamera( 45, width / height, 0.1, 100 );
				camera.position.set( 0, 0, 5 );

				controls = new OrbitControls( camera, renderer.domElement );
				controls.minDistance = 1;
				controls.maxDistance = 100;
				controls.enablePan = false;
				controls.enableDamping = true;
				controls.dampingFactor = 0.05;

				//

				scene.add( new THREE.AmbientLight( 0xffffff, 0.6 ) );

				const light = new THREE.DirectionalLight( 0xffffff, 4 );
				light.position.set( 2, 2, 4 );
				light.castShadow = true;
				light.shadow.mapSize.width = 1024;
				light.shadow.mapSize.height = 1024;

				const d = 10;

				light.shadow.camera.left = - d;
				light.shadow.camera.right = d;
				light.shadow.camera.top = d;
				light.shadow.camera.bottom = - d;
				light.shadow.camera.far = 50;

				scene.add( light );

                scene.background = new THREE.Color(0xffffff);

				// model

                const mtlloader = new MTLLoader();
                mtlloader.load('models/W19.mtl', function (materials){
                    materials.preload();

                    const loader = new OBJLoader();
                    loader.setMaterials(materials);
				    loader.load('models/W19.obj', function (object) {
                        let scale = 0.75;
                
                        object.traverse(function (child) {
                
                            if (child instanceof THREE.Mesh) {
                                child.geometry.center();
                                child.geometry.computeBoundingSphere();
                                scale = 0.75 * child.geometry.boundingSphere.radius;
                
                                // Set a specific color for the lines
                                const outlineColor = new THREE.Color(0x000000);
                                const phongMaterial = new THREE.MeshPhongMaterial({
                                    color: outlineColor,
                                    transparent: true,
                                    opacity: 0.25
                                });
                
                                child.material = phongMaterial;
                                child.receiveShadow = false;
                                child.castShadow = true;
                            }
                        });
                
                        object.position.y = 0.5;
                        object.scale.divideScalar(scale);
                        obj3d.add(object);
                    });
                })

				
                
                group.rotation.y = 5.5;

				scene.add( group );

				group.add( obj3d );
                
				// postprocessing

				composer = new EffectComposer( renderer );

				const renderPass = new RenderPass( scene, camera );
				composer.addPass( renderPass );

				outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth*0.95, window.innerHeight*0.5), scene, camera);
                outlinePass.edgeStrength = 10.0; // Adjust as needed
                outlinePass.edgeGlow = 0.0; // Adjust as needed
                outlinePass.edgeThickness = 10.0; // Adjust as needed
                outlinePass.pulsePeriod = 0; // Adjust as needed
                outlinePass.visibleEdgeColor = new THREE.Color(0xff0000); // Red color
                composer.addPass(outlinePass);

				const outputPass = new OutputPass();
				composer.addPass( outputPass )

				effectFXAA = new ShaderPass( FXAAShader );
				effectFXAA.uniforms[ 'resolution' ].value.set( 1 / window.innerWidth*0.95, 1 / window.innerHeight*0.5 );
				composer.addPass( effectFXAA );

				window.addEventListener( 'resize', onWindowResize );

				renderer.domElement.style.touchAction = 'none';
				renderer.domElement.addEventListener( 'pointermove', onPointerMove );

				function onPointerMove( event ) {

					if ( event.isPrimary === false ) return;

					mouse.x = ( event.clientX / window.innerWidth*0.95 ) * 2 - 1;
					mouse.y = - ( event.clientY / window.innerHeight*0.5 ) * 2 + 1;

					checkIntersection();

				}

                function checkIntersection() {
                    raycaster.setFromCamera(mouse, camera);
                
                    const intersects = raycaster.intersectObject(scene, true);
                
                    if (intersects.length > 0) {
                        const selectedObject = intersects[0].object;
                        addSelectedObject(selectedObject);
                        outlinePass.selectedObjects = selectedObjects;
                    } else {
                        outlinePass.selectedObjects = [];
                    }
                }

			}

			function onWindowResize() {

				const width = window.innerWidth*0.95;
				const height = window.innerHeight*0.5;

				camera.aspect = width / height;
				camera.updateProjectionMatrix();

				renderer.setSize( width, height );
				composer.setSize( width, height );

				effectFXAA.uniforms[ 'resolution' ].value.set( 1 / window.innerWidth*0.95, 1 / window.innerHeight*0.5 );

			}

			function animate() {

				requestAnimationFrame( animate );

				const timer = performance.now();

				if ( params.rotate ) {

					group.rotation.y = timer * 0.0001;

				}

				controls.update();

				composer.render();

			}