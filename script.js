// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Typing Animation
const typing = document.getElementById("typing");
const text = "Mursed Alam";
let index = 0;

function type() {
  if (index < text.length) {
    typing.textContent += text.charAt(index);
    index++;
    setTimeout(type, 120);
  }
}
window.onload = type;

// AOS
AOS.init({
  duration: 1200,
  once: true
});

// Particle Background
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

class Particle {
  constructor(x, y, size, sx, sy) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.sx = sx;
    this.sy = sy;
  }
  update() {
    this.x += this.sx;
    this.y += this.sy;
    if (this.x < 0 || this.x > canvas.width) this.sx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.sy *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(142,182,155,0.7)";
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < 70; i++) {
    let size = Math.random() * 2 + 1;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let sx = (Math.random() - 0.5) * 1.2;
    let sy = (Math.random() - 0.5) * 1.2;
    particles.push(new Particle(x, y, size, sx, sy));
  }
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
init();
animate();
