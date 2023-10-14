let loggedin = [];
function getindexofelementbyname(lijst,naam){
    for (let x = 0; x < lijst.length; x++ ){
        if (lijst[x]['naam'] === naam){
            return x;
        }
    return null;
}}

function handelInloggen(){
    console.log(loggedin);
    console.log(Date());

    const naam = document.getElementById('inputnaam').value;
    if (naam.length <=0){
        alert('voer een naam in');
        return;
    }
    console.log('u hebt op de button geklikt');

    const positie = getindexofelementbyname(loggedin,naam);
    if (positie !== null){
        const olddate = loggedin[positie]['moment'];
        const newDate = new Date();
        const verschil = olddate - newDate / 1000
        console.log(verschil)
        loggedin.splice(positie, 1);
        console.log('u bent uitgelogd');
        document.getElementById('melding').innerText = 'u bent uitgelogd ' + naam;
    } else {
        loggedin.push({'naam' : naam, 'moment' : new Date()});
        console.log('u bent ingelogd');
        document.getElementById('melding').innerText = 'u bent ingelogd' + naam;
    }
document.getElementById('inputnaam').value = '';
console.log(loggedin);
    // console.log('u hebt ingelogd: ' + naam)
    // document.getElementById('inputnaam').value = '';
    // document.getElementById('melding').innerText = 'gelukt';
}