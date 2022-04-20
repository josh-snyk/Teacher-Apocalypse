$(document).ready(function () {
	gameActive = false;
	$("#btnStartGame").click(function () {
		// Hide Start Screen
		$("#startScreen").hide();

		// Open in fullscreen
		//openFullscreen();

		// Display Floor Five
		$("#FloorFive").addClass("active");
		//$("#FloorFive").css("display", "flex");

		// Set Health Bar
		displayNewHealth(100);

		// Display Game Interface
		$("#outerGameInterface").css("display", "flex");

		gameActive = true;
		var floor = 5;
		var FloorName = "FloorFive";
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