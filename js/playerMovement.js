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
	console.group("Check");

	var canMoveLeft = canMoveUp = canMoveDown = canMoveRight = true;

	$(".zombie.active").each(function () {
		console.log("ID" + this.id);
		console.log(this.offsetLeft < player.offsetLeft + player.offsetWidth && this.offsetLeft + this.offsetWidth > player.offsetLeft && this.offsetTop < player.offsetTop + player.offsetHeight && this.offsetHeight + this.offsetTop > player.offsetTop);
		if (this.offsetLeft < player.offsetLeft + player.offsetWidth && this.offsetLeft + this.offsetWidth > player.offsetLeft && this.offsetTop < player.offsetTop + player.offsetHeight && this.offsetHeight + this.offsetTop > player.offsetTop) {
			console.log("Touching");
        }
	});

	if (leftPressed && gameActive && canMoveLeft) {
		player.style.left = player.offsetLeft - playerSpeed + "px"
	}
	if (rightPressed && gameActive && canMoveRight) {
		player.style.left = player.offsetLeft + playerSpeed + "px"
	}
	if (upPressed && gameActive && canMoveUp) {
		player.style.top = player.offsetTop - playerSpeed + "px"
	}
	if (downPressed && gameActive && canMoveDown) {
		player.style.top = player.offsetTop + playerSpeed + "px"
	}

	console.groupEnd();
}, 50)


