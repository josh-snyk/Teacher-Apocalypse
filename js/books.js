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
	var random = Math.floor(Math.random() * 122);
	//console.log(random);
	if (random < 2) {
		// add burgandy class
		$(this).addClass("burgandy");
	} else if (random < 28) {
		// add blue class
		$(this).addClass("blue");
	} else if (random < 41) {
		// add green class
		$(this).addClass("green");
	} else if (random < 47) {
		// add yellow class
		$(this).addClass("yellow");
	} else if (random < 56) {
		// add red class
		$(this).addClass("red");
	} else if (random < 59) {
		// add purple class
		$(this).addClass("purple");
	} else if (random < 63) {
		// add orange class
		$(this).addClass("orange");
	} else if (random < 68) {
		// add pink class
		$(this).addClass("pink");
	} else if (random < 75) {
		// add white class
		$(this).addClass("white");
	} else if (random < 98) {
		// add black class
		$(this).addClass("black");
	} else if (random < 110) {
		// add brown class
		$(this).addClass("brown");
	} else if (random < 122) {
		// add grey class
		$(this).addClass("grey");
	}
	random = Math.floor(Math.random() * 2);
	//console.log("margin-bottom " + random);
	$(this).css("margin-bottom", random);
	//console.groupEnd();
	BookID++;
});