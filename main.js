```javascript
import * as THREE from "three";

/* ==========================
   GRUNDSZENE
========================== */

const scene = new THREE.Scene();

scene.fog = new THREE.Fog(
    0x090a0f,
    30,
    200
);

/* ==========================
   KAMERA
========================== */

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(
    0,
    8,
    20
);

/* ==========================
   RENDERER
========================== */

const renderer =
new THREE.WebGLRenderer({

    canvas:
    document.getElementById("bg"),

    antialias:true

});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    window.devicePixelRatio
);

/* ==========================
   LICHTER
========================== */

const ambient =
new THREE.AmbientLight(
    0xffffff,
    0.8
);

scene.add(ambient);

const moonLight =
new THREE.DirectionalLight(
    0xbfdfff,
    2
);

moonLight.position.set(
    30,
    50,
    10
);

scene.add(moonLight);

/* ==========================
   MOND
========================== */

const moon =
new THREE.Mesh(

    new THREE.SphereGeometry(
        4,
        32,
        32
    ),

    new THREE.MeshStandardMaterial({

        color:0xf5f5f5,

        emissive:0xdddddd,

        emissiveIntensity:0.5

    })

);

moon.position.set(
    -35,
    40,
    -80
);

scene.add(moon);

/* ==========================
   STERNE
========================== */

const stars = [];

for(let i = 0; i < 1000; i++){

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

        (Math.random()-0.5)*400,

        Math.random()*200,

        (Math.random()-0.5)*400

    );

    scene.add(star);

    stars.push(star);
}

/* ==========================
   BODEN
========================== */

const ground =
new THREE.Mesh(

    new THREE.PlaneGeometry(
        500,
        500
    ),

    new THREE.MeshStandardMaterial({

        color:0x1f4d2c

    })

);

ground.rotation.x =
-Math.PI / 2;

scene.add(ground);

/* ==========================
   TATJANAS HAUS
========================== */

const house =
new THREE.Mesh(

    new THREE.BoxGeometry(
        10,
        6,
        10
    ),

    new THREE.MeshStandardMaterial({

        color:0xf2d2a9

    })

);

house.position.y = 3;

scene.add(house);

/* DACH */

const roof =
new THREE.Mesh(

    new THREE.ConeGeometry(
        8,
        4,
        4
    ),

    new THREE.MeshStandardMaterial({

        color:0x8b0000

    })

);

roof.position.y = 8;

roof.rotation.y =
Math.PI / 4;

scene.add(roof);

/* ==========================
   PARTYLICHTER
========================== */

const partyLights = [];

for(let i = 0; i < 60; i++){

    const light =
    new THREE.Mesh(

        new THREE.SphereGeometry(
            0.15
        ),

        new THREE.MeshBasicMaterial({

            color:
            Math.random() > 0.5
            ?
            0xffff66
            :
            0xff66ff

        })

    );

    light.position.set(

        (Math.random()*12)-6,

        Math.random()*4+4,

        (Math.random()*12)-6

    );

    scene.add(light);

    partyLights.push(light);
}

/* ==========================
   MAIK
========================== */

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

color:0xffd5b5

})

);

maikHead.position.y = 1.5;

maik.add(maikBody);
maik.add(maikHead);

maik.position.set(
8,
1,
4
);

scene.add(maik);
```
```javascript id="tschick-lada"
/* ==========================
   TSCHICK
========================== */

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

color:0x444444

})

);

const tschickHead =
new THREE.Mesh(

new THREE.SphereGeometry(
0.45
),

new THREE.MeshStandardMaterial({

color:0xffd5b5

})

);

tschickHead.position.y = 1.5;

tschick.add(tschickBody);
tschick.add(tschickHead);

tschick.position.set(
-25,
1,
0
);

scene.add(tschick);

/* ==========================
   BLAUER LADA
========================== */

const lada =
new THREE.Group();

/* Unterteil */

const carBase =
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

lada.add(carBase);

/* Dach */

const roofPart =
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

roofPart.position.y = 0.8;

lada.add(roofPart);

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
-25,
1,
0
);

scene.add(lada);

/* ==========================
   PARTYGÄSTE
========================== */

const guests = [];

for(let i=0;i<12;i++){

const guest =
new THREE.Group();

const body =
new THREE.Mesh(

new THREE.BoxGeometry(
0.8,
1.6,
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

color:0xffd5b5

})

);

head.position.y = 1.2;

guest.add(body);
guest.add(head);

guest.position.set(

(Math.random()*12)-6,

1,

(Math.random()*12)-6

);

scene.add(guest);

guests.push(guest);

}

/* ==========================
   KAPITEL
========================== */

const story = [

{
titel:"Tatjanas Party",
text:"Maik steht allein vor dem Haus und beobachtet die Feier."
},

{
titel:"Tschick erscheint",
text:"Ein alter blauer Lada fährt langsam auf die Party zu."
},

{
titel:"Ein ungewöhnlicher Freund",
text:"Tschick spricht mit Maik. Eine unerwartete Freundschaft beginnt."
},

{
titel:"Der gestohlene Wagen",
text:"Der Lada gehört nicht Tschick. Das Abenteuer beginnt."
},

{
titel:"Die Entscheidung",
text:"Die beiden beschließen, einfach loszufahren."
}

];

let currentScene = 0;

/* ==========================
   ANIMATION
========================== */

let time = 0;

function animate(){

requestAnimationFrame(
animate
);

time++;

/* Sterne funkeln */

stars.forEach(star=>{

star.scale.setScalar(

1 +
Math.sin(
time*0.02 +
star.position.x
)
*
0.2

);

});

/* Partylichter blinken */

partyLights.forEach(light=>{

light.scale.setScalar(

1 +
Math.sin(
time*0.1
)
*
0.3

);

});

/* Gäste bewegen sich */

guests.forEach((guest,index)=>{

guest.rotation.y +=
0.005;

guest.position.y =
1 +
Math.sin(
time*0.03 + index
)
*
0.05;

});

/* Tschick fährt vor */

if(time < 900){

lada.position.x += 0.02;

tschick.position.x += 0.02;

}

/* Maik schaut zum Auto */

maik.rotation.y =

Math.sin(
time*0.01
)
*
0.2;

/* Kamera bewegt sich langsam */

camera.position.x =

Math.sin(
time*0.002
)
*
3;

camera.lookAt(
0,
3,
0
);
tschickWalk();

maikWalk();

startRoadTrip();

driveAway();

nightDrive();

moveWorld();
chapterRoadTrip();

chapterFields();

sunrise();

roadCamera();

renderer.render(
scene,
camera
);

}
```javascript
/* ==========================
   FELDER
========================== */

const fields = [];

for(let i = 0; i < 50; i++){

const field =
new THREE.Mesh(

new THREE.BoxGeometry(
8,
0.2,
8
),

new THREE.MeshStandardMaterial({

color:
Math.random() > 0.5
?
0x88cc44
:
0xd4b24c

})

);

field.position.set(

Math.random() > 0.5
?
15 + Math.random()*40
:
-15 - Math.random()*40,

0.1,

-Math.random()*500

);

scene.add(field);

fields.push(field);

}

/* ==========================
   DÖRFER
========================== */

const villages = [];

for(let i = 0; i < 20; i++){

const village =
new THREE.Group();

const house1 =
new THREE.Mesh(

new THREE.BoxGeometry(
3,
3,
3
),

new THREE.MeshStandardMaterial({

color:0xf0d9b5

})

);

house1.position.y = 1.5;

village.add(house1);

village.position.set(

Math.random() > 0.5
?
20 + Math.random()*30
:
-20 - Math.random()*30,

0,

-100 - Math.random()*500

);

scene.add(village);

villages.push(village);

}

/* ==========================
   KAPITEL 6
========================== */

function chapterRoadTrip(){

if(time > 3000){

sceneTitle.innerHTML =
"Landstraßen";

chapterTitle.innerHTML =
"Die Reise beginnt";

chapterText.innerHTML =
"Maik und Tschick fahren ohne Ziel durch Deutschland.";

}

}

/* ==========================
   KAPITEL 7
========================== */

function chapterFields(){

if(time > 4500){

sceneTitle.innerHTML =
"Felder";

chapterTitle.innerHTML =
"Endlose Landschaft";

chapterText.innerHTML =
"Überall Felder, Wälder und kleine Dörfer.";

}

}

/* ==========================
   SONNENAUFGANG
========================== */

function sunrise(){

if(time > 6000){

scene.background =
new THREE.Color(
0xff9966
);

}

}

/* ==========================
   KAMERAFLUG
========================== */

function roadCamera(){

if(roadTrip){

camera.position.y =

8 +
Math.sin(
time*0.002
)
*
2;

}

}
```
```javascript
/* ==========================
   ISA
========================== */

const isa =
new THREE.Group();

const isaBody =
new THREE.Mesh(

new THREE.BoxGeometry(
1,
2,
0.8
),

new THREE.MeshStandardMaterial({

color:0xff6699

})

);

const isaHead =
new THREE.Mesh(

new THREE.SphereGeometry(
0.45
),

new THREE.MeshStandardMaterial({

color:0xffd5b5

})

);

isaHead.position.y = 1.5;

isa.add(isaBody);
isa.add(isaHead);

isa.position.set(
50,
1,
-250
);

scene.add(isa);

/* ==========================
   ISA KAPITEL
========================== */

function isaScene(){

if(time > 8000){

sceneTitle.innerHTML =
"Isa";

chapterTitle.innerHTML =
"Eine ungewöhnliche Begegnung";

chapterText.innerHTML =
"Mitten auf ihrer Reise treffen Maik und Tschick Isa.";

}

if(time > 8000){

isa.position.x -= 0.03;

}

}
```
```javascript
/* ==========================
   POLIZEIAUTO
========================== */

const policeCar =
new THREE.Group();

const policeBody =
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

policeCar.add(policeBody);

policeCar.position.set(
40,
1,
lada.position.z - 50
);

scene.add(policeCar);

/* ==========================
   POLIZEI
========================== */

function policeScene(){

if(time > 11000){

sceneTitle.innerHTML =
"Polizei";

chapterTitle.innerHTML =
"Verfolgung";

chapterText.innerHTML =
"Die Reise wird gefährlicher.";

policeCar.position.x -= 0.06;

}

}
```
```javascript
/* ==========================
   UNFALL
========================== */

let crashed = false;

function crashScene(){

if(time > 14000 && !crashed){

crashed = true;

sceneTitle.innerHTML =
"Unfall";

chapterTitle.innerHTML =
"Das Ende der Fahrt";

chapterText.innerHTML =
"Der Lada verunglückt.";

}

if(crashed){

lada.rotation.z += 0.01;

lada.position.y +=
Math.sin(time*0.05)*0.01;

}

}
```
```javascript
/* ==========================
   KRANKENHAUS
========================== */

function hospitalScene(){

if(time > 17000){

sceneTitle.innerHTML =
"Krankenhaus";

chapterTitle.innerHTML =
"Nach dem Unfall";

chapterText.innerHTML =
"Die Reise ist vorbei.";

}

}

/* ==========================
   ENDE
========================== */

function endingScene(){

if(time > 20000){

sceneTitle.innerHTML =
"Ende";

chapterTitle.innerHTML =
"Ein unvergesslicher Sommer";

chapterText.innerHTML =
"Maik kehrt nach Hause zurück. Die Reise hat ihn verändert.";

}

}
```

animate();

isaScene();

policeScene();

crashScene();

hospitalScene();

endingScene();

````javascript
/* ==========================
   STORY SYSTEM
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

function updateStory(){

chapterTitle.innerHTML =
story[currentScene].titel;

chapterText.innerHTML =
story[currentScene].text;

sceneTitle.innerHTML =
story[currentScene].titel;

progressBar.style.width =

(
(currentScene + 1)
/
story.length
)
*
100
+
"%";

}

/* ==========================
   AUTOMATISCHE SZENEN
========================== */

setTimeout(()=>{

currentScene = 1;
updateStory();

},10000);

setTimeout(()=>{

currentScene = 2;
updateStory();

},20000);

setTimeout(()=>{

currentScene = 3;
updateStory();

},30000);

setTimeout(()=>{

currentScene = 4;
updateStory();

},40000);

/* ==========================
   DIALOGE
========================== */

const dialoge = [

"Maik beobachtet die Party.",

"Tschick fährt mit dem alten Lada vor.",

"'Schönes Auto.'",

"'Hab ich mir ausgeliehen.'",

"Maik merkt schnell, dass etwas nicht stimmt.",

"Der Wagen ist gestohlen.",

"'Komm mit.'",

"'Wohin?'",

"'Egal. Einfach weg.'"

];

let dialogIndex = 0;

setInterval(()=>{

if(dialogIndex <
dialoge.length){

chapterText.innerHTML =
dialoge[dialogIndex];

dialogIndex++;

}

},5000);

/* ==========================
   TSCHICK STEIGT AUS
========================== */

function tschickWalk(){

if(
time > 900 &&
time < 1400
){

tschick.position.x +=
0.01;

tschick.position.z +=
0.005;

}

}

/* ==========================
   MAIK GEHT MIT
========================== */

function maikWalk(){

if(
time > 1400 &&
time < 2000
){

maik.position.x -=
0.01;

}

}

/* ==========================
   AUFBRUCH
========================== */

let roadTrip = false;

function startRoadTrip(){

if(
time > 2200
){

roadTrip = true;

sceneTitle.innerHTML =
"Die Reise beginnt";

}

}

/* ==========================
   AUTO FÄHRT LOS
========================== */

function driveAway(){

if(roadTrip){

lada.position.z -=
0.15;

tschick.position.z =
lada.position.z;

maik.position.z =
lada.position.z;

camera.position.z -=
0.05;

}

}

/* ==========================
   NACHTFAHRT
========================== */

function nightDrive(){

if(time > 2500){

scene.background =
new THREE.Color(
0x050510
);

}

}

/* ==========================
   STRASSENBEWEGUNG
========================== */

function moveWorld(){

if(roadTrip){

scene.children.forEach(
(obj)=>{

if(

obj !== lada &&
obj !== camera &&
obj !== moon

){

if(obj.position){

obj.position.z +=
0.05;

}

}

}
);

}

}
```
``




