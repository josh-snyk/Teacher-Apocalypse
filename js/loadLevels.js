function loadLevel(Floor) {
    var floor = Floor;
    $(".level-map").removeClass(" active");
    $(".level-map zombie").removeClass(" active");
    
    if (Floor == 5) {
        var FloorName = "FloorFive";
        document.getElementById(FloorName).classList.add("active")
    }

    if (Floor == 4) {
        var FloorName = "FloorFour";
        document.getElementById(FloorName).classList.add(" active")
    }

    if (Floor == 3) {
        var FloorName = "FloorThree";
    }

    $(".level-map.active zombie").addClass(" active");
}