// let buttonlist = document.getElementById("container");
// let x = document.getElementsByTagName("BODY")[0];

// x.style.backgroundColor = "grey";

// buttonlist.style.backgroundColor = "white";
// buttonlist.style.width = "200px";
// buttonlist.style.padding = "20px";
// buttonlist.style.textAlign = "center";

// let button1 = document.createElement("button");
// button1.innerText = "Groen";
// button1.style.backgroundColor = "green";
// button1.style.color = "white";
// button1.style.padding = "10px";
// button1.style.margin = "5px";
// button1.style.border = "none";
// button1.style.cursor = "pointer";

// let button2 = document.createElement("button");
// button2.innerText = "Rood";
// button2.style.backgroundColor = "red";
// button2.style.color = "white";
// button2.style.padding = "10px";
// button2.style.margin = "5px";
// button2.style.border = "none";
// button2.style.cursor = "pointer";

// let button3 = document.createElement("button");
// button3.innerText = "Blauw";
// button3.style.backgroundColor = "blue";
// button3.style.color = "white";
// button3.style.padding = "10px";
// button3.style.margin = "5px";
// button3.style.border = "none";
// button3.style.cursor = "pointer";


// buttonlist.append(button1, button2, button3);

// button1.addEventListener("click", () => {
//     x.style.backgroundColor = "green";
// });
// button2.addEventListener("click", () => {
//     x.style.backgroundColor = "red";
// });
// button3.addEventListener("click", () => {
//     x.style.backgroundColor = "blue";
// });

let buttonlist = document.getElementById("container");
let x = document.getElementsByTagName("BODY")[0];

x.style.backgroundColor = "grey";
x.style.display = "flex";
x.style.justifyContent = "center";
x.style.alignItems = "center";
x.style.height = "100vh";
x.style.margin = "0";

buttonlist.style.backgroundColor = "white";
buttonlist.style.width = "200px";
buttonlist.style.padding = "20px";
buttonlist.style.textAlign = "center";
buttonlist.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

let button1 = document.createElement("button");
button1.innerText = "Groen";
button1.style.backgroundColor = "green";
button1.style.color = "white";
button1.style.padding = "10px";
button1.style.margin = "5px";
button1.style.border = "none";
button1.style.cursor = "pointer";

let button2 = document.createElement("button");
button2.innerText = "Rood";
button2.style.backgroundColor = "red";
button2.style.color = "white";
button2.style.padding = "10px";
button2.style.margin = "5px";
button2.style.border = "none";
button2.style.cursor = "pointer";

let button3 = document.createElement("button");
button3.innerText = "Blauw";
button3.style.backgroundColor = "blue";
button3.style.color = "white";
button3.style.padding = "10px";
button3.style.margin = "5px";
button3.style.border = "none";
button3.style.cursor = "pointer";

buttonlist.append(button1, button2, button3);

button1.addEventListener("click", () => {
    x.style.backgroundColor = "green";
});
button2.addEventListener("click", () => {
    x.style.backgroundColor = "red";
});
button3.addEventListener("click", () => {
    x.style.backgroundColor = "blue";
});
