var image = document.getElementById("image");
let banden = 0
const tankMovements = [84, 168, 252, 336, 420, 504, 588, 672];
let posleft = 0;
let postop = 0
document.onkeydown = checkKey;

function moveLeft() {
    posleft -= 5;
    document.getElementById("image").style.left = posleft + `px`;
    console.log(document.getElementById("image").style.left)
}
function moveRight(){
    posleft += 5;
    document.getElementById("image").style.left = posleft + `px`;
    console.log(document.getElementById("image").style.left)
}
function moveUp(){
    postop += 5;
    document.getElementById("image").style.top = postop + `px`;
    console.log(document.getElementById("image").style.top)
}
function moveDown(){
    postop -= 5;
    document.getElementById("image").style.top = postop + `px`;
    console.log(document.getElementById("image").style.top)
}
function checkKey(e) {
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");
    } else if (e.keyCode == 38) {  // up arrow
        console.log("Up arrow");
        image.style.transform = "rotate(360deg)";
        moveDown()
        image.style.backgroundPosition = tankMovements[banden] + `px 0px`; // check goed de rupsband
        banden++
        if (banden >= 7){
            banden = 0
        }
    } else if (e.keyCode == 40) { // down arrow
        console.log("down arrow");
        image.style.transform = "rotate(180deg)";
        moveUp()
        image.style.backgroundPosition = tankMovements[banden] + `px 0px`; // check goed de rupsband
        banden++
        if (banden >= 7){
            banden = 0
        }
    } else if (e.keyCode == 37) { // left arrow
    	console.log("left arrow");
        image.style.transform = "rotate(270deg)";
        moveLeft()
        image.style.backgroundPosition = tankMovements[banden] + `px 0px`; // check goed de rupsband
        banden++
        if (banden >= 7){
            banden = 0
        }

    } else if (e.keyCode == 39) {   // right arrow
    	console.log("right arrow");
        image.style.transform = "rotate(90deg)";
        moveRight()
    	image.style.backgroundPosition = tankMovements[banden] + `px 0px`; // check goed de rupsband
        banden++
        if (banden >= 7){
            banden = 0
        }
        
    }
}


