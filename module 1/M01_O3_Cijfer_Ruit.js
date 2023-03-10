let hoeveel = parseInt(prompt("voer een getal in: "))
let mijn_zin = "";

for (let x = 1; x <= hoeveel;x++){
    for (let y = 1; y <= x;y++){
        if (y > 1){
            mijn_zin += '-'
        }
        mijn_zin += y + "";
    }
    mijn_zin += "<br>";
}
for (let x = hoeveel -1; x >= 1;x--){
    for (let y = 1; y <= x;y++){
        if (y > 1){
            mijn_zin += '-'
        }
        mijn_zin += y + "";    
    }
    mijn_zin += "<br>";
}

document.getElementById("mijn_zin").innerHTML = mijn_zin;