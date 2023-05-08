const buttons = document.querySelectorAll("button");
const aantal_kliks = Array.from(buttons, () => 0);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        aantal_kliks[i]++;
        switch (aantal_kliks[i]) {
            case 1:
                this.style.backgroundColor = "red";
                break;
            case 2:
                this.style.backgroundColor = "purple";
                break;
            case 3:
                this.style.backgroundColor = "blue";
                break;
            case 4:
                this.style.backgroundColor = "black";
                break;
            case 5:
                this.style.display = "none";
                break;
        }
    });
}







