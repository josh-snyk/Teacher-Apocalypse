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

setInterval(function () {
		if (leftPressed && gameActive) {
			player.style.left = player.offsetLeft - playerSpeed + "px"
		}
		if (rightPressed && gameActive) {
			player.style.left = player.offsetLeft + playerSpeed + "px"
		}
		if (upPressed && gameActive) {
			player.style.top = player.offsetTop - playerSpeed + "px"
		}
		if (downPressed && gameActive) {
			player.style.top = player.offsetTop + playerSpeed + "px"
	}

	$(".zombie").each(function () {
		const element = document.getElementById("myDiv");
		const rect = element.getBoundingClientRect();

		document.getElementById("demo").innerHTML =
			"Left: " + rect.left.toFixed() + ", Top: " + rect.top.toFixed() + ", Width: " + rect.width + ", Height: " + rect.height;

		if (this.getBoundingClientRect()) { }
	})
	
}, 50)



