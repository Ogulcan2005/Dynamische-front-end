const buttons = document.querySelectorAll('.button');
let activeButton = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button === activeButton) {
      return;
    }

    if (activeButton) {
      activeButton.textContent = '0';
      activeButton.classList.remove('red', 'disabled');
    }

    button.textContent = '1';
    button.classList.add('red', 'disabled');
    activeButton = button;
  });
});