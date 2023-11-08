import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.143.min.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import {FontLoader} from 'three/addons/loaders/FontLoader.143.min.js';
import {TextGeometry} from 'three/addons/loaders/TextGeometry.143.min.js';
let Dynamo = {
    showWireframe: !1,
    scene: new THREE.Scene(),
    renderer: null,
    container: null,
    camera: null,
    building: null,
    font: null,
    highlightedRoom: null,
    rooms: {},
    defaults: {
        pixelRatio: Math.min(window.devicePixelRatio * 1.25, 3),
        camera: {
            zoom: {
                min: 2,
                max: 6
            },
            position: {
                x: 0,
                y: -33,
                z: 1870
            }
        },
        building: {
            x: 0.3
        },
        floor: {
            tween: {
                time: 1000,
                distance: 1000
            }
        }
    },
    variables: {
        camera: {
            zoom: {
                previous: null
            }
        },
        animation: {
            direction: 1,
            step: .0003
        },
        container: {
            width: null,
            height: null
        },
        building: {
            x: .8,
            size: null
        },
        lamp: {
            position: {
                x: 0,
                y: 200,
                z: 700
            }
        }
    },
    material: {
        wall: new THREE.MeshStandardMaterial({
            color: c1,
            flatShading: !0,
            metalness: .6,
            roughness: .6,
            transparent: !0,
            opacity: 1
        }),
        roof: new THREE.MeshStandardMaterial({
            color: c1,
            flatShading: !0,
            metalness: .6,
            roughness: .6,
            transparent: !0,
            opacity: 1
        }),
        tree: new THREE.MeshStandardMaterial({
            color: c0,
            flatShading: !0,
            metalness: .45,
            roughness: 1
        }),
        font: {
            street: {
                material: new THREE.MeshStandardMaterial({
                    color: c1,
                    flatShading: !1,
                    metalness: .6,
                    roughness: .5,
                    transparent: !0,
                    opacity: 0
                }),
                size: 24,
                height: 0
            },
            wing: {
                material: new THREE.MeshStandardMaterial({
                    color: 0xFFFFFF,
                    flatShading: !1,
                    metalness: .2,
                    roughness: 0,
                    transparent: !0,
                    opacity: 0
                }),
                size: 18,
                height: 0
            },
            room: {
                label: {
                    material: new THREE.MeshStandardMaterial({
                        color: 0xFFFFFF,
                        flatShading: !1,
                        metalness: .2,
                        roughness: 0
                    }),
                    size: 12,
                    height: 0
                },
                number: {
                    material: new THREE.MeshStandardMaterial({
                        color: 0xFFFFFF,
                        flatShading: !1,
                        metalness: .2,
                        roughness: 0
                    }),
                    size: 18,
                    height: 0
                }
            }
        }
    },
    labelOffset: {
        x: 40,
        y: {
            'UG': 15,
            'EG': 15,
            '1OG': 10,
            '2OG': 5,
            '3OG': 5,
            '4OG': -15
        },
        z: -50
    },
    rotatingLabels: [],
    floorOrder: ['U', '0', '1', '2', '3', '4', 'all'],
    floors: {
        'U': {
            name: 'UG',
            move: !1,
            labels: [],
            visible: !1
        },
        '0': {
            name: 'EG',
            move: !0,
            labels: [],
            visible: !0
        },
        '1': {
            name: '1OG',
            move: !0,
            labels: [],
            visible: !0
        },
        '2': {
            name: '2OG',
            move: !0,
            labels: [],
            visible: !0
        },
        '3': {
            name: '3OG',
            move: !0,
            labels: [],
            visible: !0
        },
        '4': {
            name: '4OG',
            move: !0,
            labels: [],
            visible: !0
        },
        'all': {
            name: 'Dach',
            move: !0,
            visible: !0
        }
    },
    init: function() {
        Dynamo.rooms = window.rooms;
        Dynamo.container = $('#lageplan');
        Dynamo.camera = new THREE.PerspectiveCamera(42,parseInt(PROGR3D.container.width() / PROGR3D.container.height()),1,2800);
        Dynamo.renderer = new THREE.WebGLRenderer({
            antialias: !0
        });
        Dynamo.renderer.setClearColor(c0);
        Dynamo.renderer.setPixelRatio(Dynamo.defaults.pixelRatio);
        Dynamo.camera.position.x = Dynamo.defaults.camera.position.x;
        Dynamo.camera.position.y = Dynamo.defaults.camera.position.y;
        Dynamo.camera.position.z = Dynamo.defaults.camera.position.z;
        Dynamo.camera.zoom = Dynamo.defaults.camera.zoom.min;
        Dynamo.container[0].appendChild(Dynamo.renderer.domElement);
        $(window).on('resize', function() {
            Dynamo.variables.container.width = parseInt(Dynamo.container.width());
            Dynamo.variables.container.height = parseInt(Dynamo.container.height());
            Dynamo.renderer.setSize(Dynamo.variables.container.width, Dynamo.variables.container.height);
            Dynamo.camera.aspect = Dynamo.variables.container.width / Dynamo.variables.container.height;
            if (Dynamo.camera.aspect < 1.3) {
                Dynamo.camera.fov = 50
            } else if (Dynamo.camera.aspect < 1.5) {
                Dynamo.camera.fov = 46
            } else if (Dynamo.camera.aspect < 1.7) {
                Dynamo.camera.fov = 44
            } else {
                Dynamo.camera.fov = 42
            }
            Dynamo.camera.updateProjectionMatrix()
        });
        Dynamo.scene.add(new THREE.AmbientLight(0xFFFFFF,1.2));
        Dynamo.lamp = new THREE.DirectionalLight(0xFFFFFF,1.2);
        Dynamo.lamp.position.set(Dynamo.defaults.lamp.position.x, Dynamo.defaults.lamp.position.y, Dynamo.defaults.lamp.position.z);
        Dynamo.scene.add(Dynamo.lamp);

        new OBJLoader().load('models/W19.obj', ()=>{
            
        }
        );

        if ($('#buildingmapfilter').length) {
            $('#buildingmapfilter a').on('click', function(event) {
                event.preventDefault();
                $('#buildingmapfilter a.active').removeClass('active');
                $(this).addClass('active');
                PROGR3D.showFloor($(this).data('g-index'));
                PROGR3D.resetViewPort()
            })
        }
    },
    Gestures: {
        centerLimit: {
            x: null,
            y: null
        },
        mouse: {
            position: {
                start: null,
                previous: null,
                current: null
            }
        },
        touches: {
            catch: !1,
            distance: 0,
            center: {
                x: 0,
                y: 0
            },
        },
        init: function() {
            if ('ontouchstart'in window || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0) {
                PROGR3D.container.on('touchstart', function(event) {
                    PROGR3D.Gestures.mouse.position.start = PROGR3D.Gestures.mouse.position.current = null;
                    if (event.touches.length == 2) {
                        event.preventDefault();
                        PROGR3D.Gestures.touches.catch = !0;
                        PROGR3D.Gestures.update(event.touches, !1)
                    } else if (event.touches.length == 1) {
                        PROGR3D.Gestures.mouse.position.start = {
                            x: event.touches[0].clientX,
                            y: event.touches[0].clientY
                        }
                    }
                }).on('touchmove', function(event) {
                    if (PROGR3D.Gestures.touches.catch && event.touches.length == 2) {
                        event.preventDefault();
                        PROGR3D.Gestures.update(event.touches, !0)
                    } else if (PROGR3D.Gestures.mouse.position.start && event.touches.length == 1) {
                        if (PROGR3D.Gestures.mouse.position.current == null) {
                            PROGR3D.Gestures.mouse.position.current = {
                                x: event.touches[0].clientX,
                                y: event.touches[0].clientY,
                                ts: event.timeStamp
                            };
                            if (Math.abs(PROGR3D.Gestures.mouse.position.current.x - PROGR3D.Gestures.mouse.position.start.x) < Math.abs(PROGR3D.Gestures.mouse.position.current.y - PROGR3D.Gestures.mouse.position.start.y)) {
                                PROGR3D.Gestures.mouse.position.start = PROGR3D.Gestures.mouse.position.current = null
                            }
                        }
                        if (PROGR3D.Gestures.mouse.position.start) {
                            event.preventDefault();
                            PROGR3D.Gestures.rotate(event.touches[0].clientX - PROGR3D.Gestures.mouse.position.current.x);
                            PROGR3D.Gestures.mouse.position.previous = PROGR3D.Gestures.mouse.position.current;
                            PROGR3D.Gestures.mouse.position.current = {
                                x: event.touches[0].clientX,
                                y: event.touches[0].clientY,
                                ts: event.timeStamp
                            }
                        }
                    }
                }).on('touchend touchcancel', function(event) {
                    if (PROGR3D.Gestures.mouse.position.start && PROGR3D.Gestures.mouse.position.current) {
                        PROGR3D.Gestures.mouse.position.current.ts = event.timeStamp;
                        PROGR3D.Gestures.rotateOut()
                    }
                    if (PROGR3D.Gestures.touches.catch) {
                        PROGR3D.Gestures.touches.catch = !1;
                        PROGR3D.Gestures.mouse.position.start = PROGR3D.Gestures.mouse.position.current = null
                    }
                })
            }
            PROGR3D.container.on('wheel', function(event) {
                if (event.originalEvent && event.originalEvent.ctrlKey) {
                    event.preventDefault();
                    PROGR3D.Gestures.setZoom(PROGR3D.camera.zoom + (event.originalEvent.wheelDelta / (PROGR3D.variables.container.width / 4)), !1, {
                        x: event.originalEvent.layerX,
                        y: event.originalEvent.layerY
                    })
                }
            }).on('mousedown', function(event) {
                if (event.originalEvent.button == 0) {
                    PROGR3D.Gestures.mouse.position.start = PROGR3D.Gestures.mouse.position.current = null;
                    if (event.originalEvent.ctrlKey) {
                        event.preventDefault();
                        PROGR3D.container.addClass('dragging')
                    } else {
                        PROGR3D.container.addClass('rotating')
                    }
                    PROGR3D.Gestures.mouse.position.start = PROGR3D.Gestures.mouse.position.current = {
                        x: event.originalEvent.layerX,
                        y: event.originalEvent.layerY,
                        ts: event.timeStamp
                    }
                }
            }).on('mousemove', function(event) {
                if (PROGR3D.Gestures.mouse.position.current) {
                    if (PROGR3D.container.hasClass('dragging')) {
                        PROGR3D.Gestures.moveCenter(event.originalEvent.layerX - PROGR3D.Gestures.mouse.position.current.x, PROGR3D.Gestures.mouse.position.current.y - event.originalEvent.layerY)
                    } else if (PROGR3D.container.hasClass('rotating')) {
                        PROGR3D.Gestures.rotate(event.originalEvent.layerX - PROGR3D.Gestures.mouse.position.current.x)
                    }
                    PROGR3D.Gestures.mouse.position.previous = PROGR3D.Gestures.mouse.position.current;
                    PROGR3D.Gestures.mouse.position.current = {
                        x: event.originalEvent.layerX,
                        y: event.originalEvent.layerY,
                        ts: event.timeStamp
                    }
                }
            }).on('mouseup mouseout', function(event) {
                if (PROGR3D.container.hasClass('rotating') && PROGR3D.Gestures.mouse.position.current) {
                    PROGR3D.Gestures.mouse.position.current.ts = event.timeStamp;
                    PROGR3D.Gestures.rotateOut(event)
                }
                PROGR3D.container.removeClass('dragging').removeClass('rotating');
                if (PROGR3D.Gestures.mouse.position.start) {
                    PROGR3D.variables.animation.direction = (event.originalEvent.layerX > PROGR3D.Gestures.mouse.position.start.x ? 1 : -1)
                }
                PROGR3D.Gestures.mouse.position.start = PROGR3D.Gestures.mouse.position.current = null
            }).on('dblclick', function(event) {
                PROGR3D.resetViewPort()
            }).on('contextmenu', function(event) {
                event.preventDefault()
            });
            PROGR3D.Gestures.limitCenter(PROGR3D.camera.zoom)
        },
        update: function(touches, update) {
            if (PROGR3D.Gestures.touches.catch) {
                let x = (touches[0].clientX + touches[1].clientX) / 2
                  , y = -1 * ((touches[0].clientY + touches[1].clientY) / 2 - $('#building3d').offset().top)
                  , d = Math.sqrt(Math.pow(Math.abs(touches[0].clientX - touches[1].clientX), 2) + Math.pow(Math.abs(touches[0].clientY - touches[1].clientY), 2));
                if (update) {
                    this.setZoom(PROGR3D.camera.zoom + ((d - PROGR3D.Gestures.touches.distance) / (PROGR3D.variables.container.width / 4)));
                    this.moveCenter((x - PROGR3D.Gestures.touches.center.x) * PROGR3D.defaults.pixelRatio, (y - PROGR3D.Gestures.touches.center.y) * PROGR3D.defaults.pixelRatio)
                }
                PROGR3D.Gestures.touches.center = {
                    x: x,
                    y: y
                };
                PROGR3D.Gestures.touches.distance = d
            }
        },
        setZoom: function(value, animated, center) {
            PROGR3D.variables.camera.zoom.previous = PROGR3D.camera.zoom;
            value = Math.max(Math.min(value, PROGR3D.defaults.camera.zoom.max), PROGR3D.defaults.camera.zoom.min);
            if (value != PROGR3D.camera.zoom) {
                PROGR3D.Gestures.limitCenter(value);
                if (animated) {
                    if (PROGR3D.camera.zoom != value) {
                        new TWEEN.Tween({
                            x: PROGR3D.camera.zoom
                        }).to({
                            x: value
                        }, PROGR3D.defaults.floor.tween.time).easing(TWEEN.Easing.Cubic.InOut).onUpdate(function() {
                            PROGR3D.camera.zoom = this.x;
                            PROGR3D.camera.updateProjectionMatrix()
                        }).start()
                    }
                } else {
                    PROGR3D.camera.zoom = value;
                    PROGR3D.camera.updateProjectionMatrix()
                }
                if (center) {
                    let zoomFactor = ((value - PROGR3D.variables.camera.zoom.previous) / PROGR3D.variables.camera.zoom.previous)
                      , xFactor = ((PROGR3D.variables.container.width / 2) - center.x) / PROGR3D.variables.container.width
                      , yFactor = (center.y - (PROGR3D.variables.container.height / 2)) / PROGR3D.variables.container.height;
                    if (value > PROGR3D.variables.camera.zoom.previous) {
                        PROGR3D.Gestures.moveCenter(PROGR3D.variables.container.width * zoomFactor * xFactor, PROGR3D.variables.container.height * zoomFactor * yFactor, animated)
                    } else {
                        zoomFactor = ((PROGR3D.variables.camera.zoom.previous - value) / value);
                        PROGR3D.Gestures.moveCenter(PROGR3D.variables.container.width * zoomFactor * xFactor * -1, PROGR3D.variables.container.height * zoomFactor * yFactor * -1, animated)
                    }
                }
                return !0
            }
            return !1
        },
        limitCenter: function(zoom) {
            PROGR3D.Gestures.centerLimit.x = Math.round(((PROGR3D.variables.building.size.x * (zoom / PROGR3D.defaults.camera.zoom.min)) - PROGR3D.variables.building.size.x + PROGR3D.variables.container.width / 4) * PROGR3D.defaults.pixelRatio);
            PROGR3D.Gestures.centerLimit.y = Math.round(((PROGR3D.variables.building.size.x * (zoom / PROGR3D.defaults.camera.zoom.min)) - PROGR3D.variables.building.size.x + PROGR3D.variables.container.height / 4) * PROGR3D.defaults.pixelRatio)
        },
        moveCenter: function(x, y, animated) {
            let move = PROGR3D.Gestures.scalePosition(x, y);
            if (animated) {
                new TWEEN.Tween({
                    x: PROGR3D.camera.position.x,
                    y: PROGR3D.camera.position.y
                }).to({
                    x: -1 * Math.min(PROGR3D.Gestures.centerLimit.x, Math.max(-1 * PROGR3D.Gestures.centerLimit.x, PROGR3D.camera.position.x - move.x)),
                    y: -1 * (Math.min(PROGR3D.Gestures.centerLimit.y, Math.max(-1 * PROGR3D.Gestures.centerLimit.y, PROGR3D.camera.position.y - move.y)) + PROGR3D.defaults.camera.position.y)
                }, PROGR3D.defaults.floor.tween.time).easing(TWEEN.Easing.Cubic.InOut).onUpdate(function() {
                    PROGR3D.camera.position.x = this.x;
                    PROGR3D.camera.position.y = this.y
                }).start()
            } else {
                PROGR3D.camera.position.x = Math.min(PROGR3D.Gestures.centerLimit.x, Math.max(-1 * PROGR3D.Gestures.centerLimit.x, PROGR3D.camera.position.x - move.x));
                PROGR3D.camera.position.y = Math.min(PROGR3D.Gestures.centerLimit.y, Math.max(-1 * PROGR3D.Gestures.centerLimit.y, PROGR3D.camera.position.y - move.y)) + PROGR3D.defaults.camera.position.y
            }
        },
        setCenter: function(x, y, animated) {
            let move = PROGR3D.Gestures.scalePosition(x, y);
            if (animated) {
                new TWEEN.Tween({
                    x: PROGR3D.camera.position.x,
                    y: PROGR3D.camera.position.y
                }).to({
                    x: move.x,
                    y: move.y
                }, PROGR3D.defaults.floor.tween.time).easing(TWEEN.Easing.Cubic.InOut).onUpdate(function() {
                    PROGR3D.camera.position.x = this.x;
                    PROGR3D.camera.position.y = this.y
                }).start()
            } else {
                PROGR3D.camera.position.x = move.x;
                PROGR3D.camera.position.y = move.y
            }
        },
        scalePosition: function(x, y) {
            x = Math.min(PROGR3D.Gestures.centerLimit.x, Math.max(-1 * PROGR3D.Gestures.centerLimit.x, (x / PROGR3D.camera.zoom) * Math.sqrt(PROGR3D.defaults.pixelRatio)));
            y = Math.min(PROGR3D.Gestures.centerLimit.y, Math.max(-1 * PROGR3D.Gestures.centerLimit.y, (y / PROGR3D.camera.zoom) * Math.sqrt(PROGR3D.defaults.pixelRatio))) + PROGR3D.defaults.camera.position.y;
            return {
                x: Math.round(x),
                y: Math.round(y)
            }
        },
        rotate: function(value) {
            PROGR3D.building.rotation.y += value / (PROGR3D.variables.container.width / 2);
            PROGR3D.building.rotation.y = PROGR3D.building.rotation.y % (2 * Math.PI)
        },
        rotateOut: function() {}
    },
    setBuilding: function(object) {
        PROGR3D.building = new THREE.Group();
        PROGR3D.scene.add(PROGR3D.building);
        PROGR3D.building.add(object);
        let buildingBox = new THREE.Box3().setFromObject(object);
        let center = new THREE.Vector3();
        buildingBox.getCenter(center);
        object.position.sub(center);
        PROGR3D.building.rotation.x = PROGR3D.defaults.building.x;
        PROGR3D.variables.building.size = buildingBox.getSize(center);
        PROGR3D.scene.traverse(function(object) {
            if (object.material) {
                if (object.name == 'Baeume') {
                    object.material = PROGR3D.material.tree
                } else {
                    if (object.name == 'Dach_Struktur') {
                        object.material = PROGR3D.material.roof
                    } else if (object.name != 'Wireframe') {
                        object.material = PROGR3D.material.wall.clone();
                        if (object.name == 'UG_Struktur') {
                            object.material.opacity = 0
                        }
                    }
                }
            }
        });
        if (PROGR3D.showWireframe) {
            let x = buildingBox.max.x + (-1 * buildingBox.min.x)
              , y = buildingBox.max.y + (-1 * buildingBox.min.y)
              , z = buildingBox.max.z + (-1 * buildingBox.min.z);
            var mesh = new THREE.Mesh(new THREE.BoxGeometry(x,y,z,8,4,4),new THREE.MeshBasicMaterial({
                color: 0xFFFFFF,
                wireframe: !0
            }));
            mesh.name = 'Wireframe';
            PROGR3D.building.add(mesh);
            mesh = new THREE.Mesh(new THREE.BoxGeometry(4,PROGR3D.variables.building.size.y,4),new THREE.MeshBasicMaterial({
                color: 0xFF0000,
                wireframe: !0
            }));
            PROGR3D.building.add(mesh);
            mesh.position.set(0, 0, 0);
            for (var i in PROGR3D.floors) {
                let f = PROGR3D.get3DObject(PROGR3D.floors[i].name);
                mesh = new THREE.Mesh(new THREE.BoxGeometry(4,40,4),new THREE.MeshBasicMaterial({
                    color: 0xFFFF00,
                    wireframe: !0
                }));
                mesh.position.set(0, 0, 0);
                f.add(mesh)
            }
        }
        PROGR3D.animate();
        PROGR3D.renderer.render(PROGR3D.scene, PROGR3D.camera)
    },
    onModelReady: function(gltf) {
        window.PROGR3D = PROGR3D;
        PROGR3D.setBuilding(gltf.scene);
        $(window).trigger('resize');
        PROGR3D.Gestures.init();
        PROGR3D.container.addClass('buildingready');
        for (var i = 0; i < PROGR3D.floorOrder.length; i++) {
            PROGR3D.floors[PROGR3D.floorOrder[i]].position = {
                y: PROGR3D.get3DObject(PROGR3D.floors[PROGR3D.floorOrder[i]].name).position.y
            }
        }
        new FontLoader().load(gloryaDefaults.urlPrefix + 'user/gui/js/suisseintl.json', function(font) {
            PROGR3D.font = font;
            PROGR3D.addLabels();
            if (window.initialRoom) {
                PROGR3D.showRoom(window.initialRoom)
            }
        })
    },
    addLabels: function() {
        const b = PROGR3D.get3DObject('Baeume');
        let mesh = PROGR3D._createText('Speichergasse', PROGR3D.font, PROGR3D.material.font.street, {
            x: -180,
            y: 0,
            z: 230
        }, !1);
        mesh.geometry.rotateX(Math.PI / -2);
        b.add(mesh);
        mesh = PROGR3D._createText('Waisenhausplatz', PROGR3D.font, PROGR3D.material.font.street, {
            x: 450,
            y: 0,
            z: -40
        }, !1);
        mesh.geometry.rotateX(Math.PI / -2);
        mesh.geometry.rotateY(Math.PI / 1.95);
        b.add(mesh);
        mesh = PROGR3D._createText('Hodlerstrasse', PROGR3D.font, PROGR3D.material.font.street, {
            x: -160,
            y: 0,
            z: -430
        }, !1);
        mesh.geometry.rotateX(Math.PI / -2);
        mesh.geometry.rotateY(Math.PI / 1.085);
        b.add(mesh);
        PROGR3D.building.add(PROGR3D._createText('PROGR\nWest', PROGR3D.font, PROGR3D.material.font.wing, {
            x: -230,
            y: -30,
            z: 160
        }, !0));
        PROGR3D.building.add(PROGR3D._createText('PROGR\n' + ($('html').attr('lang') == 'de' ? ' Ost' : 'East'), PROGR3D.font, PROGR3D.material.font.wing, {
            x: 120,
            y: -30,
            z: 180
        }, !0));
        PROGR3D.building.add(PROGR3D._createText("PROGR\nAula", PROGR3D.font, PROGR3D.material.font.wing, {
            x: 0,
            y: -25,
            z: -5
        }, !0));
        for (var roomNr in PROGR3D.rooms) {
            if (PROGR3D.rooms[roomNr].label) {
                let f = PROGR3D.floors[PROGR3D.getFloorID(roomNr)]
                  , l = PROGR3D._createText(PROGR3D.rooms[roomNr].label, PROGR3D.font, PROGR3D.material.font.room.label, {
                    x: PROGR3D.rooms[roomNr].x + PROGR3D.labelOffset.x,
                    y: PROGR3D.labelOffset.y[f.name],
                    z: PROGR3D.rooms[roomNr].z + PROGR3D.labelOffset.z
                }, !0, !0);
                f.labels.push(l);
                PROGR3D.get3DObject(f.name).add(l);
                l.visible = !1
            }
        }
        PROGR3D.fadeIn(PROGR3D.material.font.street.material);
        PROGR3D.fadeIn(PROGR3D.material.font.wing.material);
        if (PROGR3D.showWireframe) {
            for (var i in PROGR3D.rooms) {
                console.log(PROGR3D.floors[PROGR3D.getFloorID(i)]);
                const floorName = PROGR3D.floors[PROGR3D.getFloorID(i)].name
                const mesh = new THREE.Mesh(new THREE.BoxGeometry(4,10,4),new THREE.MeshBasicMaterial({
                    color: 0xFFFF00,
                    wireframe: !0
                }));
                mesh.position.set(PROGR3D.rooms[i].x + PROGR3D.labelOffset.x, PROGR3D.labelOffset.y[floorName], PROGR3D.rooms[i].z + PROGR3D.labelOffset.z);
                PROGR3D.get3DObject(floorName).add(mesh)
            }
        }
        PROGR3D.container.addClass('ready')
    },
    fadeIn(material) {
        new TWEEN.Tween({
            opacity: 0
        }).to({
            opacity: 1
        }, PROGR3D.defaults.floor.tween.time).onUpdate(function() {
            material.opacity = this.opacity
        }).start()
    },
    _createText: function(text, font, params, position, isRotating, moveToFront) {
        if (isRotating) {
            let lines = text.split("\n");
            let group = new THREE.Group();
            for (var l in lines) {
                let geometry = new TextGeometry(lines[l],{
                    font: font,
                    size: params.size,
                    height: params.height
                })
                  , mesh0 = new THREE.Mesh(geometry,params.material);
                geometry.center();
                mesh0.position.set(0, (lines.length - l) * params.size * 1.35, (moveToFront ? 65 : 0));
                group.add(mesh0)
            }
            let geometry = new TextGeometry(text,{
                font: font,
                size: params.size,
                height: params.height,
            });
            geometry.center();
            let mesh = new THREE.Mesh();
            mesh.add(group);
            mesh.position.set(position.x, position.y, position.z);
            PROGR3D.rotatingLabels.push(mesh);
            return mesh
        } else {
            let geometry = new TextGeometry(text,{
                font: font,
                size: params.size,
                height: params.height,
            })
              , mesh = new THREE.Mesh(geometry,params.material);
            geometry.center();
            mesh.position.set(position.x, position.y, position.z);
            return mesh
        }
    },
    animate: function(time) {
        requestAnimationFrame(PROGR3D.animate);
        if (PROGR3D.camera.zoom == PROGR3D.defaults.camera.zoom.min && !PROGR3D.container.hasClass('dragging') && !PROGR3D.container.hasClass('rotatingout')) {
            PROGR3D.building.rotation.y += (PROGR3D.variables.animation.direction * PROGR3D.variables.animation.step);
            if (PROGR3D.building.rotation.y > 2 * Math.PI - 0.5 || PROGR3D.building.rotation.y < -.3) {
                PROGR3D.variables.animation.direction = 1
            } else if (PROGR3D.building.rotation.y > Math.PI / 6) {
                PROGR3D.variables.animation.direction = -1
            }
            PROGR3D.building.rotation.y = PROGR3D.building.rotation.y % (2 * Math.PI)
        }
        for (var i = 0; i < PROGR3D.rotatingLabels.length; i++) {
            PROGR3D.rotatingLabels[i].lookAt(PROGR3D.camera.position)
        }
        PROGR3D.renderer.render(PROGR3D.scene, PROGR3D.camera);
        TWEEN.update(time)
    },
    resetViewPort: function() {
        PROGR3D.Gestures.setZoom(PROGR3D.defaults.camera.zoom.min, !0);
        PROGR3D.Gestures.setCenter(0, 0, !0)
    },
    getFloorID: function(roomNr) {
        return (roomNr + "").substring(0, 1)
    },
    showRoom: function(roomNr) {
        if ($(document).scrollTop() > $('#buildingmap').position().top) {
            PROGR.Anchors.scrollTo($('#buildingmap'))
        }
        if (PROGR3D.highlightedRoom && PROGR3D.highlightedRoom != roomNr) {
            PROGR3D._toggleRoom(PROGR3D.highlightedRoom, !1, function() {
                PROGR3D.showRoom(roomNr)
            })
        } else {
            if (PROGR3D.rooms[roomNr]) {
                PROGR3D.showFloor(PROGR3D.getFloorID(roomNr), !0);
                PROGR3D._toggleRoom(roomNr, !0)
            } else {
                alert('Der Raum ' + roomNr + ' konnte nicht gefunden werden.');
                console.log('Room not found: ' + roomNr)
            }
        }
    },
    _toggleRoom: function(roomNr, show, callback) {
        if (show) {
            PROGR3D.highlightedRoom = roomNr;
            let floorName = PROGR3D.floors[PROGR3D.getFloorID(roomNr)].name
              , label = PROGR3D._createText(roomNr + '', PROGR3D.font, PROGR3D.material.font.room.number, {
                x: PROGR3D.rooms[roomNr].x + PROGR3D.labelOffset.x,
                y: PROGR3D.labelOffset.y[floorName],
                z: PROGR3D.rooms[roomNr].z + PROGR3D.labelOffset.z
            }, !0, !0);
            label.name = 'roomNr-' + roomNr;
            window.setTimeout(function() {
                PROGR3D.get3DObject(floorName).add(label)
            }, PROGR3D.defaults.floor.tween.time / 2);
            let zoomDest = 3
              , zoomDiff = (zoomDest / PROGR3D.camera.zoom)
              , x1 = PROGR3D.rooms[roomNr].x * Math.cos(-1 * PROGR3D.building.rotation.y) - PROGR3D.rooms[roomNr].z * Math.sin(-1 * PROGR3D.building.rotation.y)
              , z1 = PROGR3D.rooms[roomNr].x * Math.sin(-1 * PROGR3D.building.rotation.y) + PROGR3D.rooms[roomNr].z * Math.cos(-1 * PROGR3D.building.rotation.y);
            PROGR3D.Gestures.setCenter(x1 / zoomDiff, -1 * z1 / zoomDiff, !0);
            PROGR3D.Gestures.setZoom(zoomDest, !0)
        } else {
            let label = PROGR3D.get3DObject('roomNr-' + roomNr);
            if (label) {
                label.parent.remove(label)
            }
            PROGR3D.highlightedRoom = null
        }
        if (callback) {
            callback()
        }
    },
    showFloor: function(id, hideLabels) {
        if (PROGR3D.highlightedRoom) {
            PROGR3D._toggleRoom(PROGR3D.highlightedRoom, !1)
        }
        switch (id) {
        case 'U':
            PROGR3D._toggleFloor('U', !0, hideLabels);
            for (let i = PROGR3D.floorOrder.length - 1; i > 0; i--) {
                PROGR3D._toggleFloor(PROGR3D.floorOrder[i], !1)
            }
            break;
        default:
            var visible = !0
            PROGR3D._toggleFloor('U', !1);
            for (let i = 1; i < PROGR3D.floorOrder.length; i++) {
                PROGR3D._toggleFloor(PROGR3D.floorOrder[i], visible, hideLabels || (PROGR3D.floorOrder[i] != id));
                if (PROGR3D.floorOrder[i] == id) {
                    visible = !1
                }
            }
            break
        }
        $('#buildingmapfilter a.active').removeClass('active');
        $('#buildingmapfilter a[data-g-index="' + id + '"]').addClass('active');
        let buildingTilt = PROGR3D.variables.building.x
          , lightPos = PROGR3D.variables.lamp.position;
        if (id == 'all') {
            buildingTilt = PROGR3D.defaults.building.x;
            lightPos = PROGR3D.defaults.lamp.position;
            PROGR3D.resetViewPort()
        }
        if (Math.floor(PROGR3D.building.rotation.x * 10) != buildingTilt * 10) {
            new TWEEN.Tween({
                x: PROGR3D.building.rotation.x
            }).to({
                x: buildingTilt
            }, PROGR3D.defaults.floor.tween.time * 1.5).easing(TWEEN.Easing.Cubic.InOut).onUpdate(function() {
                PROGR3D.building.rotation.x = this.x;
                PROGR3D.building.position.y = ((this.x - PROGR3D.defaults.building.x) * 125)
            }).start();
            new TWEEN.Tween({
                x: PROGR3D.lamp.position.x,
                y: PROGR3D.lamp.position.y,
                z: PROGR3D.lamp.position.z
            }).to({
                x: lightPos.x,
                y: lightPos.y,
                z: lightPos.z
            }, PROGR3D.defaults.floor.tween.time * 1.5).easing(TWEEN.Easing.Cubic.InOut).onUpdate(function() {
                PROGR3D.lamp.position.set(this.x, this.y, this.z)
            }).start()
        }
    },
    _toggleFloor: function(id, show, hideLabels) {
        let floor = PROGR3D.get3DObject(PROGR3D.floors[id].name);
        if (floor) {
            if (show && !PROGR3D.floors[id].visible) {
                PROGR3D.floors[id].visible = !0;
                new TWEEN.Tween({
                    y: floor.position.y,
                    opacity: 0
                }).to({
                    y: PROGR3D.floors[id].position.y,
                    opacity: 2
                }, PROGR3D.defaults.floor.tween.time).easing(TWEEN.Easing.Cubic.Out).onUpdate(function() {
                    if (PROGR3D.floors[id].move) {
                        floor.position.y = this.y
                    }
                    let opacity = Math.min(this.opacity, 1);
                    floor.traverse(function(object) {
                        if (object.material) {
                            object.material.opacity = Math.min(opacity, 1)
                        }
                    })
                }).start()
            } else if (!show && PROGR3D.floors[id].visible) {
                PROGR3D.floors[id].visible = !1;
                new TWEEN.Tween({
                    y: floor.position.y,
                    opacity: 2
                }).to({
                    y: (PROGR3D.floors[id].position.y + (PROGR3D.defaults.floor.tween.distance)),
                    opacity: 0
                }, PROGR3D.defaults.floor.tween.time).easing(TWEEN.Easing.Cubic.In).onUpdate(function() {
                    if (PROGR3D.floors[id].move) {
                        floor.position.y = this.y
                    }
                    let opacity = Math.min(this.opacity, 1);
                    floor.traverse(function(object) {
                        if (object.material) {
                            object.material.opacity = opacity
                        }
                    })
                }).start()
            }
            if (show && !hideLabels) {
                window.setTimeout(function() {
                    for (var i in PROGR3D.floors[id].labels) {
                        PROGR3D.floors[id].labels[i].visible = !0
                    }
                }, PROGR3D.defaults.floor.tween.time / 2)
            } else {
                for (var i in PROGR3D.floors[id].labels) {
                    PROGR3D.floors[id].labels[i].visible = !1
                }
            }
        } else {
            console.log('Could not find floor: ' + id)
        }
    },
    get3DObject: function(name) {
        return PROGR3D.scene.getObjectByName(name, !0)
    }
};
if ($(window).scrollTop() > $('#building3d').offset().top + $('#building3d').height()) {
    PROGR3D.init()
} else {
    new IntersectionObserver(function(entries, observer) {
        if (entries.length && entries[0].isIntersecting) {
            observer.disconnect();
            PROGR3D.init()
        }
    }
    ,{
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }).observe($('#building3d')[0])
}
