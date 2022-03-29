var roomNo = 0;
var tableNo = 0;
var computerNo = 0;
$("#FloorFour room").each(function() {
  console.log("New Room");
  roomNo = roomNo + 1;
  var RoomID = "RoomF4R" + roomNo;
  console.log(RoomID);
  $(this).attr("id", RoomID);
  var tableNo = 0;
  $("#" + RoomID + " table").each(function() {
    console.log("New Table");
    tableNo++;
    var TableID = "TableR" + roomNo + "T" + tableNo;
    $(this).attr("id", TableID);
    var computer = 0;

    $("#" + TableID + " computer").each(function() {
      computer++;
      var ComputerID = TableID + "C" + computer;
      $(this).attr("id", ComputerID);
      $(this).addClass("computer");
    })
  })
})
console.log(roomNo);
console.log(tableNo);
