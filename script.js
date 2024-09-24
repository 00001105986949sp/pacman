const pacman = document.getElementById('pacman');
const ghost = document.getElementById('ghost');
const food = document.getElementById('food');
let pacmanPosition = { x: 0, y: 0 };

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            pacmanPosition.y = Math.max(0, pacmanPosition.y - 10);
            break;
        case 'ArrowDown':
            pacmanPosition.y = Math.min(360, pacmanPosition.y + 10);
            break;
        case 'ArrowLeft':
            pacmanPosition.x = Math.max(0, pacmanPosition.x - 10);
            break;
        case 'ArrowRight':
            pacmanPosition.x = Math.min(360, pacmanPosition.x + 10);
            break;
    }
    updatePacmanPosition();
});

function updatePacmanPosition() {
    pacman.style.left = `${pacmanPosition.x}px`;
    pacman.style.bottom = `${pacmanPosition.y}px`;
}
