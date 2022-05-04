var playerHealth = 100;

function displayNewHealth(health) {
	$("#playerHealthNumber").html(health + "%");
	$("#playerHealthBarFill").css("width", health + "%");
}

function deductPlayerHealth(points) {
	if (playerHealth > 0) {
		playerHealth -= points;
		displayNewHealth(playerHealth);
	}
}