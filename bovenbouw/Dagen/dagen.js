const dagenVanDeWeek = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];

const werkdagen = dagenVanDeWeek.slice(0, 5);
const weekenddagen = dagenVanDeWeek.slice(5);

document.getElementById('alle-dagen').innerText = dagenVanDeWeek.join(', ');

document.getElementById('werkdagen').innerText = werkdagen.join(', ');

document.getElementById('weekenddagen').innerText = weekenddagen.join(', ');

document.getElementById('omgekeerd-alle-dagen').innerText = dagenVanDeWeek.slice().reverse().join(', ');

document.getElementById('omgekeerd-werkdagen').innerText = werkdagen.slice().reverse().join(', ');

document.getElementById('omgekeerd-weekenddagen').innerText = weekenddagen.slice().reverse().join(', ');
