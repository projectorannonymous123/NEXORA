const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// PLAYER
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 30,
    color: "cyan",
    speed: 5
};

// MOVEMENT
let keys = {};
window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

// GAME LOOP
function update() {
    if (keys["w"]) player.y -= player.speed;
    if (keys["s"]) player.y += player.speed;
    if (keys["a"]) player.x -= player.speed;
    if (keys["d"]) player.x += player.speed;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);

    requestAnimationFrame(update);
}

update();
