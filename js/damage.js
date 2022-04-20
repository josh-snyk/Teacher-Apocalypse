var playerHealth = 100;

function displayNewHealth(health) {
	$("#playerHealthNumber").html(health + "%");
	$("#playerHealthBarFill").css("width", health + "%");
}

function deductPlayerHealth(points) {
	playerHealth -= points;
	displayNewHealth(playerHealth);
}