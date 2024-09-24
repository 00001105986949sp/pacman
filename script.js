const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const music = document.getElementById('gameMusic');
const cellSize = 20;
let pacman = { x: 1, y: 1, direction: { x: 0, y: 0 } };
let ghosts = [{ x: 18, y: 18 }];
let food = [];
let score = 0;

function setup() {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            if (Math.random() < 0.2) food.push({ x: i, y: j });
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPacman();
    drawGhosts();
    drawFood();
    checkCollision();
    requestAnimationFrame(draw);
}

function drawPacman() {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(pacman.x * cellSize + cellSize / 2, pacman.y * cellSize + cellSize / 2, cellSize / 2, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(pacman.x * cellSize + cellSize / 2, pacman.y * cellSize + cellSize / 2);
    ctx.fill();
}

function drawGhosts() {
    ctx.fillStyle = 'red';
    ghosts.forEach(ghost => {
        ctx.beginPath();
        ctx.arc(ghost.x * cellSize + cellSize / 2, ghost.y * cellSize + cellSize / 2, cellSize / 2, 0, Math.PI * 2);
        ctx.fill();
    });
}

function drawFood() {
    ctx.fillStyle = 'white';
    food.forEach(f => {
        ctx.beginPath();
        ctx.arc(f.x * cellSize + cellSize / 2, f.y * cellSize + cellSize / 2, 5, 0, Math.PI * 2);
        ctx.fill();
    });
}

function checkCollision() {
    food = food.filter(f => {
        if (pacman.x === f.x && pacman.y === f.y) {
            score++;
            return false;
        }
        return true;
    });
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            pacman.direction = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            pacman.direction = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            pacman.direction = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            pacman.direction = { x: 1, y: 0 };
            break;
    }
});

function update() {
    pacman.x += pacman.direction.x;
    pacman.y += pacman.direction.y;
    pacman.x = (pacman.x + 20) % 20;
    pacman.y = (pacman.y + 20) % 20;
}

setup();
music.play();
draw();

setInterval(update, 100);
