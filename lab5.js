import * as THREE from
'https://cdn.jsdelivr.net/npm/three@0.179.1/build/three.module.js';

// Scene
const scene = new THREE.Scene();

// Camera
const camera =
    new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

// Renderer
const renderer =
    new THREE.WebGLRenderer({
        antialias: true
    });

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(
    renderer.domElement
);

// Cube
const geometry =
    new THREE.BoxGeometry();

const material =
    new THREE.MeshPhongMaterial({
        color: 0x888888
    });

const cube =
    new THREE.Mesh(
        geometry,
        material
    );

scene.add(cube);

const colors = [
    0xff0000,
    0x00ff00,
    0x0000ff,
    0xffff00,
    0xff00ff,
    0x00ffff
]; 

// Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

/*
// Single Directional Light
const directionalLight =
    new THREE.DirectionalLight(
        0x00ffff,
        3.0
    );

directionalLight.position.set(
    1,
    0,
    1
);

scene.add(
    directionalLight
);
*/
const pointLight = new THREE.PointLight(
     0xffff00, 2,100);
    
pointLight.position.set(1,0,1);
    
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(
     0xff00ff, 2,100);
    
pointLight2.position.set(.5,0,.5);
    
scene.add(pointLight2);

// Camera Position
camera.position.z = 3;

let lastColorChange = 0;

// Animation Loop
function animate()
{
    requestAnimationFrame(
        animate
    );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    /*
    directionalLight.position.x = Math.sin(Date.now() * 0.001) * 2;
    directionalLight.position.z = Math.cos(Date.now() * 0.001) * 2;
    
    if (performance.now() - lastColorChange >= 1000)
    {
        directionalLight.color.setHex(colors[Math.floor(Math.random() * colors.length)]);
        lastColorChange = performance.now();
    }
*/
    renderer.render(
        scene,
        camera
    );
}

animate();

// Resize Handling
window.addEventListener(
    "resize",
    () =>
    {
        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);