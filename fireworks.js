// Fireworks effect by @crashmax-dev
class Firework {
    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.particles = [];

        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: this.x,
                y: this.y,
                vx: (Math.random() - 0.5) * 5,
                vy: (Math.random() - 0.5) * 5,
                alpha: 1,
                radius: Math.random() * 3 + 1,
                color: `hsl(${Math.random() * 360}, 100%, 70%)`
            });
        }
    }

    draw() {
        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
            this.ctx.fillStyle = `rgba(${this.hexToRgb(p.color)}, ${p.alpha})`;
            this.ctx.fill();
        });
    }

    update() {
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.01;
        });
    }

    hexToRgb(hex) {
        let h = hex.replace(/^#/, '');
        let bigint = parseInt(h, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return `${r}, ${g}, ${b}`;
    }

    isDead() {
        return this.particles.every(p => p.alpha <= 0);
    }
}

const canvas = document.createElement('canvas');
canvas.id = 'fireworksCanvas';
canvas.style.position = 'fixed';
canvas.style.left = '0';
canvas.style.top = '0';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '9999';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function createFirework(x, y) {
    fireworks.push(new Firework(x, y, ctx));
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((f, i) => {
        f.update();
        f.draw();
        if (f.isDead()) fireworks.splice(i, 1);
    });
    requestAnimationFrame(animateFireworks);
}

animateFireworks();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.createFirework = createFirework;
