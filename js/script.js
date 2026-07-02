// ===============================
// CYBER HUB - SCRIPT.JS
// Version 1.0
// ===============================

// Typing Effect

const title = document.querySelector(".hero h2");

const text = "Cyber Security Starts Here";

let index = 0;

function typeWriter(){

if(index < text.length){

title.textContent += text.charAt(index);

index++;

setTimeout(typeWriter,70);

}

}

window.onload = function(){

title.textContent = "";

typeWriter();

};


// Button Animation

const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-6px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});


// Fade In Sections

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition=".8s ease";

observer.observe(section);

});
