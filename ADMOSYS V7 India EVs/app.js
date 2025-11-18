// Indian EV Data
const INDIAN_EVS = [
    {
        id: 1,
        brand: 'Tata',
        model: 'Tiago EV',
        type: 'Hatchback',
        price_lakh: 7.99,
        battery_kwh: 24,
        range_km: 315,
        power_bhp: 73.75,
        torque_nm: 170,
        efficiency_km_kwh: 13.1,
        suspension_type: 'MacPherson Strut',
        suspension_rear: 'Torsion Beam',
        weight_kg: 1100,
        current_stability: 58,
        current_efficiency: 13.1,
        improvements: {
            stability_percent: 25,
            efficiency_percent: 28,
            battery_life_percent: 40,
            comfort_percent: 52,
            response_time_ms_before: 280,
            response_time_ms_after: 110
        }
    },
    {
        id: 2,
        brand: 'Tata',
        model: 'Punch EV',
        type: 'SUV',
        price_lakh: 9.99,
        battery_kwh: 35,
        range_km: 421,
        power_bhp: 121,
        torque_nm: 200,
        efficiency_km_kwh: 12.0,
        suspension_type: 'MacPherson Strut',
        suspension_rear: 'Twist Beam',
        weight_kg: 1200,
        current_stability: 62,
        current_efficiency: 12.0,
        improvements: {
            stability_percent: 24,
            efficiency_percent: 26,
            battery_life_percent: 38,
            comfort_percent: 49,
            response_time_ms_before: 260,
            response_time_ms_after: 108
        }
    },
    {
        id: 3,
        brand: 'MG',
        model: 'Comet EV',
        type: 'Hatchback',
        price_lakh: 6.24,
        battery_kwh: 37.9,
        range_km: 405,
        power_bhp: 80,
        torque_nm: 150,
        efficiency_km_kwh: 10.7,
        suspension_type: 'MacPherson Strut',
        suspension_rear: 'Torsion Beam',
        weight_kg: 950,
        current_stability: 56,
        current_efficiency: 10.7,
        improvements: {
            stability_percent: 26,
            efficiency_percent: 30,
            battery_life_percent: 42,
            comfort_percent: 54,
            response_time_ms_before: 290,
            response_time_ms_after: 112
        }
    },
    {
        id: 4,
        brand: 'Citroen',
        model: 'eC3',
        type: 'Hatchback',
        price_lakh: 12.90,
        battery_kwh: 30.2,
        range_km: 320,
        power_bhp: 83,
        torque_nm: 165,
        efficiency_km_kwh: 10.6,
        suspension_type: 'MacPherson Strut',
        suspension_rear: 'Torsion Beam',
        weight_kg: 1050,
        current_stability: 59,
        current_efficiency: 10.6,
        improvements: {
            stability_percent: 25,
            efficiency_percent: 29,
            battery_life_percent: 41,
            comfort_percent: 51,
            response_time_ms_before: 275,
            response_time_ms_after: 109
        }
    },
    {
        id: 5,
        brand: 'Tata',
        model: 'Nexon EV',
        type: 'SUV',
        price_lakh: 12.49,
        battery_kwh: 45,
        range_km: 489,
        power_bhp: 142,
        torque_nm: 215,
        efficiency_km_kwh: 10.9,
        suspension_type: 'MacPherson Strut',
        suspension_rear: 'Twist Beam',
        weight_kg: 1495,
        current_stability: 62,
        current_efficiency: 10.9,
        improvements: {
            stability_percent: 23,
            efficiency_percent: 26,
            battery_life_percent: 37,
            comfort_percent: 48,
            response_time_ms_before: 250,
            response_time_ms_after: 105
        }
    },
    {
        id: 6,
        brand: 'MG',
        model: 'Windsor EV',
        type: 'SUV',
        price_lakh: 12.65,
        battery_kwh: 38,
        range_km: 449,
        power_bhp: 134,
        torque_nm: 200,
        efficiency_km_kwh: 8.5,
        suspension_type: 'MacPherson Strut',
        suspension_rear: 'Twist Beam',
        weight_kg: 1350,
        current_stability: 61,
        current_efficiency: 8.5,
        improvements: {
            stability_percent: 23,
            efficiency_percent: 27,
            battery_life_percent: 38,
            comfort_percent: 50,
            response_time_ms_before: 260,
            response_time_ms_after: 100
        }
    },
    {
        id: 7,
        brand: 'Mahindra',
        model: 'XUV400',
        type: 'SUV',
        price_lakh: 15.49,
        battery_kwh: 40.5,
        range_km: 456,
        power_bhp: 154,
        torque_nm: 215,
        efficiency_km_kwh: 11.2,
        suspension_type: 'MacPherson Strut',
        suspension_rear: 'Multi-Link',
        weight_kg: 1620,
        current_stability: 65,
        current_efficiency: 11.2,
        improvements: {
            stability_percent: 21,
            efficiency_percent: 24,
            battery_life_percent: 35,
            comfort_percent: 46,
            response_time_ms_before: 220,
            response_time_ms_after: 98
        }
    },
    {
        id: 8,
        brand: 'Hyundai',
        model: 'Creta Electric',
        type: 'SUV',
        price_lakh: 18.02,
        battery_kwh: 52,
        range_km: 474,
        power_bhp: 171,
        torque_nm: 285,
        efficiency_km_kwh: 9.1,
        suspension_type: 'MacPherson Strut',
        suspension_rear: 'Multi-Link',
        weight_kg: 1730,
        current_stability: 67,
        current_efficiency: 9.1,
        improvements: {
            stability_percent: 20,
            efficiency_percent: 22,
            battery_life_percent: 33,
            comfort_percent: 44,
            response_time_ms_before: 200,
            response_time_ms_after: 95
        }
    },
    {
        id: 9,
        brand: 'Tata',
        model: 'Curvv EV',
        type: 'SUV',
        price_lakh: 17.49,
        battery_kwh: 55,
        range_km: 502,
        power_bhp: 165,
        torque_nm: 190,
        efficiency_km_kwh: 9.1,
        suspension_type: 'MacPherson Strut',
        suspension_rear: 'Multi-Link',
        weight_kg: 1680,
        current_stability: 66,
        current_efficiency: 9.1,
        improvements: {
            stability_percent: 21,
            efficiency_percent: 23,
            battery_life_percent: 34,
            comfort_percent: 45,
            response_time_ms_before: 210,
            response_time_ms_after: 97
        }
    },
    {
        id: 10,
        brand: 'Mahindra',
        model: 'BE 6',
        type: 'SUV',
        price_lakh: 18.90,
        battery_kwh: 88,
        range_km: 640,
        power_bhp: 228,
        torque_nm: 380,
        efficiency_km_kwh: 7.3,
        suspension_type: 'Dual Wishbone',
        suspension_rear: 'Multi-Link',
        weight_kg: 1850,
        current_stability: 70,
        current_efficiency: 7.3,
        improvements: {
            stability_percent: 18,
            efficiency_percent: 20,
            battery_life_percent: 30,
            comfort_percent: 42,
            response_time_ms_before: 180,
            response_time_ms_after: 90
        }
    }
];

// Maintain backward compatibility
const VEHICLES = INDIAN_EVS;

// Application State
let appState = {
    admosysActive: false,
    currentView: 'overview',
    selectedVehicle: null,
    filters: {
        price: 'all',
        type: 'all'
    },
    rankingMetric: 'stability'
};

// Physics Constants
const PHYSICS = {
    mass_light: 500,
    mass_medium: 1000,
    mass_heavy: 1500,
    gravity: 9.81,
    spring_stiffness: 25000,
    damping_coefficient: 1500,
    max_compression: 0.2,
    max_travel: 0.2,
    wheel_radius: 0.35,
    wheelbase: 2.7,
    track_width: 1.6,
    chassis_length: 4.5,
    chassis_width: 1.8,
    chassis_height: 1.5
};

const TERRAIN_EFFECTS = {
    Flat: { pitch: 0, roll: 0, roughness: 0, loadVariation: 0 },
    Rough: { pitch: 0, roll: 0, roughness: 0.1, loadVariation: 0.1 },
    Uphill: { pitch: 10, roll: 0, roughness: 0, loadVariation: 0.15 },
    Downhill: { pitch: -10, roll: 0, roughness: 0, loadVariation: -0.15 },
    'Off-road': { pitch: 5, roll: 3, roughness: 0.2, loadVariation: 0.2 }
};

// Babylon.js 3D Engine
let canvas, engine, scene, camera;
let vehicleMeshes = {};
let suspensionComponents = {};
let groundMesh;
let animationId;

// Application State
let simulationState = {
    isRunning: false,
    isPaused: false,
    time: 0,
    admosysActive: false, // Start in OFF mode
    sensors: {
        torque: 150,
        vibration: 1.5,
        temperature: 50,
        wheelSpeed: 1000,
        terrain: 'Flat',
        load: 'Medium'
    },
    suspension: {
        FL: { compression: 0, velocity: 0, rotation: 0, force: 0, springForce: 0, dampingForce: 0 },
        FR: { compression: 0, velocity: 0, rotation: 0, force: 0, springForce: 0, dampingForce: 0 },
        RL: { compression: 0, velocity: 0, rotation: 0, force: 0, springForce: 0, dampingForce: 0 },
        RR: { compression: 0, velocity: 0, rotation: 0, force: 0, springForce: 0, dampingForce: 0 }
    },
    pitch: 0,
    roll: 0,
    chassisHeight: 0.8,
    efficiency: 35 // Start with OFF mode efficiency
};

// Chart State
let chartInstance = null;
let chartData = {
    timePoints: [],
    torque: [],
    temperature: [],
    efficiency: [],
    dampingForce: [],
    springCompression: [],
    dampingQuality: [],
    chassisPitch: [],
    chassisRoll: [],
    wheelVariance: []
};
let lastChartUpdate = 0;
const CHART_UPDATE_INTERVAL = 500; // ms
const MAX_TIME_WINDOW = 60; // seconds

// Babylon.js 3D Scene Initialization
function initBabylonScene() {
    canvas = document.getElementById('renderCanvas');
    engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
    
    // Create scene
    scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0.122, 0.129, 0.129);
    
    // Create camera
    camera = new BABYLON.ArcRotateCamera('camera', Math.PI / 4, Math.PI / 3, 15, new BABYLON.Vector3(0, 0.5, 0), scene);
    camera.attachControl(canvas, true);
    camera.lowerRadiusLimit = 8;
    camera.upperRadiusLimit = 25;
    camera.lowerBetaLimit = 0.1;
    camera.upperBetaLimit = Math.PI / 2;
    camera.wheelPrecision = 50;
    camera.panningSensibility = 1000;
    
    // Lighting
    const hemiLight = new BABYLON.HemisphericLight('hemiLight', new BABYLON.Vector3(0, 1, 0), scene);
    hemiLight.intensity = 0.7;
    
    const dirLight = new BABYLON.DirectionalLight('dirLight', new BABYLON.Vector3(-1, -2, -1), scene);
    dirLight.position = new BABYLON.Vector3(5, 10, 5);
    dirLight.intensity = 0.8;
    
    const fillLight = new BABYLON.HemisphericLight('fillLight', new BABYLON.Vector3(0, -1, 0), scene);
    fillLight.intensity = 0.3;
    
    // Create ground
    createGround();
    
    // Create vehicle
    createVehicle();
    
    // Render loop
    engine.runRenderLoop(() => {
        scene.render();
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        engine.resize();
    });
}

// 3D Model Creation Functions

function createGround() {
    groundMesh = BABYLON.MeshBuilder.CreateGround('ground', { width: 30, height: 20, subdivisions: 32 }, scene);
    const groundMaterial = new BABYLON.StandardMaterial('groundMat', scene);
    groundMaterial.diffuseColor = new BABYLON.Color3(0.133, 0.133, 0.133);
    groundMaterial.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    groundMesh.material = groundMaterial;
    groundMesh.position.y = -0.5;
}

function updateGroundTerrain(terrain) {
    const terrainData = TERRAIN_EFFECTS[terrain];
    const pitchRad = terrainData.pitch * Math.PI / 180;
    const rollRad = terrainData.roll * Math.PI / 180;
    
    groundMesh.rotation.x = pitchRad;
    groundMesh.rotation.z = rollRad;
    
    if (terrain === 'Rough' || terrain === 'Off-road') {
        const positions = groundMesh.getVerticesData(BABYLON.VertexBuffer.PositionKind);
        const originalPositions = groundMesh._originalPositions || positions.slice();
        groundMesh._originalPositions = originalPositions;
        
        for (let i = 0; i < positions.length; i += 3) {
            const x = originalPositions[i];
            const z = originalPositions[i + 2];
            const noise = Math.sin(x * 2 + simulationState.time * 0.5) * Math.cos(z * 2 + simulationState.time * 0.3) * terrainData.roughness;
            positions[i + 1] = originalPositions[i + 1] + noise;
        }
        groundMesh.updateVerticesData(BABYLON.VertexBuffer.PositionKind, positions);
    }
}

function createVehicle() {
    // Chassis/Body - STABLE REFERENCE FRAME
    const chassis = BABYLON.MeshBuilder.CreateBox('chassis', { 
        width: PHYSICS.chassis_width, 
        height: PHYSICS.chassis_height * 0.3, 
        depth: PHYSICS.chassis_length 
    }, scene);
    const chassisMaterial = new BABYLON.StandardMaterial('chassisMat', scene);
    chassisMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);
    chassisMaterial.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    chassisMaterial.emissiveColor = new BABYLON.Color3(0, 0.1, 0.05); // Slight glow to indicate stability
    chassis.material = chassisMaterial;
    chassis.position.y = 0.8; // FIXED STABLE HEIGHT
    chassis.edgesWidth = 8.0;
    chassis.edgesColor = new BABYLON.Color4(0, 1, 0.255, 1);
    chassis.enableEdgesRendering();
    vehicleMeshes.chassis = chassis;
    
    // Add "LEVEL" indicator on chassis
    const levelIndicator = BABYLON.MeshBuilder.CreatePlane('levelIndicator', {
        width: 0.8,
        height: 0.3
    }, scene);
    const levelMaterial = new BABYLON.StandardMaterial('levelMat', scene);
    const levelTexture = new BABYLON.DynamicTexture('levelTexture', {width: 512, height: 256}, scene);
    const ctx = levelTexture.getContext();
    ctx.fillStyle = '#00FF41';
    ctx.font = 'bold 120px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('LEVEL', 256, 128);
    levelTexture.update();
    levelMaterial.diffuseTexture = levelTexture;
    levelMaterial.emissiveTexture = levelTexture;
    levelMaterial.opacityTexture = levelTexture;
    levelIndicator.material = levelMaterial;
    levelIndicator.position = new BABYLON.Vector3(0, 0.3, 0);
    levelIndicator.rotation.x = -Math.PI / 2;
    levelIndicator.parent = chassis;
    vehicleMeshes.levelIndicator = levelIndicator;
    
    // Cabin
    const cabin = BABYLON.MeshBuilder.CreateBox('cabin', { 
        width: PHYSICS.chassis_width * 0.8, 
        height: PHYSICS.chassis_height * 0.5, 
        depth: PHYSICS.chassis_length * 0.4 
    }, scene);
    cabin.material = chassisMaterial;
    cabin.position.y = 1.2;
    cabin.parent = chassis;
    vehicleMeshes.cabin = cabin;
    
    // Create wheels and suspension
    const wheelPositions = {
        FL: { x: -PHYSICS.track_width / 2, z: PHYSICS.wheelbase / 2 },
        FR: { x: PHYSICS.track_width / 2, z: PHYSICS.wheelbase / 2 },
        RL: { x: -PHYSICS.track_width / 2, z: -PHYSICS.wheelbase / 2 },
        RR: { x: PHYSICS.track_width / 2, z: -PHYSICS.wheelbase / 2 }
    };
    
    Object.keys(wheelPositions).forEach(key => {
        const pos = wheelPositions[key];
        createWheelAssembly(key, pos.x, pos.z);
    });
}

function createWheelAssembly(name, x, z) {
    const assembly = {};
    
    // Wheel
    const wheel = BABYLON.MeshBuilder.CreateCylinder(name + '_wheel', {
        diameter: PHYSICS.wheel_radius * 2,
        height: 0.3,
        tessellation: 24
    }, scene);
    wheel.rotation.z = Math.PI / 2;
    const wheelMaterial = new BABYLON.StandardMaterial(name + '_wheelMat', scene);
    wheelMaterial.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    wheel.material = wheelMaterial;
    wheel.position = new BABYLON.Vector3(x, 0.35, z);
    assembly.wheel = wheel;
    
    // Rim
    const rim = BABYLON.MeshBuilder.CreateCylinder(name + '_rim', {
        diameter: PHYSICS.wheel_radius * 1.2,
        height: 0.25,
        tessellation: 12
    }, scene);
    rim.rotation.z = Math.PI / 2;
    const rimMaterial = new BABYLON.StandardMaterial(name + '_rimMat', scene);
    rimMaterial.diffuseColor = new BABYLON.Color3(0.7, 0.7, 0.7);
    rim.material = rimMaterial;
    rim.parent = wheel;
    rim.position = new BABYLON.Vector3(0, 0, 0);
    assembly.rim = rim;
    
    // Spring (coil)
    const spring = createSpringMesh(name + '_spring', scene);
    spring.position = new BABYLON.Vector3(x, 0.5, z);
    assembly.spring = spring;
    assembly.springMaterial = spring.material;
    
    // Damper
    const damper = BABYLON.MeshBuilder.CreateCylinder(name + '_damper', {
        diameter: 0.08,
        height: 0.6,
        tessellation: 12
    }, scene);
    const damperMaterial = new BABYLON.StandardMaterial(name + '_damperMat', scene);
    damperMaterial.diffuseColor = new BABYLON.Color3(0, 0.467, 0.745);
    damper.material = damperMaterial;
    damper.position = new BABYLON.Vector3(x + 0.15, 0.5, z);
    assembly.damper = damper;
    assembly.damperMaterial = damperMaterial;
    
    // Control arms
    const upperArm = BABYLON.MeshBuilder.CreateBox(name + '_upperArm', {
        width: 0.1, height: 0.05, depth: 0.4
    }, scene);
    const armMaterial = new BABYLON.StandardMaterial(name + '_armMat', scene);
    armMaterial.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
    upperArm.material = armMaterial;
    upperArm.position = new BABYLON.Vector3(x * 0.5, 0.7, z);
    assembly.upperArm = upperArm;
    
    const lowerArm = BABYLON.MeshBuilder.CreateBox(name + '_lowerArm', {
        width: 0.1, height: 0.05, depth: 0.5
    }, scene);
    lowerArm.material = armMaterial;
    lowerArm.position = new BABYLON.Vector3(x * 0.5, 0.3, z);
    assembly.lowerArm = lowerArm;
    
    suspensionComponents[name] = assembly;
}

function createSpringMesh(name, scene) {
    const path = [];
    const coils = 10;
    const radius = 0.15;
    const height = 0.6;
    const turns = 2 * Math.PI * coils;
    const steps = 100;
    
    for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const angle = t * turns;
        const x = Math.cos(angle) * radius;
        const y = t * height;
        const z = Math.sin(angle) * radius;
        path.push(new BABYLON.Vector3(x, y, z));
    }
    
    const spring = BABYLON.MeshBuilder.CreateTube(name, {
        path: path,
        radius: 0.025,
        tessellation: 12,
        updatable: true
    }, scene);
    
    const springMaterial = new BABYLON.StandardMaterial(name + '_mat', scene);
    springMaterial.diffuseColor = new BABYLON.Color3(0, 1, 0.255);
    springMaterial.emissiveColor = new BABYLON.Color3(0, 0.2, 0.05);
    spring.material = springMaterial;
    
    return spring;
}

function updateSpringColor(name, compression, temperature) {
    const material = suspensionComponents[name].springMaterial;
    
    if (simulationState.admosysActive) {
        // ON MODE: Green colors for active control
        if (compression > 70) {
            material.diffuseColor = new BABYLON.Color3(1, 0.843, 0);
            material.emissiveColor = new BABYLON.Color3(0.2, 0.168, 0);
        } else if (compression > 50) {
            material.diffuseColor = new BABYLON.Color3(0, 1, 0.255);
            material.emissiveColor = new BABYLON.Color3(0, 0.3, 0.05);
        } else {
            material.diffuseColor = new BABYLON.Color3(0, 0.467, 0.745);
            material.emissiveColor = new BABYLON.Color3(0, 0.1, 0.15);
        }
    } else {
        // OFF MODE: Orange/red colors for passive suspension
        if (compression > 70 || temperature > 70) {
            material.diffuseColor = new BABYLON.Color3(1, 0, 0);
            material.emissiveColor = new BABYLON.Color3(0.2, 0, 0);
        } else if (compression > 50) {
            material.diffuseColor = new BABYLON.Color3(1, 0.647, 0);
            material.emissiveColor = new BABYLON.Color3(0.2, 0.13, 0);
        } else {
            material.diffuseColor = new BABYLON.Color3(1, 0.647, 0);
            material.emissiveColor = new BABYLON.Color3(0.15, 0.1, 0);
        }
    }
}

function updateDamperColor(name, force) {
    const material = suspensionComponents[name].damperMaterial;
    const normalized = Math.abs(force) / 8000; // Adjusted threshold
    
    if (normalized > 0.8) {
        // High damping - active response
        material.diffuseColor = new BABYLON.Color3(1, 0, 0);
        material.emissiveColor = new BABYLON.Color3(0.2, 0, 0);
    } else if (normalized > 0.4) {
        // Medium damping - working
        material.diffuseColor = new BABYLON.Color3(0.4, 0.733, 0.415);
        material.emissiveColor = new BABYLON.Color3(0.08, 0.15, 0.08);
    } else {
        // Low damping - steady state
        material.diffuseColor = new BABYLON.Color3(0, 0.467, 0.745);
        material.emissiveColor = new BABYLON.Color3(0, 0.09, 0.15);
    }
}

function updateSuspensionPosition(name, compression, temperature) {
    const components = suspensionComponents[name];
    const compressionMeters = (compression / 100) * PHYSICS.max_travel;
    
    // ACTIVE SUSPENSION: Wheel moves DOWN when load increases
    // Higher compression = wheel moves down relative to STABLE chassis
    const baseY = 0.35;
    const targetY = baseY - compressionMeters * 1.5; // Amplify movement for visibility
    components.wheel.position.y = targetY;
    
    // Update spring - compresses as wheel moves down
    const springBaseY = 0.8; // Attached to chassis (stable)
    const springBottomY = targetY + 0.35; // Attached to wheel (moves)
    const springLength = springBaseY - springBottomY;
    const springCompressionRatio = springLength / 0.6; // 0.6 is rest length
    
    components.spring.position.y = (springBaseY + springBottomY) / 2;
    components.spring.scaling.y = springCompressionRatio;
    
    // Update damper - extends/compresses with spring
    const damperBaseY = 0.8; // Attached to chassis (stable)
    const damperBottomY = targetY + 0.35; // Attached to wheel (moves)
    const damperLength = damperBaseY - damperBottomY;
    const damperCompressionRatio = damperLength / 0.6;
    
    components.damper.position.y = (damperBaseY + damperBottomY) / 2;
    components.damper.scaling.y = damperCompressionRatio;
    
    // Update control arms - connect chassis to wheel
    const armChassisY = 0.8; // Fixed to chassis
    const armWheelY = targetY;
    
    components.upperArm.position.y = (armChassisY + armWheelY) / 2 + 0.1;
    components.lowerArm.position.y = (armChassisY + armWheelY) / 2 - 0.1;
    
    // Rotate arms to follow wheel movement
    const wheelX = components.wheel.position.x;
    const chassisX = wheelX * 0.5;
    const armAngle = Math.atan2(armWheelY - armChassisY, wheelX - chassisX);
    components.upperArm.rotation.z = armAngle * 0.3;
    components.lowerArm.rotation.z = armAngle * 0.3;
    
    // Update colors
    updateSpringColor(name, compression, temperature);
    updateDamperColor(name, components.dampingForce || 0);
}

// Drawing Functions (legacy - removed)
function oldDrawGrid() {
    ctx.strokeStyle = 'rgba(100, 100, 100, 0.2)';
    ctx.lineWidth = 1;
    
    for (let x = 0; x <= 900; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 600);
        ctx.stroke();
    }
    
    for (let y = 0; y <= 600; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(900, y);
        ctx.stroke();
    }
}

function oldDrawGround(terrain) {
    const groundY = 500;
    const terrainData = TERRAIN_EFFECTS[terrain];
    
    ctx.fillStyle = '#222222';
    ctx.fillRect(0, groundY, 900, 100);
    
    // Draw terrain variations
    ctx.strokeStyle = '#444444';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    if (terrain === 'Rough' || terrain === 'Off-road') {
        const roughness = terrainData.roughness;
        for (let x = 0; x <= 900; x += 10) {
            const noise = Math.sin(x * 0.1 + simulationState.time * 2) * roughness;
            const y = groundY + noise;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
    } else {
        const angle = terrainData.pitch * Math.PI / 180;
        const startY = groundY + Math.tan(angle) * 450;
        const endY = groundY - Math.tan(angle) * 450;
        ctx.moveTo(0, startY);
        ctx.lineTo(900, endY);
    }
    
    ctx.stroke();
}

function oldDrawSpring(x, y, compression, temperature) {
    const springHeight = 100;
    const compressedHeight = springHeight * (1 - compression / 200);
    const coilWidth = 20;
    const numCoils = 8;
    const spacing = compressedHeight / numCoils;
    
    // Color based on temperature and compression
    let color;
    if (temperature >= 80) color = '#FF0000';
    else if (temperature >= 60) color = '#FFD700';
    else if (compression > 70) color = '#FFD700';
    else if (compression > 30) color = '#00FF41';
    else color = '#00FF41';
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    for (let i = 0; i < numCoils; i++) {
        const yPos = y - (i * spacing);
        const xOffset = (i % 2 === 0) ? coilWidth : -coilWidth;
        ctx.lineTo(x + xOffset, yPos - spacing / 2);
        ctx.lineTo(x, yPos - spacing);
    }
    
    ctx.stroke();
    
    return compressedHeight;
}

function oldDrawDamper(x, y, height, force) {
    const damperWidth = 10;
    const pistonHeight = 20;
    
    // Color based on damping force
    const normalized = Math.abs(force) / 10000;
    let color;
    if (normalized > 0.8) color = '#FF0000';
    else if (normalized > 0.6) color = '#FFA500';
    else if (normalized > 0.3) color = '#00FF41';
    else color = '#0077BE';
    
    ctx.fillStyle = color;
    ctx.fillRect(x - damperWidth / 2, y - height, damperWidth, height);
    
    // Piston
    ctx.fillStyle = '#CCCCCC';
    ctx.fillRect(x - damperWidth, y - height - pistonHeight, damperWidth * 2, pistonHeight);
}

function oldDrawWheel(x, y, rotation, speed, compression) {
    const radius = PHYSICS.wheel_radius;
    
    // Wheel
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Rim
    ctx.fillStyle = '#CCCCCC';
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.6, 0, Math.PI * 2);
    ctx.fill();
    
    // Rotation indicator
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.beginPath();
    const angle = rotation;
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * radius * 0.7, y + Math.sin(angle) * radius * 0.7);
    ctx.stroke();
    
    // Spokes
    ctx.strokeStyle = '#888888';
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
        const spokeAngle = angle + (i * Math.PI * 2 / 5);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(spokeAngle) * radius * 0.5, y + Math.sin(spokeAngle) * radius * 0.5);
        ctx.stroke();
    }
}

function oldDrawVehicleBody(x, y, width, height, pitch, temperature) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(pitch * Math.PI / 180);
    
    // Body color based on temperature
    let color = '#333333';
    if (temperature >= 80) {
        color = '#661111';
    } else if (temperature >= 60) {
        color = '#554411';
    }
    
    ctx.fillStyle = color;
    ctx.fillRect(-width / 2, -height / 2, width, height);
    
    // Cabin
    ctx.fillStyle = '#444444';
    const cabinWidth = width * 0.6;
    const cabinHeight = height * 0.8;
    ctx.fillRect(-cabinWidth / 2, -height / 2 - cabinHeight, cabinWidth, cabinHeight);
    
    // Windows
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(-cabinWidth / 2 + 20, -height / 2 - cabinHeight + 10, cabinWidth - 40, cabinHeight * 0.6);
    
    ctx.restore();
}

function oldDrawControlArm(x1, y1, x2, y2) {
    ctx.strokeStyle = '#666666';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function oldDrawText(text, x, y, size = 12, color = '#FFFFFF') {
    ctx.fillStyle = color;
    ctx.font = `${size}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(text, x, y);
}

// Camera View Presets
function setCameraView(view) {
    if (!camera) return;
    
    const target = new BABYLON.Vector3(0, 0.5, 0);
    
    switch(view) {
        case 'front':
            camera.setPosition(new BABYLON.Vector3(0, 2, 10));
            break;
        case 'side':
            camera.setPosition(new BABYLON.Vector3(-10, 2, 0));
            break;
        case 'top':
            camera.setPosition(new BABYLON.Vector3(0, 15, 0));
            break;
        case 'iso':
        default:
            camera.setPosition(new BABYLON.Vector3(-8, 6, -8));
            break;
    }
    camera.setTarget(target);
}

// Chart.js Configuration and Functions
function initChart() {
    const ctx = document.getElementById('controlResponseChart').getContext('2d');
    
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.timePoints,
            datasets: [
                {
                    label: 'Torque Output (Nm)',
                    data: chartData.torque,
                    borderColor: '#FF6B6B',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: 0.4,
                    yAxisID: 'y-torque'
                },
                {
                    label: 'Motor Temperature (°C)',
                    data: chartData.temperature,
                    borderColor: '#FFA726',
                    backgroundColor: 'rgba(255, 167, 38, 0.1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: 0.4,
                    yAxisID: 'y-temp'
                },
                {
                    label: 'System Efficiency (%)',
                    data: chartData.efficiency,
                    borderColor: '#66BB6A',
                    backgroundColor: 'rgba(102, 187, 106, 0.1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: 0.4,
                    yAxisID: 'y-percent'
                },
                {
                    label: 'Damping Force (N)',
                    data: chartData.dampingForce,
                    borderColor: '#42A5F5',
                    backgroundColor: 'rgba(66, 165, 245, 0.1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: 0.4,
                    yAxisID: 'y-force'
                },
                {
                    label: 'Spring Compression Avg (%)',
                    data: chartData.springCompression,
                    borderColor: '#AB47BC',
                    backgroundColor: 'rgba(171, 71, 188, 0.1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: 0.4,
                    yAxisID: 'y-percent'
                },
                {
                    label: 'Damping Quality (%)',
                    data: chartData.dampingQuality,
                    borderColor: '#29B6F6',
                    backgroundColor: 'rgba(41, 182, 246, 0.1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: 0.4,
                    yAxisID: 'y-percent'
                },
                {
                    label: 'Chassis Pitch (°) - STABLE',
                    data: chartData.chassisPitch,
                    borderColor: '#00FF41',
                    backgroundColor: 'rgba(0, 255, 65, 0.1)',
                    borderWidth: 3,
                    pointRadius: 0,
                    tension: 0,
                    yAxisID: 'y-angle'
                },
                {
                    label: 'Chassis Roll (°) - STABLE',
                    data: chartData.chassisRoll,
                    borderColor: '#00FF41',
                    backgroundColor: 'rgba(0, 255, 65, 0.05)',
                    borderWidth: 3,
                    pointRadius: 0,
                    tension: 0,
                    borderDash: [5, 5],
                    yAxisID: 'y-angle'
                },
                {
                    label: 'Wheel Position Variance (mm)',
                    data: chartData.wheelVariance,
                    borderColor: '#FF6B6B',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: 0.4,
                    yAxisID: 'y-variance'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 250
            },
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim(),
                        font: {
                            size: 11
                        },
                        usePointStyle: true,
                        boxWidth: 6
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.parsed.y.toFixed(1);
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    title: {
                        display: true,
                        text: 'Time (seconds)',
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary').trim()
                    },
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary').trim()
                    },
                    grid: {
                        color: 'rgba(100, 100, 100, 0.1)'
                    },
                    min: 0,
                    max: MAX_TIME_WINDOW
                },
                'y-torque': {
                    type: 'linear',
                    display: false,
                    position: 'left',
                    min: 0,
                    max: 500
                },
                'y-temp': {
                    type: 'linear',
                    display: false,
                    position: 'left',
                    min: 20,
                    max: 100
                },
                'y-percent': {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Percentage / Normalized Values',
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary').trim()
                    },
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary').trim()
                    },
                    grid: {
                        color: 'rgba(100, 100, 100, 0.1)'
                    },
                    min: 0,
                    max: 100
                },
                'y-force': {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    min: 0,
                    max: 10000
                },
                'y-angle': {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Chassis Angle (°) - Always 0',
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-success').trim()
                    },
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-success').trim()
                    },
                    grid: {
                        color: 'rgba(0, 255, 65, 0.1)'
                    },
                    min: -2,
                    max: 2
                },
                'y-variance': {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    min: 0,
                    max: 50
                }
            }
        }
    });
}

function calculateEfficiency(sensors, suspension) {
    // Different efficiency calculations for ON vs OFF mode
    if (!simulationState.admosysActive) {
        // OFF mode: Low efficiency (30-40%)
        let efficiency = 35;
    
    // Calculate average compression
    const avgCompression = (suspension.FL.compression + suspension.FR.compression + 
                           suspension.RL.compression + suspension.RR.compression) / 4;
    
    // Penalty for suboptimal compression
    const compressionPenalty = 5 * Math.abs(avgCompression - 50) / 50;
    efficiency -= compressionPenalty;
    
    // Penalty for high temperature
    if (sensors.temperature > 60) {
        const tempPenalty = 2 * (sensors.temperature - 60) / 40;
        efficiency -= tempPenalty;
    }
    
    // Penalty for over-damping
    const totalDamping = Math.abs(suspension.FL.dampingForce) + Math.abs(suspension.FR.dampingForce) +
                        Math.abs(suspension.RL.dampingForce) + Math.abs(suspension.RR.dampingForce);
    if (totalDamping > 8000) {
        efficiency -= 3;
    }
    
        return Math.max(30, Math.min(40, efficiency));
    } else {
        // ON mode: High efficiency (85-95%)
        let efficiency = 100;
        
        // Calculate average compression
        const avgCompression = (suspension.FL.compression + suspension.FR.compression + 
                               suspension.RL.compression + suspension.RR.compression) / 4;
        
        // Penalty for suboptimal compression
        const compressionPenalty = 5 * Math.abs(avgCompression - 50) / 50;
        efficiency -= compressionPenalty;
        
        // Penalty for high temperature
        if (sensors.temperature > 60) {
            const tempPenalty = 2 * (sensors.temperature - 60) / 40;
            efficiency -= tempPenalty;
        }
        
        // Penalty for over-damping
        const totalDamping = Math.abs(suspension.FL.dampingForce) + Math.abs(suspension.FR.dampingForce) +
                            Math.abs(suspension.RL.dampingForce) + Math.abs(suspension.RR.dampingForce);
        if (totalDamping > 8000) {
            efficiency -= 3;
        }
        
        return Math.max(85, Math.min(95, efficiency));
    }
}

function calculateDampingQuality(sensors, suspension) {
    const mass = getVehicleMass(sensors.load);
    const quarterMass = mass / 4;
    const { K, C } = getSpringDampingParams(sensors.temperature);
    
    // Natural frequency
    const omega_n = Math.sqrt(K / quarterMass);
    
    // Damping ratio
    const dampingRatio = C / (2 * Math.sqrt(K * quarterMass));
    
    // Optimal damping ratio is around 0.7 (critical damping)
    const optimalRatio = 0.7;
    const quality = 100 * (1 - Math.abs(dampingRatio - optimalRatio) / optimalRatio);
    
    return Math.max(0, Math.min(100, quality));
}

function updateChartData(currentTime) {
    const timeInSeconds = parseFloat(currentTime.toFixed(2));
    
    // Calculate metrics
    const avgCompression = (simulationState.suspension.FL.compression + 
                           simulationState.suspension.FR.compression +
                           simulationState.suspension.RL.compression + 
                           simulationState.suspension.RR.compression) / 4;
    
    const totalDampingForce = Math.abs(simulationState.suspension.FL.dampingForce) + 
                             Math.abs(simulationState.suspension.FR.dampingForce) +
                             Math.abs(simulationState.suspension.RL.dampingForce) + 
                             Math.abs(simulationState.suspension.RR.dampingForce);
    
    const efficiency = calculateEfficiency(simulationState.sensors, simulationState.suspension);
    const dampingQuality = calculateDampingQuality(simulationState.sensors, simulationState.suspension);
    
    // Add data points
    chartData.timePoints.push(timeInSeconds);
    chartData.torque.push(simulationState.sensors.torque);
    chartData.temperature.push(simulationState.sensors.temperature);
    chartData.efficiency.push(efficiency);
    chartData.dampingForce.push(totalDampingForce);
    chartData.springCompression.push(avgCompression);
    chartData.dampingQuality.push(dampingQuality);
    
    // Chassis stability data - depends on mode
    if (simulationState.admosysActive) {
        chartData.chassisPitch.push(0);
        chartData.chassisRoll.push(0);
    } else {
        chartData.chassisPitch.push(simulationState.pitch);
        chartData.chassisRoll.push(simulationState.roll);
    }
    
    // Calculate wheel position variance
    if (suspensionComponents.FL && suspensionComponents.FL.wheel) {
        const wheelHeights = [
            suspensionComponents.FL.wheel.position.y,
            suspensionComponents.FR.wheel.position.y,
            suspensionComponents.RL.wheel.position.y,
            suspensionComponents.RR.wheel.position.y
        ];
        const avgHeight = wheelHeights.reduce((a, b) => a + b, 0) / 4;
        const variance = Math.sqrt(wheelHeights.reduce((sum, h) => sum + Math.pow(h - avgHeight, 2), 0) / 4) * 1000;
        chartData.wheelVariance.push(variance);
    } else {
        chartData.wheelVariance.push(0);
    }
    
    // Remove old data points (keep only last 60 seconds)
    while (chartData.timePoints.length > 0 && 
           timeInSeconds - chartData.timePoints[0] > MAX_TIME_WINDOW) {
        chartData.timePoints.shift();
        chartData.torque.shift();
        chartData.temperature.shift();
        chartData.efficiency.shift();
        chartData.dampingForce.shift();
        chartData.springCompression.shift();
        chartData.dampingQuality.shift();
        chartData.chassisPitch.shift();
        chartData.chassisRoll.shift();
        chartData.wheelVariance.shift();
    }
    
    // Update chart
    if (chartInstance) {
        // Update x-axis range to follow the data
        const minTime = Math.max(0, timeInSeconds - MAX_TIME_WINDOW);
        const maxTime = Math.max(MAX_TIME_WINDOW, timeInSeconds);
        chartInstance.options.scales.x.min = minTime;
        chartInstance.options.scales.x.max = maxTime;
        
        chartInstance.update('none'); // Update without animation for smooth real-time feel
    }
}

function resetChartData() {
    chartData = {
        timePoints: [],
        torque: [],
        temperature: [],
        efficiency: [],
        dampingForce: [],
        springCompression: [],
        dampingQuality: [],
        chassisPitch: [],
        chassisRoll: [],
        wheelVariance: []
    };
    
    if (chartInstance) {
        chartInstance.options.scales.x.min = 0;
        chartInstance.options.scales.x.max = MAX_TIME_WINDOW;
        chartInstance.update();
    }
}

// Current selected vehicle
let selectedVehicle = INDIAN_EVS[4]; // Default: Tata Nexon EV (id: 5)

// Update vehicle display
function updateVehicleDisplay(vehicle) {
    selectedVehicle = vehicle;
    
    // Update left sidebar vehicle info
    document.getElementById('vhBrand').textContent = vehicle.brand.toUpperCase();
    document.getElementById('vhModel').textContent = vehicle.model;
    document.getElementById('vhPrice').textContent = `₹${vehicle.price_lakh}L`;
    document.getElementById('vhBattery').textContent = `${vehicle.battery_kwh} kWh`;
    document.getElementById('vhRange').textContent = `${vehicle.range_km} km`;
    document.getElementById('vhPower').textContent = `${vehicle.power_bhp} bhp`;
    document.getElementById('vhTorque').textContent = `${vehicle.torque_nm} Nm`;
    document.getElementById('vhWeight').textContent = `${vehicle.weight_kg} kg`;
    document.getElementById('vhType').textContent = vehicle.type;
    document.getElementById('vhSuspension').textContent = `${vehicle.suspension_type} + ${vehicle.suspension_rear || 'Standard'}`;
    
    // Update comparison cards
    updateComparisonCards(vehicle);
    
    // Update simulation parameters based on vehicle
    PHYSICS.mass_medium = vehicle.weight_kg;
}

function updateComparisonCards(vehicle) {
    // WITHOUT ADMOSYS
    document.getElementById('withoutResponse').textContent = `${vehicle.improvements.response_time_ms_before}ms`;
    document.getElementById('withoutStability').textContent = `${vehicle.current_stability}%`;
    document.getElementById('withoutEfficiency').textContent = `${vehicle.efficiency_km_kwh} km/kWh`;
    document.getElementById('withoutComfort').textContent = 'Standard';
    
    // WITH ADMOSYS
    const withStability = vehicle.current_stability + vehicle.improvements.stability_percent;
    const responseImprovement = vehicle.improvements.response_time_ms_before - vehicle.improvements.response_time_ms_after;
    const responsePercent = Math.round((responseImprovement / vehicle.improvements.response_time_ms_before) * 100);
    
    document.getElementById('withResponse').textContent = `${vehicle.improvements.response_time_ms_after}ms (↓${responsePercent}%)`;
    document.getElementById('withStability').textContent = `${withStability}% (+${vehicle.improvements.stability_percent}%)`;
    document.getElementById('withEfficiency').textContent = `+${vehicle.improvements.efficiency_percent}%`;
    document.getElementById('withBattery').textContent = `+${vehicle.improvements.battery_life_percent}%`;
    document.getElementById('withComfort').textContent = `+${vehicle.improvements.comfort_percent}%`;
    
    // Update right sidebar metrics
    updateRightSidebarMetrics(vehicle);
}

function updateRightSidebarMetrics(vehicle) {
    if (simulationState.admosysActive) {
        document.getElementById('responseMetric').textContent = `${vehicle.improvements.response_time_ms_after} ms`;
        document.getElementById('stabilityMetric').textContent = `${vehicle.current_stability + vehicle.improvements.stability_percent}%`;
        document.getElementById('comfortMetric').textContent = `+${vehicle.improvements.comfort_percent}%`;
    } else {
        document.getElementById('responseMetric').textContent = `${vehicle.improvements.response_time_ms_before} ms`;
        document.getElementById('stabilityMetric').textContent = `${vehicle.current_stability}%`;
        document.getElementById('comfortMetric').textContent = 'Standard';
    }
}

// Initialize Application
function initApp() {
    updateVehicleDisplay(selectedVehicle);
    setupV7EventListeners();
    initBabylonScene();
    initChart();
    requestAnimationFrame(animate);
}

function setupV7EventListeners() {
    // EV Model Selector
    const evSelector = document.getElementById('evModelSelector');
    if (evSelector) {
        evSelector.addEventListener('change', (e) => {
            const vehicleId = parseInt(e.target.value);
            const vehicle = INDIAN_EVS.find(v => v.id === vehicleId);
            if (vehicle) {
                updateVehicleDisplay(vehicle);
            }
        });
    }
    
    // Slider value display updates
    const torqueSlider = document.getElementById('torqueSlider');
    const vibrationSlider = document.getElementById('vibrationSlider');
    const temperatureSlider = document.getElementById('temperatureSlider');
    const wheelSpeedSlider = document.getElementById('wheelSpeedSlider');
    const terrainSelect = document.getElementById('terrainSelect');
    const loadSelect = document.getElementById('loadSelect');
    
    if (torqueSlider) {
        torqueSlider.addEventListener('input', (e) => {
            document.getElementById('torqueValue').textContent = e.target.value;
            simulationState.sensors.torque = parseFloat(e.target.value);
        });
    }
    
    if (vibrationSlider) {
        vibrationSlider.addEventListener('input', (e) => {
            document.getElementById('vibrationValue').textContent = parseFloat(e.target.value).toFixed(1);
            simulationState.sensors.vibration = parseFloat(e.target.value);
        });
    }
    
    if (temperatureSlider) {
        temperatureSlider.addEventListener('input', (e) => {
            document.getElementById('temperatureValue').textContent = e.target.value;
            simulationState.sensors.temperature = parseFloat(e.target.value);
        });
    }
    
    if (wheelSpeedSlider) {
        wheelSpeedSlider.addEventListener('input', (e) => {
            document.getElementById('wheelSpeedValue').textContent = e.target.value;
            simulationState.sensors.wheelSpeed = parseFloat(e.target.value);
        });
    }
    
    if (terrainSelect) {
        terrainSelect.addEventListener('change', (e) => {
            simulationState.sensors.terrain = e.target.value;
            if (scene) updateGroundTerrain(e.target.value);
        });
    }
    
    if (loadSelect) {
        loadSelect.addEventListener('change', (e) => {
            simulationState.sensors.load = e.target.value;
        });
    }
    
    // Control buttons
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            simulationState.isRunning = true;
            simulationState.isPaused = false;
            startBtn.textContent = 'RUNNING';
            pauseBtn.textContent = 'PAUSE';
        });
    }
    
    if (pauseBtn) {
        pauseBtn.addEventListener('click', () => {
            if (!simulationState.isRunning) return;
            simulationState.isPaused = !simulationState.isPaused;
            pauseBtn.textContent = simulationState.isPaused ? 'RESUME' : 'PAUSE';
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            simulationState.time = 0;
            simulationState.isRunning = false;
            simulationState.isPaused = false;
            resetChartData();
            startBtn.textContent = 'START';
            pauseBtn.textContent = 'PAUSE';
        });
    }
    
    // Camera buttons
    if (document.getElementById('viewFront')) {
        document.getElementById('viewFront').addEventListener('click', () => setCameraView('front'));
    }
    if (document.getElementById('viewSide')) {
        document.getElementById('viewSide').addEventListener('click', () => setCameraView('side'));
    }
    if (document.getElementById('viewTop')) {
        document.getElementById('viewTop').addEventListener('click', () => setCameraView('top'));
    }
    if (document.getElementById('viewIso')) {
        document.getElementById('viewIso').addEventListener('click', () => setCameraView('iso'));
    }
    
    // ADMOSYS Toggle
    setupADMOSYSToggle();
}

function setupADMOSYSToggle() {
    const admosysToggle = document.getElementById('admosysToggle');
    if (!admosysToggle) return;
    
    admosysToggle.addEventListener('click', function() {
        simulationState.admosysActive = !simulationState.admosysActive;
        
        const button = this;
        const statusEl = document.getElementById('admosysStatus');
        const modeIndicator = document.getElementById('modeIndicator');
        const modeLed = modeIndicator.querySelector('.mode-led');
        const modeText = modeIndicator.querySelector('.mode-text');
        const currentModeStatus = document.getElementById('currentModeStatus');
        const energyEffMetric = document.getElementById('energyEffMetric');
        
        if (simulationState.admosysActive) {
            // ON MODE
            button.classList.remove('admosys-off');
            button.classList.add('admosys-on');
            statusEl.textContent = 'ON';
            modeIndicator.classList.remove('mode-off');
            modeIndicator.classList.add('mode-on');
            modeLed.classList.remove('mode-led-off');
            modeLed.classList.add('mode-led-on');
            modeText.textContent = 'Active Suspension Control';
            
            document.getElementById('visualizationTitle').textContent = '3D Suspension Simulation - Active Control';
            document.getElementById('visualizationSubtitle').innerHTML = '✓ Chassis remains perfectly level - Active adaptive control';
            document.getElementById('visualizationSubtitle').style.color = 'var(--color-success)';
            
            if (currentModeStatus) currentModeStatus.textContent = 'ON';
            if (currentModeStatus) currentModeStatus.style.color = 'var(--color-success)';
            if (energyEffMetric) energyEffMetric.textContent = 'High (85-95%)';
        } else {
            // OFF MODE
            button.classList.remove('admosys-on');
            button.classList.add('admosys-off');
            statusEl.textContent = 'OFF';
            modeIndicator.classList.remove('mode-on');
            modeIndicator.classList.add('mode-off');
            modeLed.classList.remove('mode-led-on');
            modeLed.classList.add('mode-led-off');
            modeText.textContent = 'Uncontrolled Suspension';
            
            document.getElementById('visualizationTitle').textContent = '3D Suspension Simulation - Passive Mode';
            document.getElementById('visualizationSubtitle').innerHTML = '⚠️ Chassis moves with suspension - No active control';
            document.getElementById('visualizationSubtitle').style.color = 'var(--color-warning)';
            
            if (currentModeStatus) currentModeStatus.textContent = 'OFF';
            if (currentModeStatus) currentModeStatus.style.color = 'var(--color-error)';
            if (energyEffMetric) energyEffMetric.textContent = 'Low (30-40%)';
        }
        
        updateRightSidebarMetrics(selectedVehicle);
    });
}

// Render vehicle grid
function renderVehicleGrid() {
    const grid = document.getElementById('vehicleGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const filteredVehicles = getFilteredVehicles();
    
    filteredVehicles.forEach(vehicle => {
        const card = createVehicleCard(vehicle);
        grid.appendChild(card);
    });
}

// Get filtered vehicles
function getFilteredVehicles() {
    return VEHICLES.filter(vehicle => {
        // Price filter
        if (appState.filters.price !== 'all') {
            if (appState.filters.price === 'budget' && (vehicle.price_lakh < 10 || vehicle.price_lakh > 20)) return false;
            if (appState.filters.price === 'midrange' && (vehicle.price_lakh < 20 || vehicle.price_lakh > 50)) return false;
            if (appState.filters.price === 'premium' && vehicle.price_lakh < 50) return false;
        }
        
        // Type filter
        if (appState.filters.type !== 'all' && vehicle.type !== appState.filters.type) {
            return false;
        }
        
        return true;
    });
}

// Create vehicle card
function createVehicleCard(vehicle) {
    const card = document.createElement('div');
    card.className = 'vehicle-card';
    card.dataset.vehicleId = vehicle.id;
    
    const withStability = vehicle.current_stability + vehicle.improvements.stability_percent;
    const withEfficiency = vehicle.current_efficiency + (vehicle.current_efficiency * vehicle.improvements.efficiency_percent / 100);
    
    card.innerHTML = `
        <div class="vehicle-header">
            <div class="vehicle-title">
                <div class="vehicle-brand">${vehicle.brand}</div>
                <div class="vehicle-model">${vehicle.model}</div>
            </div>
            <div class="vehicle-price">₹${vehicle.price_lakh}L</div>
        </div>
        
        <div class="vehicle-specs">
            <div class="spec-item">
                <span class="spec-label">Battery</span>
                <span class="spec-value">${vehicle.battery_kwh} kWh</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Range</span>
                <span class="spec-value">${vehicle.range_km} km</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Power</span>
                <span class="spec-value">${vehicle.power_bhp} bhp</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Type</span>
                <span class="spec-value">${vehicle.type}</span>
            </div>
        </div>
        
        <div class="current-performance">
            <div class="performance-title">Current Performance (WITHOUT ADMOSYS)</div>
            <div class="performance-row">
                <span>Stability:</span>
                <span>${vehicle.current_stability}%</span>
            </div>
            <div class="performance-row">
                <span>System Efficiency:</span>
                <span>${vehicle.current_efficiency}%</span>
            </div>
            <div class="performance-row">
                <span>Suspension Response:</span>
                <span>${vehicle.improvements.response_time_ms_before}ms</span>
            </div>
        </div>
        
        <div class="admosys-improvements">
            <div class="improvements-title">
                <span>✨</span>
                <span>WITH ADMOSYS IMPROVEMENTS</span>
            </div>
            <div class="improvement-item">
                <span>Stability:</span>
                <span class="improvement-value">${withStability.toFixed(0)}% (+${vehicle.improvements.stability_percent}%)</span>
            </div>
            <div class="improvement-item">
                <span>Efficiency Gain:</span>
                <span class="improvement-value">+${vehicle.improvements.efficiency_percent}%</span>
            </div>
            <div class="improvement-item">
                <span>Battery Life:</span>
                <span class="improvement-value">+${vehicle.improvements.battery_life_percent}%</span>
            </div>
            <div class="improvement-item">
                <span>Comfort:</span>
                <span class="improvement-value">+${vehicle.improvements.comfort_percent}%</span>
            </div>
            <div class="improvement-item">
                <span>Response Time:</span>
                <span class="improvement-value">${vehicle.improvements.response_time_ms_after}ms (↓${vehicle.improvements.response_time_ms_before - vehicle.improvements.response_time_ms_after}ms)</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => showDetailedView(vehicle));
    
    return card;
}

// Show detailed view
function showDetailedView(vehicle) {
    appState.selectedVehicle = vehicle;
    appState.currentView = 'detailed';
    
    document.getElementById('overviewSection').classList.add('hidden');
    document.getElementById('rankingSection').classList.add('hidden');
    document.getElementById('detailedSection').classList.remove('hidden');
    
    // Update detailed view content
    document.getElementById('detailedVehicleTitle').textContent = `${vehicle.brand} ${vehicle.model}`;
    document.getElementById('detailedVehicleSpecs').textContent = `₹${vehicle.price_lakh}L | ${vehicle.battery_kwh} kWh | ${vehicle.range_km} km | ${vehicle.power_bhp} bhp | ${vehicle.type}`;
    
    // WITHOUT ADMOSYS column
    const withoutMetrics = document.getElementById('withoutMetrics');
    withoutMetrics.innerHTML = `
        <div class="metric-row">
            <div class="metric-row-label">Suspension Response</div>
            <div class="metric-row-value">${vehicle.improvements.response_time_ms_before} ms</div>
        </div>
        <div class="metric-row">
            <div class="metric-row-label">Stability Score</div>
            <div class="metric-row-value">${vehicle.current_stability}%</div>
        </div>
        <div class="metric-row">
            <div class="metric-row-label">System Efficiency</div>
            <div class="metric-row-value">${vehicle.current_efficiency}%</div>
        </div>
        <div class="metric-row">
            <div class="metric-row-label">Battery Efficiency</div>
            <div class="metric-row-value">${vehicle.efficiency_km_kwh} km/kWh</div>
        </div>
        <div class="metric-row">
            <div class="metric-row-label">Suspension Type</div>
            <div class="metric-row-value" style="font-size: var(--font-size-md);">${vehicle.suspension_type}</div>
        </div>
    `;
    
    // IMPROVEMENTS column
    const improvementMetrics = document.getElementById('improvementMetrics');
    const responseImprovement = vehicle.improvements.response_time_ms_before - vehicle.improvements.response_time_ms_after;
    const responsePercent = ((responseImprovement / vehicle.improvements.response_time_ms_before) * 100).toFixed(0);
    
    improvementMetrics.innerHTML = `
        <div class="metric-row">
            <div class="metric-row-label">Response Improvement</div>
            <div class="metric-row-value" style="color: var(--color-success);">↓ ${responseImprovement}ms (${responsePercent}% faster)</div>
        </div>
        <div class="metric-row">
            <div class="metric-row-label">Stability Gain</div>
            <div class="metric-row-value" style="color: var(--color-success);">+${vehicle.improvements.stability_percent}%</div>
        </div>
        <div class="metric-row">
            <div class="metric-row-label">Efficiency Boost</div>
            <div class="metric-row-value" style="color: var(--color-success);">+${vehicle.improvements.efficiency_percent}%</div>
        </div>
        <div class="metric-row">
            <div class="metric-row-label">Battery Life Extension</div>
            <div class="metric-row-value" style="color: var(--color-success);">+${vehicle.improvements.battery_life_percent}%</div>
        </div>
        <div class="metric-row">
            <div class="metric-row-label">Comfort Increase</div>
            <div class="metric-row-value" style="color: var(--color-success);">+${vehicle.improvements.comfort_percent}%</div>
        </div>
    `;
    
    // WITH ADMOSYS column
    const withMetrics = document.getElementById('withMetrics');
    const withStability = vehicle.current_stability + vehicle.improvements.stability_percent;
    const withEfficiency = vehicle.current_efficiency + (vehicle.current_efficiency * vehicle.improvements.efficiency_percent / 100);
    const withBatteryEff = vehicle.efficiency_km_kwh * (1 + vehicle.improvements.efficiency_percent / 100);
    
    withMetrics.innerHTML = `
        <div class="metric-row">
            <div class="metric-row-label">Suspension Response</div>
            <div class="metric-row-value">${vehicle.improvements.response_time_ms_after} ms</div>
        </div>
        <div class="metric-row">
            <div class="metric-row-label">Stability Score</div>
            <div class="metric-row-value">${withStability.toFixed(0)}%</div>
        </div>
        <div class="metric-row">
            <div class="metric-row-label">System Efficiency</div>
            <div class="metric-row-value">${withEfficiency.toFixed(0)}%</div>
        </div>
        <div class="metric-row">
            <div class="metric-row-label">Battery Efficiency</div>
            <div class="metric-row-value">${withBatteryEff.toFixed(1)} km/kWh</div>
        </div>
        <div class="metric-row">
            <div class="metric-row-label">Ride Quality</div>
            <div class="metric-row-value" style="font-size: var(--font-size-md);">Excellent</div>
        </div>
    `;
}

// Show ranking view
function showRankingView() {
    appState.currentView = 'ranking';
    
    document.getElementById('overviewSection').classList.add('hidden');
    document.getElementById('detailedSection').classList.add('hidden');
    document.getElementById('rankingSection').classList.remove('hidden');
    
    renderRankings();
}

// Render rankings
function renderRankings() {
    const metric = appState.rankingMetric;
    const rankingList = document.getElementById('rankingList');
    if (!rankingList) return;
    
    let sortedVehicles = [...VEHICLES];
    
    switch(metric) {
        case 'stability':
            sortedVehicles.sort((a, b) => b.improvements.stability_percent - a.improvements.stability_percent);
            break;
        case 'efficiency':
            sortedVehicles.sort((a, b) => b.improvements.efficiency_percent - a.improvements.efficiency_percent);
            break;
        case 'battery':
            sortedVehicles.sort((a, b) => b.improvements.battery_life_percent - a.improvements.battery_life_percent);
            break;
        case 'comfort':
            sortedVehicles.sort((a, b) => b.improvements.comfort_percent - a.improvements.comfort_percent);
            break;
        case 'response':
            sortedVehicles.sort((a, b) => {
                const aImprovement = a.improvements.response_time_ms_before - a.improvements.response_time_ms_after;
                const bImprovement = b.improvements.response_time_ms_before - b.improvements.response_time_ms_after;
                return bImprovement - aImprovement;
            });
            break;
        case 'overall':
            sortedVehicles.sort((a, b) => {
                const aScore = (a.improvements.stability_percent + a.improvements.efficiency_percent + 
                               a.improvements.battery_life_percent + a.improvements.comfort_percent) / (a.price_lakh / 10);
                const bScore = (b.improvements.stability_percent + b.improvements.efficiency_percent + 
                               b.improvements.battery_life_percent + b.improvements.comfort_percent) / (b.price_lakh / 10);
                return bScore - aScore;
            });
            break;
    }
    
    rankingList.innerHTML = '';
    
    sortedVehicles.forEach((vehicle, index) => {
        const item = document.createElement('div');
        item.className = 'ranking-item';
        
        let currentValue, withValue, improvement;
        
        switch(metric) {
            case 'stability':
                currentValue = `${vehicle.current_stability}%`;
                withValue = `${vehicle.current_stability + vehicle.improvements.stability_percent}%`;
                improvement = `+${vehicle.improvements.stability_percent}%`;
                break;
            case 'efficiency':
                currentValue = `${vehicle.current_efficiency}%`;
                improvement = `+${vehicle.improvements.efficiency_percent}%`;
                withValue = `${(vehicle.current_efficiency * (1 + vehicle.improvements.efficiency_percent / 100)).toFixed(0)}%`;
                break;
            case 'battery':
                currentValue = 'Baseline';
                improvement = `+${vehicle.improvements.battery_life_percent}%`;
                withValue = `+${vehicle.improvements.battery_life_percent}% Life`;
                break;
            case 'comfort':
                currentValue = 'Standard';
                improvement = `+${vehicle.improvements.comfort_percent}%`;
                withValue = `+${vehicle.improvements.comfort_percent}%`;
                break;
            case 'response':
                const responseGain = vehicle.improvements.response_time_ms_before - vehicle.improvements.response_time_ms_after;
                currentValue = `${vehicle.improvements.response_time_ms_before}ms`;
                withValue = `${vehicle.improvements.response_time_ms_after}ms`;
                improvement = `↓${responseGain}ms`;
                break;
            case 'overall':
                const score = ((vehicle.improvements.stability_percent + vehicle.improvements.efficiency_percent + 
                               vehicle.improvements.battery_life_percent + vehicle.improvements.comfort_percent) / (vehicle.price_lakh / 10)).toFixed(1);
                currentValue = `₹${vehicle.price_lakh}L`;
                improvement = `Value: ${score}`;
                withValue = 'Best ROI';
                break;
        }
        
        item.innerHTML = `
            <div class="rank-number">#${index + 1}</div>
            <div class="rank-vehicle">
                <div style="font-weight: 600;">${vehicle.brand} ${vehicle.model}</div>
                <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-top: 2px;">${vehicle.type} | ₹${vehicle.price_lakh}L</div>
            </div>
            <div class="rank-value" style="color: var(--color-text-secondary);">${currentValue}</div>
            <div class="rank-value" style="color: var(--color-success); font-weight: 600;">${improvement}</div>
            <div class="rank-value" style="color: var(--color-text);">${withValue}</div>
        `;
        
        rankingList.appendChild(item);
    });
}

// Setup event listeners
function setupEventListeners() {
    // View mode radio buttons
    document.querySelectorAll('input[name="viewMode"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'overview') {
                document.getElementById('overviewSection').classList.remove('hidden');
                document.getElementById('rankingSection').classList.add('hidden');
                document.getElementById('detailedSection').classList.add('hidden');
                appState.currentView = 'overview';
            } else if (e.target.value === 'ranking') {
                showRankingView();
            }
        });
    });
    
    // Price filter
    document.querySelectorAll('input[name="priceFilter"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            appState.filters.price = e.target.value;
            renderVehicleGrid();
        });
    });
    
    // Type filter
    document.querySelectorAll('input[name="typeFilter"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            appState.filters.type = e.target.value;
            renderVehicleGrid();
        });
    });
    
    // Back to overview button
    const backButton = document.getElementById('backToOverview');
    if (backButton) {
        backButton.addEventListener('click', () => {
            document.getElementById('overviewSection').classList.remove('hidden');
            document.getElementById('detailedSection').classList.add('hidden');
            document.getElementById('rankingSection').classList.add('hidden');
            appState.currentView = 'overview';
            document.querySelector('input[name="viewMode"][value="overview"]').checked = true;
        });
    }
    
    // Ranking options
    document.querySelectorAll('.ranking-option').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('.ranking-option').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            appState.rankingMetric = e.target.dataset.metric;
            renderRankings();
        });
    });
    
    // ADMOSYS toggle
    const admosysToggle = document.getElementById('admosysToggle');
    if (admosysToggle) {
        admosysToggle.addEventListener('click', () => {
            appState.admosysActive = !appState.admosysActive;
            
            const button = admosysToggle;
            const statusEl = document.getElementById('admosysStatus');
            const modeIndicator = document.getElementById('modeIndicator');
            const modeLed = modeIndicator.querySelector('.mode-led');
            const modeText = modeIndicator.querySelector('.mode-text');
            
            if (appState.admosysActive) {
                button.classList.remove('admosys-off');
                button.classList.add('admosys-on');
                statusEl.textContent = 'ON';
                modeIndicator.classList.remove('mode-off');
                modeIndicator.classList.add('mode-on');
                modeLed.classList.remove('mode-led-off');
                modeLed.classList.add('mode-led-on');
                modeText.textContent = 'Viewing WITH ADMOSYS';
            } else {
                button.classList.remove('admosys-on');
                button.classList.add('admosys-off');
                statusEl.textContent = 'OFF';
                modeIndicator.classList.remove('mode-on');
                modeIndicator.classList.add('mode-off');
                modeLed.classList.remove('mode-led-on');
                modeLed.classList.add('mode-led-off');
                modeText.textContent = 'Viewing WITHOUT ADMOSYS';
            }
        });
    }
}

// Update metrics display function
function updateMetricsDisplay() {
    const susp = simulationState.suspension;
    
    // Update compression metrics and bars
    document.getElementById('metricFL').textContent = `${susp.FL.compression.toFixed(0)}%`;
    document.getElementById('barFL').style.width = `${susp.FL.compression}%`;
    
    document.getElementById('metricFR').textContent = `${susp.FR.compression.toFixed(0)}%`;
    document.getElementById('barFR').style.width = `${susp.FR.compression}%`;
    
    document.getElementById('metricRL').textContent = `${susp.RL.compression.toFixed(0)}%`;
    document.getElementById('barRL').style.width = `${susp.RL.compression}%`;
    
    document.getElementById('metricRR').textContent = `${susp.RR.compression.toFixed(0)}%`;
    document.getElementById('barRR').style.width = `${susp.RR.compression}%`;
    
    // Spring and damping forces
    const totalSpringForce = susp.FL.springForce + susp.FR.springForce + susp.RL.springForce + susp.RR.springForce;
    const totalDampingForce = Math.abs(susp.FL.dampingForce) + Math.abs(susp.FR.dampingForce) + 
                              Math.abs(susp.RL.dampingForce) + Math.abs(susp.RR.dampingForce);
    
    document.getElementById('springForceMetric').textContent = `${totalSpringForce.toFixed(0)} N`;
    document.getElementById('dampingForceMetric').textContent = `${totalDampingForce.toFixed(0)} N`;
    
    // Stability metrics
    if (simulationState.admosysActive) {
        document.getElementById('pitchMetric').textContent = '0.0°';
        document.getElementById('pitchMetric').style.color = '#00FF41';
        document.getElementById('rollMetric').textContent = '0.0°';
        document.getElementById('rollMetric').style.color = '#00FF41';
    } else {
        document.getElementById('pitchMetric').textContent = `${simulationState.pitch.toFixed(1)}°`;
        document.getElementById('pitchMetric').style.color = 'var(--color-warning)';
        document.getElementById('rollMetric').textContent = `${simulationState.roll.toFixed(1)}°`;
        document.getElementById('rollMetric').style.color = 'var(--color-warning)';
    }
    
    document.getElementById('heightMetric').textContent = `${simulationState.chassisHeight.toFixed(2)} m`;
    
    // Load distribution
    const avgFront = (susp.FL.compression + susp.FR.compression) / 2;
    const avgRear = (susp.RL.compression + susp.RR.compression) / 2;
    const frontLoad = Math.round((avgFront / (avgFront + avgRear)) * 100);
    const rearLoad = 100 - frontLoad;
    document.getElementById('loadDistMetric').textContent = `${frontLoad}/${rearLoad}`;
    
    // Efficiency
    const efficiency = calculateEfficiency(simulationState.sensors, simulationState.suspension);
    document.getElementById('efficiencyMetric').textContent = `${efficiency.toFixed(0)}%`;
}

// Initialize app on load
window.addEventListener('DOMContentLoaded', () => {
    initApp();
});



// Form Validation
function validateInput(value, min, max, errorElementId) {
    const errorElement = document.getElementById(errorElementId);
    if (value < min || value > max) {
        errorElement.classList.add('show');
        return false;
    }
    errorElement.classList.remove('show');
    return true;
}

// Legacy event listeners (now handled in setupV7EventListeners)
function legacyEventListeners() {
    const sensorForm = document.getElementById('sensorForm');
    if (!sensorForm) return;
    
    sensorForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const torque = parseFloat(document.getElementById('torqueInput').value);
    const vibration = parseFloat(document.getElementById('vibrationInput').value);
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const wheelSpeed = parseFloat(document.getElementById('wheelSpeedInput').value);
    const terrain = document.getElementById('terrainInput').value;
    const load = document.getElementById('loadInput').value;

    // Validate all inputs
    let isValid = true;
    isValid &= validateInput(torque, 0, 500, 'torqueError');
    isValid &= validateInput(vibration, 0, 5, 'vibrationError');
    isValid &= validateInput(temperature, 20, 100, 'temperatureError');
    isValid &= validateInput(wheelSpeed, 0, 3000, 'wheelSpeedError');

    if (!isValid) return;

    // Update state
    simulationState.sensors = { torque, vibration, temperature, wheelSpeed, terrain, load };
    simulationState.isRunning = true;
    simulationState.isPaused = false;
    
    // Update terrain
    if (scene) {
        updateGroundTerrain(terrain);
    }
    
    // Update UI
    updateSummary();
    updateMetrics();
    document.getElementById('startBtn').textContent = 'Running';
    document.getElementById('pauseBtn').textContent = 'Pause';
    });
}

document.getElementById('pauseBtn').addEventListener('click', function() {
    if (!simulationState.isRunning) return;
    
    simulationState.isPaused = !simulationState.isPaused;
    this.textContent = simulationState.isPaused ? 'Resume' : 'Pause';
});

document.getElementById('resetBtn').addEventListener('click', function() {
    // Reset to default values
    document.getElementById('torqueInput').value = 150;
    document.getElementById('torqueSlider').value = 150;
    document.getElementById('vibrationInput').value = 1.5;
    document.getElementById('vibrationSlider').value = 1.5;
    document.getElementById('temperatureInput').value = 50;
    document.getElementById('temperatureSlider').value = 50;
    document.getElementById('wheelSpeedInput').value = 1000;
    document.getElementById('wheelSpeedSlider').value = 1000;
    document.getElementById('terrainInput').value = 'Flat';
    document.getElementById('loadInput').value = 'Medium';
    
    simulationState.sensors = {
        torque: 150,
        vibration: 1.5,
        temperature: 50,
        wheelSpeed: 1000,
        terrain: 'Flat',
        load: 'Medium'
    };
    
    simulationState.time = 0;
    simulationState.isRunning = false;
    simulationState.isPaused = false;
    lastChartUpdate = 0;
    
    // Reset terrain
    if (scene) {
        updateGroundTerrain('Flat');
    }
    
    // Reset chart
    resetChartData();
    
    updateSummary();
    updateMetrics();
    document.getElementById('startBtn').textContent = 'Start Simulation';
    document.getElementById('pauseBtn').textContent = 'Pause';
});

function updateSummaryLegacy() {
    const s = simulationState.sensors;
    document.getElementById('summaryTorque').textContent = `${s.torque.toFixed(0)} Nm`;
    document.getElementById('summaryVibration').textContent = `${s.vibration.toFixed(1)} g`;
    document.getElementById('summaryTemperature').textContent = `${s.temperature.toFixed(0)} °C`;
    document.getElementById('summaryWheelSpeed').textContent = `${s.wheelSpeed.toFixed(0)} RPM`;
    document.getElementById('summaryTerrain').textContent = s.terrain;
    document.getElementById('summaryLoad').textContent = s.load;
}



// Physics Simulation
function getVehicleMass(load) {
    switch(load) {
        case 'Light': return PHYSICS.mass_light;
        case 'Medium': return PHYSICS.mass_medium;
        case 'Heavy': return PHYSICS.mass_heavy;
        default: return PHYSICS.mass_medium;
    }
}

function getSpringDampingParams(temperature) {
    let K = PHYSICS.spring_stiffness;
    let C = PHYSICS.damping_coefficient;
    
    if (temperature >= 80) {
        K *= 0.85;
        C *= 1.4;
    } else if (temperature >= 60) {
        K *= 0.95;
        C *= 1.2;
    } else if (temperature > 40) {
        C *= (1 + 0.005 * (temperature - 40));
    }
    
    return { K, C };
}

function calculateSuspensionCompression(wheel, sensors, time) {
    const { torque, vibration, temperature, terrain, load } = sensors;
    
    const mass = getVehicleMass(load);
    const { K, C } = getSpringDampingParams(temperature);
    const quarterMass = mass / 4;
    
    if (!simulationState.admosysActive) {
        // OFF MODE: PASSIVE SUSPENSION - Body moves with suspension
        return calculatePassiveSuspension(wheel, sensors, time, mass, K, C);
    } else {
        // ON MODE: ACTIVE SUSPENSION CONTROL - Body stays level
        return calculateActiveSuspension(wheel, sensors, time, mass, K, C);
    }
}

function calculatePassiveSuspension(wheel, sensors, time, mass, K, C) {
    const { torque, vibration, temperature, terrain, load } = sensors;
    const quarterMass = mass / 4;
    
    // Base static load (weight distribution)
    let wheelLoad = quarterMass;
    
    // Torque-induced load transfer (front/rear)
    const loadTransferFactor = torque / 500;
    if (wheel.startsWith('F')) {
        wheelLoad += quarterMass * loadTransferFactor * 0.3; // Front gets more load under acceleration
    } else {
        wheelLoad -= quarterMass * loadTransferFactor * 0.15; // Rear loses some load
    }
    
    // Terrain-induced load variations
    const terrainData = TERRAIN_EFFECTS[terrain];
    let terrainLoadChange = 0;
    
    if (terrain === 'Rough') {
        const phaseOffset = (wheel === 'FL' ? 0 : wheel === 'FR' ? 0.5 : wheel === 'RL' ? 1 : 1.5);
        terrainLoadChange = Math.sin(time * 5 + phaseOffset * 2) * quarterMass * terrainData.loadVariation;
    } else if (terrain === 'Uphill') {
        terrainLoadChange = wheel.startsWith('F') ? quarterMass * terrainData.loadVariation : -quarterMass * terrainData.loadVariation * 0.5;
    } else if (terrain === 'Downhill') {
        terrainLoadChange = wheel.startsWith('F') ? -quarterMass * terrainData.loadVariation : quarterMass * terrainData.loadVariation * 0.5;
    } else if (terrain === 'Off-road') {
        const phaseOffset = (wheel === 'FL' ? 0 : wheel === 'FR' ? 0.7 : wheel === 'RL' ? 1.2 : 1.8);
        terrainLoadChange = (Math.sin(time * 4 + phaseOffset * 3) + Math.sin(time * 7 + phaseOffset * 2) * 0.5) * quarterMass * terrainData.loadVariation;
    }
    
    wheelLoad += terrainLoadChange;
    
    // Vibration creates oscillating loads
    const omega_n = Math.sqrt(K / quarterMass);
    const phaseOffset = (wheel === 'FL' ? 0 : wheel === 'FR' ? 0.5 : wheel === 'RL' ? 1 : 1.5);
    const vibrationLoad = vibration * quarterMass * 0.1 * Math.sin(omega_n * time + phaseOffset * Math.PI);
    
    wheelLoad += vibrationLoad;
    
    // Calculate compression needed to support this load while keeping chassis level
    // Spring force = K * compression
    // At equilibrium: Spring force = Wheel load * g
    const compressionMeters = (wheelLoad * PHYSICS.gravity) / K;
    const compressionPercent = (compressionMeters / PHYSICS.max_travel) * 100;
    
    // In passive mode, allow more variation and oscillation
    const oscillation = Math.sin(time * 4) * vibration * 5;
    const finalCompression = compressionPercent + oscillation;
    
    return Math.max(10, Math.min(90, finalCompression));
}

function calculateActiveSuspension(wheel, sensors, time, mass, K, C) {
    const { torque, vibration, temperature, terrain, load } = sensors;
    const quarterMass = mass / 4;
    
    // ACTIVE SUSPENSION CONTROL
    // Calculate load on this specific wheel
    let wheelLoad = quarterMass;
    
    // Torque-induced load transfer (front/rear)
    const loadTransferFactor = torque / 500;
    if (wheel.startsWith('F')) {
        wheelLoad += quarterMass * loadTransferFactor * 0.3; // Front gets more load under acceleration
    } else {
        wheelLoad -= quarterMass * loadTransferFactor * 0.15; // Rear loses some load
    }
    
    // Terrain-induced load variations
    const terrainData = TERRAIN_EFFECTS[terrain];
    let terrainLoadChange = 0;
    
    if (terrain === 'Rough') {
        const phaseOffset = (wheel === 'FL' ? 0 : wheel === 'FR' ? 0.5 : wheel === 'RL' ? 1 : 1.5);
        terrainLoadChange = Math.sin(time * 5 + phaseOffset * 2) * quarterMass * terrainData.loadVariation;
    } else if (terrain === 'Uphill') {
        terrainLoadChange = wheel.startsWith('F') ? quarterMass * terrainData.loadVariation : -quarterMass * terrainData.loadVariation * 0.5;
    } else if (terrain === 'Downhill') {
        terrainLoadChange = wheel.startsWith('F') ? -quarterMass * terrainData.loadVariation : quarterMass * terrainData.loadVariation * 0.5;
    } else if (terrain === 'Off-road') {
        const phaseOffset = (wheel === 'FL' ? 0 : wheel === 'FR' ? 0.7 : wheel === 'RL' ? 1.2 : 1.8);
        terrainLoadChange = (Math.sin(time * 4 + phaseOffset * 3) + Math.sin(time * 7 + phaseOffset * 2) * 0.5) * quarterMass * terrainData.loadVariation;
    }
    
    wheelLoad += terrainLoadChange;
    
    // Vibration creates oscillating loads
    const omega_n = Math.sqrt(K / quarterMass);
    const phaseOffset = (wheel === 'FL' ? 0 : wheel === 'FR' ? 0.5 : wheel === 'RL' ? 1 : 1.5);
    const vibrationLoad = vibration * quarterMass * 0.1 * Math.sin(omega_n * time + phaseOffset * Math.PI);
    
    wheelLoad += vibrationLoad;
    
    // Calculate compression needed to support this load while keeping chassis level
    // Spring force = K * compression
    // At equilibrium: Spring force = Wheel load * g
    const compressionMeters = (wheelLoad * PHYSICS.gravity) / K;
    const compressionPercent = (compressionMeters / PHYSICS.max_travel) * 100;
    
    // Ensure within physical limits
    return Math.max(5, Math.min(95, compressionPercent));
}

function calculateSpringDampingForces(wheel, compression, velocity, temperature) {
    const { K, C } = getSpringDampingParams(temperature);
    const compressionMeters = (compression / 100) * PHYSICS.max_travel;
    
    const springForce = K * compressionMeters;
    const dampingForce = C * velocity;
    
    return { springForce, dampingForce };
}



function getTemperatureStatus(temp) {
    if (temp < 40) return { text: 'Cool', class: 'status-ok' };
    if (temp < 60) return { text: 'Normal', class: 'status-ok' };
    if (temp < 80) return { text: 'Warm', class: 'status-warning' };
    return { text: 'Hot', class: 'status-critical' };
}

function getSystemStatus(sensors) {
    const { temperature, vibration } = sensors;
    
    if (temperature > 80 || vibration > 4) {
        return { text: 'Critical - Check System', class: 'status-critical' };
    }
    if (temperature > 60 || vibration > 3) {
        return { text: 'Warning - Monitor', class: 'status-warning' };
    }
    return { text: 'Operating Normally', class: 'status-ok' };
}

// Update 3D Vehicle Physics and Visuals
function update3DVehicle() {
    if (!scene || !suspensionComponents.FL) return;
    
    const s = simulationState.sensors;
    const susp = simulationState.suspension;
    
    // Scale vehicle to match selected EV dimensions
    if (vehicleMeshes.chassis && selectedVehicle) {
        const scaleFactor = selectedVehicle.weight_kg / 1500; // Base scale
        PHYSICS.chassis_length = 4.0 + (selectedVehicle.weight_kg - 1000) * 0.002;
        PHYSICS.chassis_width = 1.6 + (selectedVehicle.weight_kg - 1000) * 0.0008;
    }
    
    // Calculate pitch and roll
    const avgFrontCompression = (susp.FL.compression + susp.FR.compression) / 2;
    const avgRearCompression = (susp.RL.compression + susp.RR.compression) / 2;
    const avgLeftCompression = (susp.FL.compression + susp.RL.compression) / 2;
    const avgRightCompression = (susp.FR.compression + susp.RR.compression) / 2;
    
    let pitchAngle, rollAngle;
    
    if (simulationState.admosysActive) {
        // ON MODE: STABLE CHASSIS - Keep pitch and roll at 0° always
        pitchAngle = 0;
        rollAngle = 0;
        simulationState.pitch = 0;
        simulationState.roll = 0;
    } else {
        // OFF MODE: PASSIVE - Chassis moves with suspension
        pitchAngle = (avgFrontCompression - avgRearCompression) * 0.08 * Math.PI / 180;
        rollAngle = (avgLeftCompression - avgRightCompression) * 0.05 * Math.PI / 180;
        simulationState.pitch = pitchAngle * 180 / Math.PI;
        simulationState.roll = rollAngle * 180 / Math.PI;
    }
    
    // Update chassis based on mode
    if (vehicleMeshes.chassis) {
        if (simulationState.admosysActive) {
            // ON MODE: KEEP PERFECTLY LEVEL AND STABLE
            vehicleMeshes.chassis.rotation.x = 0;
            vehicleMeshes.chassis.rotation.z = 0;
            vehicleMeshes.chassis.position.y = 0.8;
            
            // Green stability glow
            const chassisMat = vehicleMeshes.chassis.material;
            chassisMat.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);
            chassisMat.emissiveColor = new BABYLON.Color3(0, 0.1, 0.05);
        } else {
            // OFF MODE: CHASSIS MOVES WITH SUSPENSION
            vehicleMeshes.chassis.rotation.x = pitchAngle;
            vehicleMeshes.chassis.rotation.z = rollAngle;
            
            // Chassis height changes with average compression
            const avgCompression = (avgFrontCompression + avgRearCompression) / 2;
            const heightChange = (avgCompression - 50) * 0.003;
            vehicleMeshes.chassis.position.y = 0.8 - heightChange;
            simulationState.chassisHeight = vehicleMeshes.chassis.position.y;
            
            // Orange/red warning glow for uncontrolled state
            const chassisMat = vehicleMeshes.chassis.material;
            chassisMat.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);
            chassisMat.emissiveColor = new BABYLON.Color3(0.1, 0.05, 0);
        }
    }
    
    // Update each wheel assembly
    Object.keys(suspensionComponents).forEach(key => {
        const compression = susp[key].compression;
        updateSuspensionPosition(key, compression, s.temperature);
        
        // Rotate wheel
        const wheel = suspensionComponents[key].wheel;
        if (wheel && s.wheelSpeed > 0) {
            const rotationSpeed = (s.wheelSpeed / 60) * 2 * Math.PI * (1 / 60);
            wheel.rotation.x += rotationSpeed;
        }
    });
    
    // Update terrain
    updateGroundTerrain(s.terrain);
    
    // Update status overlay
    document.getElementById('overlayTime').textContent = `${simulationState.time.toFixed(1)}s`;
    document.getElementById('overlayFL').textContent = `${susp.FL.compression.toFixed(1)}%`;
    document.getElementById('overlayFR').textContent = `${susp.FR.compression.toFixed(1)}%`;
    document.getElementById('overlayRL').textContent = `${susp.RL.compression.toFixed(1)}%`;
    document.getElementById('overlayRR').textContent = `${susp.RR.compression.toFixed(1)}%`;
    if (simulationState.admosysActive) {
        document.getElementById('overlayPitch').textContent = `✓ 0.0° LEVEL`;
    } else {
        document.getElementById('overlayPitch').textContent = `${simulationState.pitch.toFixed(1)}°`;
    }
    
    // Calculate wheel position variance (should be ~0 for perfect balance)
    const wheelHeights = [
        suspensionComponents.FL.wheel.position.y,
        suspensionComponents.FR.wheel.position.y,
        suspensionComponents.RL.wheel.position.y,
        suspensionComponents.RR.wheel.position.y
    ];
    const avgHeight = wheelHeights.reduce((a, b) => a + b, 0) / 4;
    const variance = Math.sqrt(wheelHeights.reduce((sum, h) => sum + Math.pow(h - avgHeight, 2), 0) / 4) * 1000; // in mm
    
    // Update metrics display using new function
    updateMetricsDisplay();
    
    // Show vehicle name in 3D view
    if (vehicleMeshes.levelIndicator && selectedVehicle) {
        const levelTexture = vehicleMeshes.levelIndicator.material.diffuseTexture;
        if (levelTexture && levelTexture.getContext) {
            const ctx = levelTexture.getContext();
            ctx.clearRect(0, 0, 512, 256);
            
            if (simulationState.admosysActive) {
                ctx.fillStyle = '#00FF41';
                ctx.font = 'bold 60px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(`${selectedVehicle.brand} ${selectedVehicle.model}`, 256, 100);
                ctx.font = 'bold 80px Arial';
                ctx.fillText('LEVEL', 256, 180);
            } else {
                ctx.fillStyle = '#FFD700';
                ctx.font = 'bold 60px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(`${selectedVehicle.brand} ${selectedVehicle.model}`, 256, 100);
                ctx.font = 'bold 60px Arial';
                ctx.fillText(`PITCH: ${simulationState.pitch.toFixed(1)}°`, 256, 180);
            }
            
            levelTexture.update();
        }
    }
}

// Legacy 2D rendering (removed)
function oldRenderCanvas() {
    const s = simulationState.sensors;
    const susp = simulationState.suspension;
    
    // Clear canvas
    ctx.clearRect(0, 0, 900, 600);
    
    // Draw background grid
    drawGrid();
    
    // Draw ground with terrain
    drawGround(s.terrain);
    
    // Calculate pitch from suspension compression
    const avgFrontCompression = (susp.FL.compression + susp.FR.compression) / 2;
    const avgRearCompression = (susp.RL.compression + susp.RR.compression) / 2;
    const pitchAngle = (avgFrontCompression - avgRearCompression) * 0.05;
    simulationState.pitch = pitchAngle;
    
    // Vehicle dimensions
    const bodyWidth = 600;
    const bodyHeight = 80;
    const wheelbase = 400;
    const trackWidth = 250;
    const centerX = 450;
    const centerY = 300;
    
    // Wheel positions (relative to vehicle center)
    const wheelPositions = {
        FL: { x: centerX - trackWidth / 2, baseY: centerY + wheelbase / 2 },
        FR: { x: centerX + trackWidth / 2, baseY: centerY + wheelbase / 2 },
        RL: { x: centerX - trackWidth / 2, baseY: centerY - wheelbase / 2 },
        RR: { x: centerX + trackWidth / 2, baseY: centerY - wheelbase / 2 }
    };
    
    // Draw suspension components for each wheel
    Object.keys(wheelPositions).forEach(key => {
        const pos = wheelPositions[key];
        const compression = susp[key].compression;
        const compressionPixels = (compression / 100) * 80;
        const wheelY = pos.baseY + compressionPixels;
        
        // Draw control arm
        drawControlArm(centerX, centerY, pos.x, wheelY - PHYSICS.wheel_radius);
        
        // Draw spring
        const springHeight = drawSpring(pos.x, wheelY - PHYSICS.wheel_radius, compression, s.temperature);
        
        // Draw damper
        const force = susp[key].force || 0;
        drawDamper(pos.x + 25, wheelY - PHYSICS.wheel_radius, springHeight * 0.8, force);
        
        // Draw wheel
        drawWheel(pos.x, wheelY, susp[key].rotation, s.wheelSpeed, compression);
        
        // Draw compression label
        drawText(`${compression.toFixed(0)}%`, pos.x, wheelY + PHYSICS.wheel_radius + 15, 11, '#FFFFFF');
    });
    
    // Draw vehicle body
    const bodyY = centerY - (avgFrontCompression + avgRearCompression) / 2 * 0.8;
    drawVehicleBody(centerX, bodyY, bodyWidth, bodyHeight, pitchAngle, s.temperature);
    
    // Draw info text on canvas
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '14px Arial';
    ctx.textAlign = 'right';
    ctx.fillText(`Load: ${s.load} (${getVehicleMass(s.load)}kg)`, 880, 30);
    ctx.fillText(`Terrain: ${s.terrain}`, 880, 50);
    ctx.fillText(`Temp: ${s.temperature}°C`, 880, 70);
    
    // Update status overlay
    document.getElementById('overlayTime').textContent = `${simulationState.time.toFixed(1)}s`;
    document.getElementById('overlayFL').textContent = `${susp.FL.compression.toFixed(1)}%`;
    document.getElementById('overlayFR').textContent = `${susp.FR.compression.toFixed(1)}%`;
    document.getElementById('overlayRL').textContent = `${susp.RL.compression.toFixed(1)}%`;
    document.getElementById('overlayRR').textContent = `${susp.RR.compression.toFixed(1)}%`;
    document.getElementById('overlayPitch').textContent = `${pitchAngle.toFixed(1)}°`;
}

// Legacy update metrics (keep for compatibility)
function updateMetrics() {
    updateMetricsDisplay();
    const oldFunction = () => {
    const s = simulationState.sensors;
    const susp = simulationState.suspension;
    
    document.getElementById('metricTorque').innerHTML = `${s.torque}<span class="metric-unit">Nm</span>`;
    document.getElementById('metricVibration').innerHTML = `${s.vibration}<span class="metric-unit">g</span>`;
    document.getElementById('metricTemperature').innerHTML = `${s.temperature}<span class="metric-unit">°C</span>`;
    document.getElementById('metricWheelSpeed').innerHTML = `${s.wheelSpeed}<span class="metric-unit">RPM</span>`;
    
    // Update compression metrics
    document.getElementById('metricCompressionFL').innerHTML = `${susp.FL.compression.toFixed(0)}<span class="metric-unit">%</span>`;
    document.getElementById('metricCompressionFR').innerHTML = `${susp.FR.compression.toFixed(0)}<span class="metric-unit">%</span>`;
    document.getElementById('metricCompressionBL').innerHTML = `${susp.RL.compression.toFixed(0)}<span class="metric-unit">%</span>`;
    document.getElementById('metricCompressionBR').innerHTML = `${susp.RR.compression.toFixed(0)}<span class="metric-unit">%</span>`;
    
    // Update efficiency using the chart calculation function
    simulationState.efficiency = calculateEfficiency(s, susp);
    const efficiencyEl = document.getElementById('metricEfficiency');
    if (efficiencyEl) {
        efficiencyEl.innerHTML = `${simulationState.efficiency.toFixed(0)}<span class="metric-unit">%</span>`;
    }
    
    // Update temperature status
    const tempStatus = getTemperatureStatus(s.temperature);
    const tempStatusEl = document.getElementById('tempStatus');
    tempStatusEl.textContent = tempStatus.text;
    tempStatusEl.className = 'status-indicator ' + tempStatus.class;
    
    // Update system status
    const systemStatus = getSystemStatus(s);
    const systemStatusEl = document.getElementById('systemStatus');
    if (systemStatusEl) {
        systemStatusEl.textContent = systemStatus.text;
        systemStatusEl.className = 'status-indicator ' + systemStatus.class;
    }
    };
    oldFunction();
}





// Animation Loop
let lastTime = 0;

function animate(currentTime) {
    const deltaTime = currentTime - lastTime;
    if (deltaTime < 16) {
        requestAnimationFrame(animate);
        return;
    }
    lastTime = currentTime;
    
    if (simulationState.isRunning && !simulationState.isPaused) {
        simulationState.time += deltaTime / 1000;
        
        const s = simulationState.sensors;
        
        // Update suspension compression for each wheel
        Object.keys(simulationState.suspension).forEach(wheel => {
            const compression = calculateSuspensionCompression(wheel, s, simulationState.time);
            
            // Calculate spring and damping forces
            const compressionMeters = (compression / 100) * PHYSICS.max_travel;
            const prevCompression = (simulationState.suspension[wheel].compression / 100) * PHYSICS.max_travel;
            const velocity = (compressionMeters - prevCompression) / (deltaTime / 1000);
            
            const forces = calculateSpringDampingForces(wheel, compression, velocity, s.temperature);
            
            simulationState.suspension[wheel].compression = compression;
            simulationState.suspension[wheel].velocity = velocity;
            simulationState.suspension[wheel].force = forces.springForce + forces.dampingForce;
            simulationState.suspension[wheel].springForce = forces.springForce;
            simulationState.suspension[wheel].dampingForce = forces.dampingForce;
            
            // Update wheel rotation based on speed
            const rotationSpeed = (s.wheelSpeed / 60) * 2 * Math.PI * (deltaTime / 1000);
            simulationState.suspension[wheel].rotation += rotationSpeed;
        });
        
        // Update chart data (every 500ms)
        if (currentTime - lastChartUpdate >= CHART_UPDATE_INTERVAL) {
            updateChartData(simulationState.time);
            lastChartUpdate = currentTime;
        }
        
        // Update metrics
        updateMetrics();
    }
    
    // Update 3D visuals
    update3DVehicle();
    
    requestAnimationFrame(animate);
}





// Remove old initialization code - now handled in initApp()