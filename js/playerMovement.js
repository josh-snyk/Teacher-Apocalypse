// This file is for player movement


var upPress, rightPressed, downPressed, leftPressed = false;

// check for arrow keys presses
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.code == "ArrowRight") {
        rightPressed = true;
    } else if (e.code == 'ArrowLeft') {
        leftPressed = true;
    } else if (e.code == 'ArrowUp') {
        upPressed = true;
    } else if (e.code == 'ArrowDown') {
        downPressed = true;
    }
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

