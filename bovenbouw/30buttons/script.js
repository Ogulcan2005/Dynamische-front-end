let y = document.getElementById("container");
const colors = ["red", "blue", "yellow", "orange", "purple", "pink", "brown", "black"];
y.style.backgroundColor = "grey";
y.style.width = "300px";
y.style.height = "360px";
y.style.margin = "auto";
y.style.padding = "auto";
y.style.top = "auto";

for (var aantal = 0; aantal < 30; aantal++) {
    var button = document.createElement("button");
    button.style.backgroundColor = "green";
    button.style.margin = "5px";
    button.style.height = "50px";
    button.style.width = "50px";
    button.textContent = aantal + 1;

    button.clickCount = 0;

    button.onclick = function () {
        this.clickCount++;

        this.style.backgroundColor = colors[this.clickCount];
        if(this.clickCount >= colors.length){
            this.remove();
        }
    };

    y.appendChild(button);
}
