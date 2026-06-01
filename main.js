import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
canvas:document.querySelector('#bg')
});

renderer.setSize(window.innerWidth,window.innerHeight);

camera.position.z = 15;

/* Sky */

scene.background = new THREE.Color(0xff914d);

/* Ground */

const groundGeometry = new THREE.PlaneGeometry(50,50);
const groundMaterial = new THREE.MeshStandardMaterial({
color:0x2d5a27
});

const ground = new THREE.Mesh(
groundGeometry,
groundMaterial
);

ground.rotation.x = -Math.PI / 2;
ground.position.y = -4;

scene.add(ground);

/* Party House */

const houseGeometry = new THREE.BoxGeometry(6,4,6);
const houseMaterial = new THREE.MeshStandardMaterial({
color:0xf5deb3
});

const house = new THREE.Mesh(
houseGeometry,
houseMaterial
);

house.position.y = 0;
scene.add(house);

/* Roof */

const roofGeometry = new THREE.ConeGeometry(5,3,4);
const roofMaterial = new THREE.MeshStandardMaterial({
color:0xaa0000
});

const roof = new THREE.Mesh(
roofGeometry,
roofMaterial
);

roof.position.y = 3.5;
roof.rotation.y = Math.PI/4;

scene.add(roof);

/* Tschick's Lada */

const carGeometry = new THREE.BoxGeometry(3,1.2,1.5);
const carMaterial = new THREE.MeshStandardMaterial({
color:0x3366ff
});

const car = new THREE.Mesh(
carGeometry,
carMaterial
);

car.position.set(-15,-2.5,0);

scene.add(car);

/* Lights */

const light = new THREE.PointLight(0xffffff,100);
light.position.set(10,10,10);

scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff,2);
scene.add(ambient);

/* Animation */

function animate(){

requestAnimationFrame(animate);

/* Car drives to party */

if(car.position.x < -5){
car.position.x += 0.03;
}

renderer.render(scene,camera);
}

animate();

for(let i = 0; i < 20; i++){

    const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.15),
        new THREE.MeshStandardMaterial({
            emissive: 0xffff00,
            emissiveIntensity: 5
        })
    );

    bulb.position.set(
        Math.random()*8-4,
        2 + Math.random()*2,
        Math.random()*8-4
    );

    scene.add(bulb);
}

const maik = new THREE.Group();

const maikBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.8,1.5,0.5),
    new THREE.MeshStandardMaterial({
        color:0x222222
    })
);

const maikHead = new THREE.Mesh(
    new THREE.SphereGeometry(0.35),
    new THREE.MeshStandardMaterial({
        color:0xffd6b3
    })
);

maikHead.position.y = 1.1;

maik.add(maikBody);
maik.add(maikHead);

maik.position.set(5,-2.3,2);

scene.add(maik);

const tschick = new THREE.Group();

const tschickBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.8,1.5,0.5),
    new THREE.MeshStandardMaterial({
        color:0x444444
    })
);

const tschickHead = new THREE.Mesh(
    new THREE.SphereGeometry(0.35),
    new THREE.MeshStandardMaterial({
        color:0xffd6b3
    })
);

tschickHead.position.y = 1.1;

tschick.add(tschickBody);
tschick.add(tschickHead);

tschick.position.set(-5,-2.3,2);

scene.add(tschick);

function animate(){

requestAnimationFrame(animate);

if(car.position.x < -5){
    car.position.x += 0.03;
}

/* camera slowly moves */

camera.position.z -= 0.005;

if(camera.position.z < 10){
    camera.position.z = 10;
}

/* party lights blink */

scene.traverse((obj)=>{

    if(obj.material && obj.material.emissive){

        obj.material.emissiveIntensity =
        3 + Math.sin(Date.now()*0.005)*2;
    }
});

renderer.render(scene,camera);
}

const dialogues = [

"Sommerferien.",
"Maik ist allein zuhause.",
"Tatjana feiert Geburtstag.",
"Plötzlich erscheint Tschick.",
"Mit einem gestohlenen Lada.",
"Die Reise beginnt..."
];

let current = 0;

setInterval(()=>{

document.querySelector("p").innerHTML =
dialogues[current];

current++;

if(current >= dialogues.length){
current = 0;
}

},3000);

setTimeout(()=>{

document.querySelector("h1").innerHTML =
"Aufbruch";

document.querySelector("p").innerHTML =
"Maik und Tschick fahren los...";

camera.position.z = 25;

},18000);

const road = new THREE.Mesh(
    new THREE.PlaneGeometry(8,100),
    new THREE.MeshStandardMaterial({
        color:0x333333
    })
);

road.rotation.x = -Math.PI/2;
road.position.y = -3.95;
road.position.z = -40;

scene.add(road);

for(let i = 0; i < 25; i++){

    const line = new THREE.Mesh(
        new THREE.BoxGeometry(0.3,0.05,2),
        new THREE.MeshStandardMaterial({
            color:0xffffff
        })
    );

    line.position.set(
        0,
        -3.9,
        -5 - i*4
    );

    scene.add(line);
}

for(let i = 0; i < 30; i++){

    const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15,0.15,1),
        new THREE.MeshStandardMaterial({
            color:0x6b4423
        })
    );

    const leaves = new THREE.Mesh(
        new THREE.SphereGeometry(0.8),
        new THREE.MeshStandardMaterial({
            color:0x2e8b57
        })
    );

    const tree = new THREE.Group();

    leaves.position.y = 1;

    tree.add(trunk);
    tree.add(leaves);

    const side = Math.random() > 0.5 ? 6 : -6;

    tree.position.set(
        side,
        -3,
        -10 - i*5
    );

    scene.add(tree);
}

for(let i = 0; i < 300; i++){

    const star = new THREE.Mesh(
        new THREE.SphereGeometry(0.05),
        new THREE.MeshBasicMaterial({
            color:0xffffff
        })
    );

    star.position.set(
        (Math.random()-0.5)*100,
        Math.random()*50,
        (Math.random()-0.5)*100
    );

    scene.add(star);
}

