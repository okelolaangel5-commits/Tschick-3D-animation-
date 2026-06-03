import * as THREE from "three";

/* ==========================
   BASIC SETUP
========================== */

const canvas = document.getElementById("bg");

const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias:true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050510);

const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

camera.position.set(0,8,20);

/* ==========================
   LIGHTS
========================== */

const ambient =
new THREE.AmbientLight(
0xffffff,
1.2
);

scene.add(ambient);

const moonLight =
new THREE.DirectionalLight(
0xaaccff,
2
);

moonLight.position.set(
30,
50,
20
);

scene.add(moonLight);

/* ==========================
   MOON
========================== */

const moon =
new THREE.Mesh(

new THREE.SphereGeometry(
4,
32,
32
),

new THREE.MeshStandardMaterial({

color:0xffffff

})

);

moon.position.set(
-20,
25,
-80
);

scene.add(moon);

/* ==========================
   STARS
========================== */

const stars = [];

for(let i=0;i<1000;i++){

const star =
new THREE.Mesh(

new THREE.SphereGeometry(
0.08,
8,
8
),

new THREE.MeshBasicMaterial({

color:0xffffff

})

);

star.position.set(

(Math.random()-0.5)*300,

Math.random()*150,

(Math.random()-0.5)*300

);

scene.add(star);

stars.push(star);

}

/* ==========================
   GROUND
========================== */

const ground =
new THREE.Mesh(

new THREE.PlaneGeometry(
500,
500
),

new THREE.MeshStandardMaterial({

color:0x2f5f2f

})

);

ground.rotation.x =
-Math.PI/2;

scene.add(ground);

/* ==========================
   HOUSE
========================== */

const house =
new THREE.Mesh(

new THREE.BoxGeometry(
10,
6,
10
),

new THREE.MeshStandardMaterial({

color:0xf0d8b0

})

);

house.position.y = 3;

scene.add(house);

/* ==========================
   MAIK
========================== */

const maik =
new THREE.Mesh(

new THREE.BoxGeometry(
1,
2,
1
),

new THREE.MeshStandardMaterial({

color:0x222222

})

);

maik.position.set(
7,
1,
3
);

scene.add(maik);

/* ==========================
   TSCHICK
========================== */

const tschick =
new THREE.Mesh(

new THREE.BoxGeometry(
1,
2,
1
),

new THREE.MeshStandardMaterial({

color:0x666666

})

);

tschick.position.set(
-20,
1,
0
);

scene.add(tschick);

/* ==========================
   LADA
========================== */

const lada =
new THREE.Mesh(

new THREE.BoxGeometry(
4,
1.5,
2
),

new THREE.MeshStandardMaterial({

color:0x3366ff

})

);

lada.position.set(
-20,
1,
0
);

scene.add(lada);

/* ==========================
   UI
========================== */

const chapterTitle =
document.getElementById(
"chapterTitle"
);

const chapterText =
document.getElementById(
"chapterText"
);

const sceneTitle =
document.getElementById(
"sceneTitle"
);

const progressBar =
document.getElementById(
"progressBar"
);

const startBtn =
document.getElementById(
"startBtn"
);

const startscreen =
document.getElementById(
"startscreen"
);

/* ==========================
   STORY
========================== */

const chapters = [

["Tatjanas Party",
"Maik steht allein auf der Party."],

["Tschick erscheint",
"Ein alter blauer Lada fährt vor."],

["Die Reise",
"Maik und Tschick fahren los."],

["Isa",
"Sie treffen Isa unterwegs."],

["Polizei",
"Die Polizei kommt näher."],

["Unfall",
"Der Lada verunglückt."],

["Ende",
"Die Reise verändert Maik."]

];

let chapter = 0;

function updateChapter(){

chapterTitle.textContent =
chapters[chapter][0];

chapterText.textContent =
chapters[chapter][1];

sceneTitle.textContent =
chapters[chapter][0];

progressBar.style.width =
((chapter+1)/chapters.length)*100
+ "%";

}

/* ==========================
   START
========================== */

let started = false;

startBtn.onclick = ()=>{

started = true;

startscreen.style.display =
"none";

updateChapter();

};

/* ==========================
   ISA
========================== */

const isa =
new THREE.Mesh(

new THREE.BoxGeometry(
1,
2,
1
),

new THREE.MeshStandardMaterial({

color:0xff66aa

})

);

isa.position.set(
30,
1,
-80
);

scene.add(isa);

/* ==========================
   POLICE
========================== */

const police =
new THREE.Mesh(

new THREE.BoxGeometry(
4,
1.5,
2
),

new THREE.MeshStandardMaterial({

color:0xffffff

})

);

police.position.set(
0,
1,
-120
);

scene.add(police);

/* ==========================
   ANIMATION
========================== */

let time = 0;

function animate(){

requestAnimationFrame(
animate
);

time++;

stars.forEach(star=>{

star.scale.setScalar(

1 +
Math.sin(
time*0.02 +
star.position.x
)
*0.2

);

});

if(started){

if(time === 300){
chapter = 1;
updateChapter();
}

if(time === 700){
chapter = 2;
updateChapter();
}

if(time === 1400){
chapter = 3;
updateChapter();
}

if(time === 2200){
chapter = 4;
updateChapter();
}

if(time === 3000){
chapter = 5;
updateChapter();
}

if(time === 3800){
chapter = 6;
updateChapter();
}

/* Tschick arrives */

if(time < 600){

lada.position.x += 0.04;
tschick.position.x += 0.04;

}

/* Road trip */

if(time > 700){

lada.position.z -= 0.15;
camera.position.z -= 0.05;

}

/* Isa */

if(time > 1400){

isa.rotation.y += 0.03;

}

/* Police */

if(time > 2200){

police.position.z += 0.1;

}

/* Crash */

if(time > 3000){

lada.rotation.z += 0.01;

}

}

camera.lookAt(
0,
2,
lada.position.z - 20
);

renderer.render(
scene,
camera
);

}

animate();

/* ==========================
   RESIZE
========================== */

window.addEventListener(
"resize",
()=>{

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
