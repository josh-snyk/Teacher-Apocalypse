// JavaScript source code
var upPressed, rightPressed, downPressed, leftPressed, spacePressed = false;
var player = document.getElementById("player");

var zombieSpeed = 5;
var score = 0;
var totalZombies = 2; // Number of zombies on the level
var playerSpeed = 6;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if (e.code == 'ArrowRight' || e.code == 'KeyD') {
		rightPressed = true;
	}
	if (e.code == 'ArrowLeft' || e.code == 'KeyA') {
		leftPressed = true;
	}
	if (e.code == 'ArrowUp' || e.code == 'KeyW') {
		upPressed = true;
	}
	if (e.code == 'ArrowDown' || e.code == 'KeyS') {
		downPressed = true;
	}
}

function keyUpHandler(e) {
	if (e.code == 'ArrowRight' || e.code == 'KeyD') {
		rightPressed = false;
	}
	if (e.code == 'ArrowLeft' || e.code == 'KeyA') {
		leftPressed = false;
	}
	if (e.code == 'ArrowUp' || e.code == 'KeyW') {
		upPressed = false;
	}
	if (e.code == 'ArrowDown' || e.code == 'KeyS') {
		downPressed = false;
	}
}

function isPointInsideAABB(point, box) {
	return (point.left >= box.offsetLeft && point.left <= box.offsetLeft + box.width) &&
		(point.y >= box.minY && point.y <= box.maxY);
}

setInterval(function () {

	if (leftPressed) {
		player.style.left = player.offsetLeft - playerSpeed + "px"
	}
	if (rightPressed) {
		player.style.left = player.offsetLeft + playerSpeed + "px"
	}
	if (upPressed) {
		player.style.top = player.offsetTop - playerSpeed + "px"
	}
	if (downPressed) {
		player.style.top = player.offsetTop + playerSpeed + "px"
	}

	$("zombie.active").each(function () {
		var playerRect = player.getBoundingClientRect();
		var zombieRect = this.getBoundingClientRect();

		console.log("Left: " + zombieRect.left.toFixed() + ", Top: " + zombieRect.top.toFixed() + ", Width: " + zombieRect.width + ", Height: " + zombieRect.height);

		if (isPointInsideAABB(zombieRect, playerRect)) {
			console.log("touching");
		}
	})
	
}, 50)


