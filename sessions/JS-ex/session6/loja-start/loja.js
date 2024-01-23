
let rrafshi = document.createElement("canvas");
rrafshi.width = 512;
rrafshi.height = 480;

document.body.appendChild(rrafshi);

let ctx = rrafshi.getContext("2d");
let bgImage = new Image();

bgImage.onload = function () {
    ctx.drawImage(bgImage, 0, 0);
}
bgImage.src = "images/background.png";

var maca = {};
var macaImage = new Image();
macaImage.src = "images/cat.png"
macaImage.onload = function () {
    ctx.drawImage(macaImage, 0, 0);
}

var miu = {};
var miuImage = new Image();
miuImage.src = "images/mouse.png"
miuImage.onload = function () {
    ctx.drawImage(miuImage, 100, 0);
}

var keyDown = {};

document.addEventListener("keydown",
    function (e) {
        "You pressed " + [e.key = true]
    });
document.addEventListener("keyup", function (e) { delete e.key });

if ("ArrowRight" =)