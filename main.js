/* =========================================
   TSCHICK TRAILER
========================================= */

const startButton =
document.querySelector(".start-btn");

/* =========================================
   START TRAILER
========================================= */

function startTrailer(){

document.querySelectorAll(".scene")[0]
.scrollIntoView({

behavior:"smooth"

});

}

window.startTrailer =
startTrailer;

/* =========================================
   FADE-IN ANIMATION
========================================= */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"visible"
);

}

});

},

{
threshold:0.25
}

);

document
.querySelectorAll(
".scene, .ending"
)
.forEach(section=>{

section.style.opacity = "0";
section.style.transform =
"translateY(100px)";
section.style.transition =
"all 1.5s ease";

observer.observe(section);

});

/* =========================================
   VISIBILITY
========================================= */

const visibilityObserver =
new MutationObserver(()=>{

document
.querySelectorAll(
".visible"
)
.forEach(item=>{

item.style.opacity = "1";

item.style.transform =
"translateY(0px)";

});

});

visibilityObserver.observe(

document.body,

{
attributes:true,
subtree:true,
attributeFilter:["class"]
}

);

/* =========================================
   MOON FLOATING EFFECT
========================================= */

const moon =
document.querySelector(
".moon"
);

let moonTime = 0;

function animateMoon(){

moonTime += 0.01;

moon.style.transform =

`translateY(${
Math.sin(moonTime)
*15
}px)`;

requestAnimationFrame(
animateMoon
);

}

animateMoon();

/* =========================================
   PARALLAX EFFECT
========================================= */

window.addEventListener(

"scroll",

()=>{

const scrollY =
window.scrollY;

moon.style.transform =

`translateY(${
(scrollY * 0.15)
+
Math.sin(moonTime)*15
}px)`;

}

);

/* =========================================
   PARTICLES
========================================= */

for(let i=0;i<40;i++){

const particle =
document.createElement(
"div"
);

particle.classList.add(
"particle"
);

particle.style.left =
Math.random()*100+"vw";

particle.style.top =
Math.random()*100+"vh";

particle.style.animationDuration =

10 +
Math.random()*20
+
"s";

document.body.appendChild(
particle
);

}

/* =========================================
   PARTICLE STYLE
========================================= */

const style =
document.createElement(
"style"
);

style.innerHTML =

`

.particle{

position:fixed;

width:3px;
height:3px;

background:white;

border-radius:50%;

opacity:.4;

pointer-events:none;

animation:
floatParticle linear infinite;

z-index:-1;

}

@keyframes floatParticle{

from{

transform:
translateY(0);

}

to{

transform:
translateY(-120vh);

}

}

`;

document.head.appendChild(
style
);

/* =========================================
   AUTO TITLE GLOW
========================================= */

const title =
document.querySelector(
".hero h1"
);

let glow = 0;

function animateTitle(){

glow += 0.03;

title.style.letterSpacing =

`${14 +
Math.sin(glow)*2}px`;

requestAnimationFrame(
animateTitle
);

}

animateTitle();

/* =========================================
   CINEMATIC SCROLL HINT
========================================= */

const hint =
document.createElement(
"div"
);

hint.innerHTML =
"↓";

hint.style.position =
"fixed";

hint.style.bottom =
"30px";

hint.style.left =
"50%";

hint.style.transform =
"translateX(-50%)";

hint.style.fontSize =
"2rem";

hint.style.opacity =
".6";

hint.style.animation =
"bounce 2s infinite";

document.body.appendChild(
hint);

const bounceStyle =
document.createElement(
"style"
);

bounceStyle.innerHTML =

`

@keyframes bounce{

0%{
transform:
translateX(-50%)
translateY(0);
}

50%{
transform:
translateX(-50%)
translateY(12px);
}

100%{
transform:
translateX(-50%)
translateY(0);
}

}

`;

document.head.appendChild(
bounceStyle
);
