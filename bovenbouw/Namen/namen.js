let namenLijst = [];

let aantal_namen = parseInt(prompt("Hoeveel namen wil je? (minimaal 3)", ""));
if (aantal_namen < 3) {
  alert("Moet minimaal 3 namen zijn.");
  let naam = prompt("Voer je naam in:");
} else {
  for (let x = 0; x < aantal_namen; x++) {
    let naam = prompt("Voer je naam in:");
    namenLijst.push(naam);
  }
  
  document.getElementById("namen-array").innerText = namenLijst.join(", ");
  document.getElementById("omgekeerd-namen-array").innerText = namenLijst.slice().reverse().join(", ");
}
