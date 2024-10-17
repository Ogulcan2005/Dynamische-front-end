let namenLijst = [];

for(let x = 0; x<3; x++){
  let namen = prompt("Please enter your name" );
  namenLijst.push(namen);
  
}
document.getElementById("namen-array").innerText = namenLijst;
document.getElementById("omgekeerd-namen-array").innerText = namenLijst.reverse();