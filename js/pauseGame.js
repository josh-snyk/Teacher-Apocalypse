// JavaScript source code

$("#btnPause").click(function () {
    $("#outerGameInterface").css("filter", "blur(4px)");
    $("#pauseMenu").css("display", "flex");
    gameActive = false;
    var pauseMenuWidth = document.getElementById("pauseMenu").offsetWidth;
    $("#pauseMenu").css("left", "calc(50% - (" + pauseMenuWidth + "px / 2))");
    var pauseMenuHeight = document.getElementById("pauseMenu").offsetHeight;
    $("#pauseMenu").css("top", "calc(50% - (" + pauseMenuHeight + "px / 2))");
})

$("#btnResume").click(function () {
    $("#pauseMenu").css("display", "none");
    $("#outerGameInterface").css("filter", "unset");
    gameActive = true;
})