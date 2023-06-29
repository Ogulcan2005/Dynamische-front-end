// <!DOCTYPE html>
// <html>
// <head>
//   <style>
//     .piece {
//       width: 50px;
//       height: 50px;
//       background-color: red;
//       position: absolute;
//     }
//   </style>
// </head>
// <body>
//   <div class="piece"></div>
//   <div class="piece"></div>
//   <div class="piece"></div>
//   <div class="piece"></div>
//   <div class="piece"></div>
//   <div class="piece"></div>
//   <div class="piece"></div>
//   <div class="piece"></div>

//   <script>
//     // Functie om pion te verplaatsen
//     function movePiece(event) {
//       // Controleren of er al een pion is geselecteerd om te bewegen
//       var activePiece = document.querySelector(".active");
//       if (activePiece) {
//         activePiece.style.left = event.clientX - 25 + "px";
//         activePiece.style.top = event.clientY - 25 + "px";
//         activePiece.classList.remove("active");
//       } else {
//         event.target.classList.add("active");
//       }
//     }

//     // Pionnen selecteren en klikgebeurtenis toevoegen
//     var pieces = document.getElementsByClassName("piece");
//     for (var i = 0; i < pieces.length; i++) {
//       pieces[i].addEventListener("click", movePiece);
//     }
//   </script>
// </body>
// </html>

// DEEL 1//
// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
// }

// function click(e) {
//   var x = Math.floor(e.clientX / 40);
//   var y = Math.floor(e.clientY / 40);

//   var bal = document.getElementById('bal');
//   var balPositie = bal.getBoundingClientRect();
//   var balX = Math.floor(balPositie.left / 40);
//   var balY = Math.floor(balPositie.top / 40);

//   // Genereer een willekeurig getal tussen 1 en 6 voor de dobbelsteen
//   var dobbelsteen = Math.floor(Math.random() * 6) + 1;
//   console.log("Je hebt " + dobbelsteen + " gegooid!");

//   // Bepaal het maximaal aantal stappen op basis van het dobbelsteengetal
//   var maxStappen = Math.max(Math.abs(x - balX), Math.abs(y - balY), dobbelsteen);

//   // Bereken de nieuwe positie van de bal binnen de maximale grenzen
//   var nieuweX = Math.min(Math.max(x, balX - maxStappen), balX + maxStappen);
//   var nieuweY = Math.min(Math.max(y, balY - maxStappen), balY + maxStappen);

//   bal.style.left = (nieuweX * 40).toString() + 'px';
//   bal.style.top = (nieuweY * 40).toString() + 'px';
// }
// function movePiece(event) {
//   // Controleren of er al een pion is geselecteerd om te bewegen
//   var activePiece = document.querySelector(".active");
//   if (activePiece) {
//     activePiece.style.left = event.clientX - 25 + "px";
//     activePiece.style.top = event.clientY - 25 + "px";
//     activePiece.classList.remove("active");
//   } else {
//     event.target.classList.add("active");
//   }
// }

//VERSIE 1//
// var green_W = document.getElementById('gw')
// var blue_W = document.getElementById('bw')
// var red_W = document.getElementById('rw')
// var yellow_W = document.getElementById('yw')

// const pieces_kind = {
//   green_wizzard: green_W,
//   red_wizzard: red_W,
//   blue_wizzard: blue_W,
//   yellow_wizzard: yellow_W
// };

// var team_red = [{wizzard: pieces_kind.red_wizzard, x : 0, y : 0}]
// var team_blue = [{wizzard: pieces_kind.blue_wizzard, x : 0, y : 15}]
// var team_green = [{wizzard: pieces_kind.green_wizzard, x : 15, y : 0}]
// var team_yellow = [{wizzard: pieces_kind.yellow_wizzard, x : 15, y : 15}]

// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
// }

// function click(e){
//   var x = Math.floor(e.clientX / 40);
//   var y = Math.floor(e.clientY / 40);
//   bal.style.left = (x * 40).toString() + 'px';
//   bal.style.top = (y * 40).toString() + 'px';
// }
// // Genereer een willekeurig getal tussen 1 en 6
// var dobbelsteen = Math.floor(Math.random() * 6) + 1;

// //Toon het gegenereerde getal
// console.log(dobbelsteen);

// schaakbord.onclick = click;
// console.dir(schaakbord);
