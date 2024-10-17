var namen = ["Ogulcan", "Dinho", "IpneMeli", "Yassine", "Khalid"];
let cotainer = document.getElementById("namenContainer");

for(let i = 0; i<namen.length; i++){
    console.log(namen[i]);
    var button = document.createElement("button");
    button.innerText = namen[i];
    button.addEventListener("click", buttonClicked)




    cotainer.appendChild(button);
}

function buttonClicked(e){
    alert(e.target.innerText + "button clicked");
    e.target.remove();
}