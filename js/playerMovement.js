// This file is for player movement


var upPressed, rightPressed, downPressed, leftPressed = false;
var playerSpeed = 50;

// check for arrow keys presses
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function tryPlayerUp() {
	if (document.getElementById("player").offsetTop > document.getElementById("FloorFive").offsetTop + (document.getElementById("player").offsetHeight / 2) && upPressed) {
		console.log("can go up");
		document.getElementById("player").style.top = document.getElementById("player").offsetTop - 1 + "px";
		setTimeout(tryPlayerUp, playerSpeed);
	}
}

function tryPlayerLeft() {
	if (document.getElementById("player").offsetLeft > document.getElementById("FloorFive").offsetLeft + (document.getElementById("player").offsetWidth / 2) && leftPressed) {
		console.log(document.getElementById("player").offsetLeft > document.getElementById("FloorFive").offsetWidth - document.getElementById("player").offsetWidth);
		console.log("can go left");
		document.getElementById("player").style.left = document.getElementById("player").offsetLeft - 1 + "px";
		setTimeout(tryPlayerLeft, playerSpeed);
	}
}

function tryPlayerDown() {
	if (document.getElementById("player").offsetTop < (document.getElementById("FloorFive").offsetHeight + document.getElementById("FloorFive").offsetTop) - (document.getElementById("player").offsetHeight / 2) - 1 && downPressed) {
		console.log("can go down");
		document.getElementById("player").style.top = document.getElementById("player").offsetTop + 1 + "px";
		setTimeout(tryPlayerDown, playerSpeed);
	}
}

function tryPlayerRight() {
	if (document.getElementById("player").offsetLeft < (document.getElementById("FloorFive").offsetWidth + document.getElementById("FloorFive").offsetLeft) - (document.getElementById("player").offsetWidth / 2) - 1 && rightPressed) {
		console.log("can go right");
		document.getElementById("player").style.left = document.getElementById("player").offsetLeft + 1 + "px";
		setTimeout(tryPlayerRight, playerSpeed);
	}
}

function keyDownHandler(e) {
	if (e.code == "ArrowRight") {
		rightPressed = true;
		tryPlayerRight();
	}
	if (e.code == 'ArrowLeft') {
		leftPressed = true;
		tryPlayerLeft();
	}
	if (e.code == 'ArrowUp') {
		upPressed = true;
		tryPlayerUp();
	}
	if (e.code == 'ArrowDown') {
		downPressed = true;
		tryPlayerDown();
	}
}

function keyUpHandler(e) {
	if (e.code == "ArrowRight") {
		rightPressed = false;
	}
	if (e.code == 'ArrowLeft') {
		leftPressed = false;
	}
	if (e.code == 'ArrowUp') {
		upPressed = false;
	}
	if (e.code == 'ArrowDown') {
		downPressed = false;
	}
}

