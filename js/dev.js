// JavaScript source code
$("#btnNextLevel").click(function () {
    var nextLevel = floor - 1;
    loadLevel(nextLevel);
})

$("#btnResume").click(function () {
    $("#pauseMenu").css("display", "none");
    $("#outerGameInterface").css("filter", "unset");
    gameActive = true;
})