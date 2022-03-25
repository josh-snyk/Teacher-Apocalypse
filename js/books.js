var BookID = 1;
$("#FloorFive .shelf .book").each(function () {
	//console.group("Floor Five: Book " + BookID);
	$(this).attr("id", "book" + BookID);
	// burgandy   = 2     2
	// blue       = 26    28
	// green      = 13    41
	// yellow     = 6     47
	// red        = 9     56
	// purple     = 3     59
	// orange     = 4     63
	// pink       = 5     68
	// white      = 7     75
	// black      = 23    98
	// brown      = 12    110
	// grey       = 12    122
	// choose random number
	var randomColour = Math.floor(Math.random() * 122);
	//console.log(random);
	if (randomColour < 2) {
		// add burgandy class
		$(this).addClass("burgandy");
	} else if (randomColour < 28) {
		// add blue class
		$(this).addClass("blue");
	} else if (randomColour < 41) {
		// add green class
		$(this).addClass("green");
	} else if (randomColour < 47) {
		// add yellow class
		$(this).addClass("yellow");
	} else if (randomColour < 56) {
		// add red class
		$(this).addClass("red");
	} else if (randomColour < 59) {
		// add purple class
		$(this).addClass("purple");
	} else if (randomColour < 63) {
		// add orange class
		$(this).addClass("orange");
	} else if (randomColour < 68) {
		// add pink class
		$(this).addClass("pink");
	} else if (randomColour < 75) {
		// add white class
		$(this).addClass("white");
	} else if (randomColour < 98) {
		// add black class
		$(this).addClass("black");
	} else if (randomColour < 110) {
		// add brown class
		$(this).addClass("brown");
	} else if (randomColour < 122) {
		// add grey class
		$(this).addClass("grey");
	}
	// Spacing
	var random = Math.floor(Math.random() * 2);
	//console.log("margin-bottom " + random);
	$(this).css("margin-bottom", random);

	// Thickness
	random = Math.floor(Math.random() * 5);
	var thickness = random + 5;
	$(this).css("height", thickness);
	//console.groupEnd();
	BookID++;
});