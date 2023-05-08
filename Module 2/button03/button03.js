const buttons = document.querySelectorAll("button");
const aantal_kliks = Array.from(buttons, () => 0);
const colors = Array('red', 'purple', 'blue', 'black', 'brown', 'yellow', 'orange')
console.log(aantal_kliks)
for (let number_button = 0; number_button < buttons.length; number_button++) {
    buttons[number_button].addEventListener("click", function () {
        if (aantal_kliks[number_button] < colors.length){
            this.style.backgroundColor = colors[aantal_kliks[number_button]];
        } else{
            this.style.display = "none";
        }
        aantal_kliks[number_button]++;
    });
}

console.dir(buttons[0])





