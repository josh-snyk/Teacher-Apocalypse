$(document).ready(function () {
	$("#btnStartGame").click(function () {
		// Hide Start Screen
		$("#startScreen").hide();

		// Open in fullscreen
		//openFullscreen();

		// Display Floor Five
		$("#FloorFive").css("display", "flex");

		// Set Health Bar
		displayNewHealth(100);

		// Display Game Interface
		$("#outerGameInterface").css("display", "flex");
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