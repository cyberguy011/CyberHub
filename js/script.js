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
// ===============================
// Animated Cyber Background
// ===============================

const canvas = document.getElementById("cyber-bg");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];

for (let i = 0; i < 70; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.6,
        dy: (Math.random() - 0.5) * 0.6
    });
}

function animateBackground() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {

        let p = particles[i];

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#00d9ff";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {

            let q = particles[j];

            let dist = Math.hypot(p.x - q.x, p.y - q.y);

            if (dist < 120) {

                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(q.x, q.y);

                ctx.strokeStyle = "rgba(0,217,255,0.12)";
                ctx.stroke();

            }

        }

    }

    requestAnimationFrame(animateBackground);

}

animateBackground();
// ===== Animated Counter =====

const counters=document.querySelectorAll(".counter");

const speed=150;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const inc=Math.ceil(target/speed);

if(count<target){

counter.innerText=count+inc;

setTimeout(update,15);

}else{

counter.innerText=target;

}

};

update();

});
