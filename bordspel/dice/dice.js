function rollDice() {
    const dice = document.getElementById('dice');
    const faces = dice.getElementsByClassName('face');
    const randomFace = Math.floor(Math.random() * 6);
    dice.style.transform = 'rotateX(' + (Math.random() * 180) + 'deg) rotateY(' + (Math.random() * 180) + 'deg)';
    setTimeout(() => {
      for (let i = 0; i < faces.length; i++) {
        faces[i].style.display = 'none';
      }
      faces[randomFace].style.display = 'block';
    }, 1000);
}