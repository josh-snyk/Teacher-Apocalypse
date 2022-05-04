$(document).ready(function () {
	gameActive = false;
	$("#btnStartGame").click(function () {
		// Hide Start Screen
		$("#startScreen").hide();

		// Open in fullscreen
		//openFullscreen();

		// Set Health Bar
		displayNewHealth(100);

		// Display Game Interface
		$("#outerGameInterface").css("display", "flex");

		gameActive = true;
		floor = 5;
		var FloorName = "FloorFive";
		loadLevel(5);
	});

	$("#btnQuitWindow").click(function () {
		$("#quitModal").show();
	});
	$("#btnQuitNo").click(function () {
		$("#quitModal").hide();
		//$("#startScreen").show();
	});
	$("#btnQuitYes").click(function () {
		close();
	});
});