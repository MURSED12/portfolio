// Typing effect
const typing=document.getElementById("typing");
const text="I'm Sara Howari"; let i=0;
function type(){if(i<text.length){typing.textContent+=text.charAt(i);i++;setTimeout(type,100);}}
window.onload=type;

// AOS
AOS.init({duration:1200,once:true});

// Particle background
const canvas=document.getElementById("bgCanvas");
const ctx=canvas.getContext("2d");
canvas.width=innerWidth;canvas.height=innerHeight;
let particles=[];
class Particle{constructor(x,y,sx,sy){this.x=x;this.y=y;this.sx=sx;this.sy=sy;this.size=Math.random()*2+1;}
update(){this.x+=this.sx;this.y+=this.sy;if(this.x<0||this.x>canvas.width)this.sx*=-1;if(this.y<0||this.y>canvas.height)this.sy*=-1;}
draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fillStyle="rgba(255,95,217,0.6)";ctx.fill();}}
for(let j=0;j<70;j++){particles.push(new Particle(Math.random()*canvas.width,Math.random()*canvas.height,(Math.random()-0.5)*1.2,(Math.random()-0.5)*1.2));}
function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{p.update();p.draw();});requestAnimationFrame(animate);}
animate();

// Navbar behavior
const navbar=document.getElementById("navbar");
const menuToggle=document.getElementById("menu-toggle");
const navMenu=document.getElementById("nav-menu");
const navLinks=document.querySelectorAll(".nav-links a");
const sections=document.querySelectorAll("section");
menuToggle.addEventListener("click",()=>navMenu.classList.toggle("active"));
window.addEventListener("scroll",()=>{
  navbar.classList.toggle("scrolled",window.scrollY>60);
  let current="";
  sections.forEach(section=>{
    const sectionTop=section.offsetTop-100;
    if(scrollY>=sectionTop)current=section.getAttribute("id");
  });
  navLinks.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href").includes(current))link.classList.add("active");
  });
});

// Contact thank-you popup
const contactForm=document.getElementById("contactForm");
const thankPopup=document.getElementById("thankPopup");
contactForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  thankPopup.style.display="flex";
  setTimeout(()=>{thankPopup.style.display="none";contactForm.reset();},2500);
});
