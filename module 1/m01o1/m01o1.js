let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";

alert(uitleg);
let gewenste_aantal_autos = prompt("Hoeveel autos wilt u kwijt in de parkeergarage?");
let basis = 80
let minsom = gewenste_aantal_autos - basis
if (gewenste_aantal_autos > basis){
    console.log('u heeft', minsom / 120, 'verdiepingen nodig');

}
else{
    console.log('u hebt geen verdiepingen nodig')
}
let antwoord = "hallo hoeveel verdiepingen wilt u";
document.getElementById("antwoord").innerText = antwoord;

console.log("Om het gewenste aantal autos kwijt te kunnen heb ik x verdiepingen nodig.")
