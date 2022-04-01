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

function checkCollision() {
	/*
	if ($(this).offsetLeft < player.offsetLeft + player.offsetWidth &&
		$(this).offsetLeft + $(this).offsetWidth > player.offsetLeft &&
		$(this).offsetTop < player.offsetTop + player.offsetHeight &&
		$(this).offsetHeight + $(this).offsetTop > player.offsetTop) {
		hasJustCollided = true;
		alert("works");
	}*/
	/*
	let hasJustCollided = false;
	for (let i = 0; i < this.staticDivs.length; i++) {
		const currentDiv = $(this).staticDivs[i];
		if ($(this).offsetLeft < player.offsetLeft + player.offsetWidth &&
		$(this).offsetLeft + $(this).offsetWidth > player.offsetLeft &&
		$(this).offsetTop < player.offsetTop + player.offsetHeight &&
		$(this).offsetHeight + $(this).offsetTop > player.offsetTop) {
			hasJustCollided = true;
			if (!player.classList.contains('collision-state')) {
				player.classList.add('collision-state');
			}
		} else if (player.ref.classList.contains('collision-state') && !hasJustCollided) {
			player.ref.classList.remove('collision-state');
		}
	}*/
}

setInterval(function () {
	console.group("Check");
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

	//checkCollision();

	var activeZombies = document.getElementsByClassName("active zombie");
	for (let zombie in activeZombies) {
		console.log("Zombie left" + zombie.offsetLeft);
		console.log(zombie.offsetLeft < player.offsetLeft + player.offsetWidth && zombie.offsetLeft + zombie.offsetWidth > player.offsetLeft && zombie.offsetTop < player.offsetTop + player.offsetHeight && zombie.offsetHeight + zombie.offsetTop > player.offsetTop);
	}

	$("zombie.active").each(function () {
		
		console.debug("checking for collision");
		let hasJustCollided = false;
		/*var playerRect = player.getBoundingClientRect();
		var zombieRect = this.getBoundingClientRect();

		console.log("Left: " + zombieRect.left.toFixed() + ", Top: " + zombieRect.top.toFixed() + ", Width: " + zombieRect.width + ", Height: " + zombieRect.height);

		isPointInsideAABB(zombieRect, playerRect);
		*/


		/*if (isPointInsideAABB(zombieRect, playerRect)) {
			console.log("touching");
		}*/
		var p = this;
		/*
		var offset = p.offset();
		console.debug("left: " + offset.left + ", top: " + offset.top + ", width: " + offset.width + ", height: " + offset.height);
		var playerOffset = $('#player').offset();
		console.debug("left: " + playerOffset.left + ", top: " + playerOffset.top);
		*/
		console.debug(this);
		/*
		if (offset.left < playerOffset.left + playerOffset.width && offset.left + offset.width > playerOffset.left && offset.top < playerOffset.top + playerOffset.height && offset.height + offset.top > playerOffset.top) {
			hasJustCollided = true;
			console.debug("collision");
			if (!$("player").hasClass('collision-state')) {
				$("player").addClass('collision-state');
				console.debug("Collision detected");
			}
		} else if ($("#player").hasClass('collision-state') && !hasJustCollided) {
			$("player").removeClass('collision-state');
		}
		*/
	})
	
	console.groupEnd();
}, 50)


