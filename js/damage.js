function displayNewHealth(health) {
	$("#playerHealthNumber").html(health + "%");
	$("#playerHealthBarFill").css("width", health + "%");
}