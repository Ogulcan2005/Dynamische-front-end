var red = document.getElementById('rw')
var blue = document.getElementById('bw')
var green = document.getElementById('gw')
var yellow = document.getElementById('yw')
var turn_counter = 0
var teams = [red, blue, yellow, green]
var turn_list = ['red', 'blue', 'yellow', 'green']
var getal = 0;

function activate(element){
  element.classList.add("active");
  console.dir(element);
}

function clicked_knight(e){
  alert(this.id);
  activate(this);
}

function clicked_wizzard(e){
  alert(this.id);
}

function Mag_plaats(e){
  var xnew = Math.floor(e.clientX);
  var ynew = Math.floor(e.clientY);
  var xhuidig = teams[turn_counter].x;
  var yhuidig = teams[turn_counter].y;
  console.log(xhuidig);
  console.log(yhuidig);
  var xpositie = xhuidig + (getal * 40) + 40;
  var ypositie = yhuidig + (getal * 40) + 40;
  
  if(xnew <= xpositie && ynew <= ypositie){
    console.log("true");
    var x = Math.floor(e.clientX / 40);
    var y = Math.floor(e.clientY / 40);
    teams[turn_counter].style.left = (x * 40).toString() + 'px';
    teams[turn_counter].style.top = (y * 40).toString() + 'px';
  }else{
    alert('geen geldige actie');
    teams[turn_counter].style.left = xhuidig;
    teams[turn_counter].style.top = yhuidig;
  }
}

function attack_opponent(e) {
  var currentTeam = teams[turn_counter];
  var currentTop = parseInt(currentTeam.style.top);
  var currentLeft = parseInt(currentTeam.style.left);

  var defeatedOpponents = [];

  for (var i = 0; i < teams.length; i++) {
    if (i !== turn_counter) {
      var opponent = teams[i];
      var opponentTop = parseInt(opponent.style.top);
      var opponentLeft = parseInt(opponent.style.left);

      if (opponentTop === currentTop && opponentLeft === currentLeft) {
        defeatedOpponents.push(opponent);
      }
    }
  }

  defeatedOpponents.forEach(function (opponent) {
    opponent.remove();
    teams.splice(teams.indexOf(opponent), 1);
    console.log(opponent.id, 'is uitgeschakeld');
  });
}


console.log('red begint');

function click(e){
  console.dir(e);
  // controleer eerst of de positie is toegestaan
  Mag_plaats(e);
  // de plaats code
  attack_opponent(e);
  turn_counter++;
  if(turn_counter >= teams.length){
    turn_counter = 0;
  }
  console.log(teams[turn_counter].id + ' is aan de beurt');
  schaakbord.onclick = alert_error;
}
function alert_error(){
  alert("je moet eerst gooien!");
}

function worp() {
  getal = Math.floor(Math.random() * 6) + 1;
  worpen.innerText = getal; 
  console.log(getal);
  schaakbord.onclick = click;
}
schaakbord.onclick = alert_error;
worpen.onclick = worp;