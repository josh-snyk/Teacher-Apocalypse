// JavaScript source code
$("zombie").each(function () {
    var zombieHead = document.createElement("div");
    zombieHead.classList.add("head");
    this.appendChild(zombieHead);
    var zombieNeck = document.createElement("div");
    zombieNeck.classList.add("neck");
    this.appendChild(zombieNeck);
    var zombieNeck = document.createElement("div");
    zombieNeck.classList.add("neck");
    this.appendChild(zombieNeck);
    var zombieArms = document.createElement("div");
    zombieArms.classList.add("arms");
    this.appendChild(zombieArms);
    var zombieArmL = document.createElement("div");
    zombieArmL.classList.add("left");
    zombieArms.appendChild(zombieArmL);
})