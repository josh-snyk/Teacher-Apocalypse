// Tempory functions for developers which will be removed for production environment
$("#btnNextLevel").click(function () {
    var nextLevel = floor - 1;
    loadLevel(nextLevel);
});

$("#btnPreviousLevel").click(function () {
    var prevLevel = floor + 1;
    loadLevel(prevLevel);
});