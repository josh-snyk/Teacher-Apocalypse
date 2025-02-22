// Player movement
var upPressed = false;
var rightPressed = false;
var downPressed = false;
var leftPressed = false;
var spacePressed = false;
var player = document.getElementById("player");

var score = 0;
var totalZombies = 2; // Number of zombies on the level
var playerSpeed = 6.5;

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
	if (gameActive == true) {
		//console.group("Check");

		var canMoveLeft = true;
		var canMoveUp = true;
		var canMoveDown = true;
		var canMoveRight = true;

		$(".zombie.active").each(function () {
			//console.log("ID: " + this.id);
			//console.log(this.offsetLeft < player.offsetLeft + player.offsetWidth && this.offsetLeft + this.offsetWidth > player.offsetLeft && this.offsetTop < player.offsetTop + player.offsetHeight && this.offsetHeight + this.offsetTop > player.offsetTop);
			if (this.offsetLeft < player.offsetLeft + player.offsetWidth && this.offsetLeft + this.offsetWidth > player.offsetLeft && this.offsetTop < player.offsetTop + player.offsetHeight && this.offsetHeight + this.offsetTop > player.offsetTop) {
				//console.log("Touching");
			}
		});

		var FloorName = $(".level-map.active").attr("id");

		try {
			var map = document.getElementById(FloorName);
			// Too High
			if (map.offsetTop > player.offsetTop - player.offsetHeight / 2) {
				document.getElementById("player").style.top = map.offsetTop + player.offsetHeight / 2 + "px";
				canMoveUp = false;
			}
			if (map.offsetTop + 1 == player.offsetTop - player.offsetHeight / 2) {
				canMoveUp = false;
			}

			// Too Low
			if (map.offsetTop + map.offsetHeight < player.offsetTop + player.offsetHeight / 2) {
				document.getElementById("player").style.top = map.offsetTop - player.offsetHeight / 2 + map.offsetHeight + "px";
				canMoveDown = false;
			}
			if (map.offsetTop + map.offsetHeight + 1 == player.offsetTop + player.offsetHeight / 2) {
				canMoveDown = false;
			}

			// Too Far Left
			if (map.offsetLeft > player.offsetLeft - player.offsetWidth / 2) {
				document.getElementById("player").style.left = map.offsetLeft + player.offsetWidth / 2 + "px";
				canMoveLeft = false;
			}
			if (map.offsetLeft + 1 == player.offsetLeft - player.offsetWidth / 2) {
				canMoveLeft = false;
			}

			// Too Far Right
			if (map.offsetLeft + map.offsetWidth < player.offsetLeft + player.offsetWidth / 2) {
				document.getElementById("player").style.left = map.offsetLeft - player.offsetWidth / 2 + map.offsetWidth + "px";
				canMoveRight = false;
			}
			if (map.offsetLeft + map.offsetWidth - 1 == player.offsetLeft + player.offsetWidth / 2) {
				canMoveRight = false;
			}
		} catch (err) {
			console.error(err.message);
		}

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
		//console.groupEnd();
	}
}, 10)

