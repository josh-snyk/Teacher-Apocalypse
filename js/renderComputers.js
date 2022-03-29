var roomNo = 0;
var tableNo = 0;
var computerNo = 0;

function createComputer(ComputerID) {
	var computerMouse = document.createElement("div");
	computerMouse.setAttribute("id", ComputerID + "Mouse");
	computerMouse.setAttribute("class", "computerMouse");
	document.getElementById(ComputerID).appendChild(computerMouse);
	var computerKeyboard = document.createElement("div");
	computerKeyboard.setAttribute("id", ComputerID + "Keyboard");
	computerKeyboard.setAttribute("class", "computerKeyboard");
	document.getElementById(ComputerID).appendChild(computerKeyboard);
	var computerMonitor = document.createElement("div");
	computerMonitor.setAttribute("id", ComputerID + "Monitor");
	computerMonitor.setAttribute("class", "computerMonitor");
	document.getElementById(ComputerID).appendChild(computerMonitor);
}

$("#FloorFour room").each(function () {
	console.log("New Room");
	roomNo = roomNo + 1;
	var RoomID = "RoomF4R" + roomNo;
	console.log(RoomID);
	$(this).attr("id", RoomID);
	var tableNo = 0;
	$("#" + RoomID + " .table").each(function () {
		console.log("New Table");
		tableNo++;
		var TableID = "TableR" + roomNo + "T" + tableNo;
		$(this).attr("id", TableID);
		var computer = 0;

		$("#" + TableID + " computer").each(function () {
			computer++;
			var ComputerID = TableID + "C" + computer;
			$(this).attr("id", ComputerID);
			$(this).addClass("computer");

			var computerImg = document.createElement("img");
			computerImg.setAttribute("src", "media/pc.png");
			computerImg.setAttribute("class", "computerImg");
			computerImg.setAttribute("id", ComputerID + "Img");
			computerImg.setAttribute("alt", "Computer");
			computerImg.style.width = "3vh";
			document.getElementById(ComputerID).appendChild(computerImg);

			//createComputer(ComputerID);

		})
	})
})
console.log(roomNo);
console.log(tableNo);
