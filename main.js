```javascript
import * as THREE from "three";

/* =====================================
   TSCHICK - DIE REISE
   CINEMATIC VERSION
===================================== */

const canvas =
document.getElementById("bg");

const renderer =
new THREE.WebGLRenderer({
canvas,
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

renderer.setPixelRatio(
window.devicePixelRatio
);

/* =====================================
   SCENE
===================================== */

const scene =
new THREE.Scene();

scene.background =
new THREE.Color(0x050510);

scene.fog =
new THREE.Fog(
0x050510,
40,
300
);

/* =====================================
   CAMERA
===================================== */

const camera =
new THREE.PerspectiveCamera(
70,
window.innerWidth /
window.innerHeight,
0.1,
1000
);

camera.position.set(
0,
8,
25
);

/* =====================================
   LIGHTS
===================================== */

const ambient =
new THREE.AmbientLight(
0xffffff,
1
);

scene.add(ambient);

const moonLight =
new THREE.DirectionalLight(
0xaaccff,
2
);

moonLight.position.set(
50,
80,
20
);

scene.add(moonLight);

/* =====================================
   MOON
===================================== */

const moon =
new THREE.Mesh(

new THREE.SphereGeometry(
5,
32,
32
),

new THREE.MeshStandardMaterial({

color:0xffffff,

emissive:0xddddff,

emissiveIntensity:0.5

})

);

moon.position.set(
-60,
60,
-120
);

scene.add(moon);

/* =====================================
   STARS
===================================== */

const stars = [];

for(let i=0;i<2000;i++){

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

(Math.random()-0.5)*600,

Math.random()*250,

(Math.random()-0.5)*600

);

scene.add(star);

stars.push(star);

}

/* =====================================
   GROUND
===================================== */

const ground =
new THREE.Mesh(

new THREE.PlaneGeometry(
1000,
1000
),

new THREE.MeshStandardMaterial({

color:0x234d20

})

);

ground.rotation.x =
-Math.PI/2;

scene.add(ground);

/* =====================================
   TATJANAS HAUS
===================================== */

const house =
new THREE.Mesh(

new THREE.BoxGeometry(
12,
8,
12
),

new THREE.MeshStandardMaterial({

color:0xf0d8b0

})

);

house.position.y = 4;

scene.add(house);

const roof =
new THREE.Mesh(

new THREE.ConeGeometry(
9,
5,
4
),

new THREE.MeshStandardMaterial({

color:0x8b0000

})

);

roof.position.y = 10;

roof.rotation.y =
Math.PI/4;

scene.add(roof);

/* =====================================
   PARTY LIGHTS
===================================== */

const partyLights = [];

for(let i=0;i<80;i++){

const light =
new THREE.Mesh(

new THREE.SphereGeometry(
0.15
),

new THREE.MeshBasicMaterial({

color:
Math.random()>0.5
?
0xffff66
:
0xff66ff

})

);

light.position.set(

(Math.random()*14)-7,

Math.random()*5+5,

(Math.random()*14)-7

);

scene.add(light);

partyLights.push(light);

}

 ```javascript

/* =====================================
   BLAUER LADA
===================================== */

const lada =
new THREE.Group();

const carBody =
new THREE.Mesh(

new THREE.BoxGeometry(
4,
1,
2
),

new THREE.MeshStandardMaterial({

color:0x3366ff

})

);

lada.add(carBody);

const carRoof =
new THREE.Mesh(

new THREE.BoxGeometry(
2.5,
0.8,
1.8
),

new THREE.MeshStandardMaterial({

color:0x2255dd

})

);

carRoof.position.y = 0.8;

lada.add(carRoof);

/* Räder */

for(let i=0;i<4;i++){

const wheel =
new THREE.Mesh(

new THREE.CylinderGeometry(
0.4,
0.4,
0.5,
16
),

new THREE.MeshStandardMaterial({

color:0x111111

})

);

wheel.rotation.z =
Math.PI/2;

wheel.position.set(

i < 2 ? -1.2 : 1.2,

-0.6,

i % 2 === 0 ? -1 : 1

);

lada.add(wheel);

}

lada.position.set(
-40,
1,
0
);

scene.add(lada);

/* =====================================
   PARTYGÄSTE
===================================== */

const guests = [];

for(let i=0;i<20;i++){

const guest =
new THREE.Group();

const body =
new THREE.Mesh(

new THREE.BoxGeometry(
0.8,
1.7,
0.6
),

new THREE.MeshStandardMaterial({

color:
Math.random()*0xffffff

})

);

const head =
new THREE.Mesh(

new THREE.SphereGeometry(
0.35
),

new THREE.MeshStandardMaterial({

color:0xffd4b5

})

);

head.position.y = 1.2;

guest.add(body);
guest.add(head);

guest.position.set(

(Math.random()*16)-8,

1,

(Math.random()*16)-8

);

scene.add(guest);

guests.push(guest);

}

/* =====================================
   STRASSE
===================================== */

const road =
new THREE.Mesh(

new THREE.PlaneGeometry(
12,
1200
),

new THREE.MeshStandardMaterial({

color:0x2b2b2b

})

);

road.rotation.x =
-Math.PI/2;

road.position.z =
-500;

road.position.y =
0.01;

scene.add(road);

/* Mittellinien */

for(let i=0;i<150;i++){

const line =
new THREE.Mesh(

new THREE.BoxGeometry(
0.3,
0.1,
4
),

new THREE.MeshBasicMaterial({

color:0xffffff

})

);

line.position.set(
0,
0.1,
-i*8
);

scene.add(line);

}
```

```javascript
/* =====================================
   STORY UI
===================================== */

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

/* =====================================
   STORY CHAPTERS
===================================== */

const chapters = [

{
title:"Tatjanas Party",
text:"Maik steht allein vor dem Haus und beobachtet die Feier."
},

{
title:"Tschick erscheint",
text:"Ein alter blauer Lada fährt langsam auf die Party zu."
},

{
title:"Neue Freundschaft",
text:"Tschick spricht mit Maik."
},

{
title:"Die Reise beginnt",
text:"Die beiden verlassen Berlin."
},

{
title:"Landstraßen",
text:"Sie fahren durch Felder und kleine Dörfer."
},

{
title:"Isa",
text:"Sie treffen Isa mitten im Nirgendwo."
},

{
title:"Polizei",
text:"Die Situation wird gefährlich."
},

{
title:"Unfall",
text:"Die Reise endet abrupt."
},

{
title:"Ende",
text:"Maik kehrt verändert nach Hause zurück."
}

];

let chapter = 0;

function updateChapter(){

chapterTitle.textContent =
chapters[chapter].title;

chapterText.textContent =
chapters[chapter].text;

sceneTitle.textContent =
chapters[chapter].title;

progressBar.style.width =

(
(chapter+1)
/
chapters.length
)
*
100
+
"%";

}

/* =====================================
   START BUTTON
===================================== */

let started = false;

startBtn.addEventListener(
"click",
()=>{

started = true;

startscreen.style.display =
"none";

updateChapter();

}
);

/* =====================================
   STORY TIMER
===================================== */

let storyTime = 0;
```

```javascript
/* =====================================
   STORY ANIMATION
===================================== */

function animateStory(){

if(!started) return;

/* Zeit läuft */

storyTime++;

/* Kapitelwechsel */

if(storyTime === 300){
chapter = 1;
updateChapter();
}

if(storyTime === 700){
chapter = 2;
updateChapter();
}

if(storyTime === 1200){
chapter = 3;
updateChapter();
}

if(storyTime === 1800){
chapter = 4;
updateChapter();
}

if(storyTime === 2400){
chapter = 5;
updateChapter();
}

if(storyTime === 3000){
chapter = 6;
updateChapter();
}

if(storyTime === 3600){
chapter = 7;
updateChapter();
}

if(storyTime === 4300){
chapter = 8;
updateChapter();
}

/* =====================================
   TSCHICK KOMMT AN
===================================== */

if(storyTime < 600){

lada.position.x += 0.08;
tschick.position.x += 0.08;

}

/* =====================================
   PARTY ANIMATION
===================================== */

partyLights.forEach(light=>{

light.scale.setScalar(

1 +
Math.sin(
storyTime * 0.08
) * 0.25

);

});

guests.forEach((guest,index)=>{

guest.rotation.y += 0.01;

guest.position.y =

1 +
Math.sin(
storyTime * 0.05 + index
) * 0.08;

});

/* =====================================
   TSCHICK & MAIK
===================================== */

if(
storyTime > 700 &&
storyTime < 1200
){

tschick.position.x += 0.02;

}

/* =====================================
   AUFBRUCH
===================================== */

if(storyTime > 1200){

lada.position.z -= 0.25;

camera.position.z -= 0.12;

}

/* Maik und Tschick sitzen im Auto */

if(storyTime > 1200){

maik.position.copy(
lada.position
);

tschick.position.copy(
lada.position
);

}

/* =====================================
   SONNENAUFGANG
===================================== */

if(storyTime > 1800){

scene.background =
new THREE.Color(
0xffa366
);

}

/* =====================================
   ISA
===================================== */

if(storyTime > 2400){

if(!window.isaCreated){

window.isaCreated = true;

const isa =
new THREE.Group();

const body =
new THREE.Mesh(

new THREE.BoxGeometry(
1,
2,
0.8
),

new THREE.MeshStandardMaterial({

color:0xff66aa

})

);

const head =
new THREE.Mesh(

new THREE.SphereGeometry(
0.45
),

new THREE.MeshStandardMaterial({

color:0xffd4b5

})

);

head.position.y = 1.4;

isa.add(body);
isa.add(head);

isa.position.set(
10,
1,
lada.position.z - 40
);

scene.add(isa);

window.isa = isa;

}

window.isa.rotation.y +=
0.03;

}

/* =====================================
   POLIZEI
===================================== */

if(storyTime > 3000){

if(!window.policeCreated){

window.policeCreated = true;

const police =
new THREE.Mesh(

new THREE.BoxGeometry(
4,
1,
2
),

new THREE.MeshStandardMaterial({

color:0xffffff

})

);

police.position.set(
0,
1,
lada.position.z - 60
);

scene.add(police);

window.police = police;

}

window.police.position.z +=
0.2;

}

/* =====================================
   UNFALL
===================================== */

if(storyTime > 3600){

lada.rotation.z += 0.01;

lada.position.y +=

Math.sin(
storyTime * 0.1
) * 0.01;

}

/* =====================================
   ENDE
===================================== */

if(storyTime > 4300){

scene.background =
new THREE.Color(
0xffcc88
);

camera.position.y =

10 +
Math.sin(
storyTime * 0.01
);

}

}
```

/* =====================================
   TSCHICK
===================================== */

const tschick =
new THREE.Group();

const tschickBody =
new THREE.Mesh(

new THREE.BoxGeometry(
1,
2,
0.8
),

new THREE.MeshStandardMaterial({

color:0x555555

})

);

const tschickHead =
new THREE.Mesh(

new THREE.SphereGeometry(
0.45
),

new THREE.MeshStandardMaterial({

color:0xffd4b5

})

);

tschickHead.position.y = 1.4;

tschick.add(tschickBody);
tschick.add(tschickHead);

tschick.position.set(
-40,
1,
0
);

scene.add(tschick);

/* =====================================
   MAIK
===================================== */

const maik =
new THREE.Group();

const maikBody =
new THREE.Mesh(

new THREE.BoxGeometry(
1,
2,
0.8
),

new THREE.MeshStandardMaterial({

color:0x111111

})

);

const maikHead =
new THREE.Mesh(

new THREE.SphereGeometry(
0.45
),

new THREE.MeshStandardMaterial({

color:0xffd4b5

})

);

maikHead.position.y = 1.4;

maik.add(maikBody);

```javascript
function animate(){

requestAnimationFrame(
animate
);

/* Sterne funkeln */

stars.forEach(star=>{

star.scale.setScalar(

1 +
Math.sin(
Date.now()*0.002 +
star.position.x
)
*0.2

);

});

/* Story */

animateStory();

/* Kamera */

camera.lookAt(
0,
3,
lada.position.z - 30
);

/* Rendern */

renderer.render(
scene,
camera
);

}

animate();

/* Resize */

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
```

maik.add(maikHead);

maik.position.set(
8,
1,
4
);

scene.add(maik);
```

