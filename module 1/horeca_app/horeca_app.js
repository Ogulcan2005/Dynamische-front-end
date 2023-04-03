let uitkomst = "";
let bon = new Object;

const drank = {
    fris : 6.99,
    bier : 4.99,
    wijn : 7.99
}

let gekozen_drank = ''

function bestelling() {
    while (gekozen_drank != 'stop') {
        gekozen_drank = prompt('wat wilt u bestellen');
        if (gekozen_drank in drank) {
            vraag_hoeveel = parseInt(prompt('hoeveel', gekozen_drank, 'wilt u'))
            console.log('1 ', gekozen_drank, ' is', drank[gekozen_drank]);
        }else{
            console.log('kies tussen ' + Object.keys(drank))
        }}}
        



function rekening_tonen() {
    console.log(bon)
}
bestelling()
rekening_tonen()

