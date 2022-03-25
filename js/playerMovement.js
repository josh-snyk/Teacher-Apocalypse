// This file is for player movement


var upPress, rightPressed, downPressed, leftPressed = false;

// check for arrow keys presses
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function tryPlayerRight() {
	if (document.getElementById("player").offsetLeft < document.getElementById("FloorFive").width - document.getElementById("player").width) {
		console.log("can go right");
	}
	if (rightPressed) {
		document.getElementById("player").style.left = document.getElementById("player").offsetLeft + 10 + "px";
		tryPlayerRight();
	}
}

function keyDownHandler(e) {
	if (e.code == "ArrowRight") {
		rightPressed = true;
	}
	//while (e.code == 'ArrowLeft') {
	//leftPressed = true;
	//}
	//while (e.code == 'ArrowUp') {
	//upPressed = true;
	//}
	//while (e.code == 'ArrowDown') {
	//downPressed = true;
	//}
}
function keyUpHandler(e) {
	if (e.code == "ArrowRight") {
		rightPressed = false;
	}
	else if (e.code == 'ArrowLeft') {
		leftPressed = false;
	} else if (e.code == 'ArrowUp') {
		upPressed = false;
	} else if (e.code == 'ArrowDown') {
		downPressed = false;
	}
}

