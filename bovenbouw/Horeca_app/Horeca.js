function vraagAantalBolletjes() {
    return parseInt(prompt("Hoeveel bolletjes wilt u?"), 10);
}

function kiesSmaken(aantal) {
    const smaken = { A: "Aardbei", C: "Chocolade", M: "Munt", V: "Vanille" };
    const gekozenSmaken = [];
    
    for (let i = 0; i < aantal; i++) {
        let smaak;
        do {
            smaak = prompt(`Welke smaak wilt u voor bolletje nummer ${i + 1}? A) Aardbei, C) Chocolade, M) Munt, V) Vanille?`).toUpperCase();
            if (!smaken[smaak]) {
                alert("Sorry, dat snap ik niet...");
            }
        } while (!smaken[smaak]);
        gekozenSmaken.push(smaken[smaak]);
    }
    return gekozenSmaken;
}

function kiesBakjeOfHoorn(aantal) {
    if (aantal < 4) {
        let keuze;
        do {
            keuze = prompt(`Wilt u deze ${aantal} bolletje(s) in een hoorntje of een bakje?`).toLowerCase();
            if (keuze !== "hoorn" && keuze !== "bakje") {
                alert("Sorry, dat snap ik niet...");
            }
        } while (keuze !== "hoorn" && keuze !== "bakje");
        alert(`Hier is uw ${keuze} met ${aantal} bolletje(s).`);
        return keuze;
    } else if (aantal < 9) {
        alert(`Dan krijgt u van mij een bakje met ${aantal} bolletjes.`);
        return "bakje";
    } else {
        alert("Sorry, zulke grote bakken hebben we niet.");
        return null;
    }
}

function bestelling() {
    const prijzen = { bolletjes: 1.1, hoorntjes: 1.25, bakjes: 0.75 };
    const totaal = { bolletjes: 0, hoorntjes: 0, bakjes: 0 };
    let opnieuw = "ja";

    while (opnieuw === "ja") {
        const aantalBolletjes = vraagAantalBolletjes();
        if (isNaN(aantalBolletjes) || aantalBolletjes <= 0) {
            alert("Voer een geldig aantal bolletjes in.");
            continue;
        }

        const smaken = kiesSmaken(aantalBolletjes);
        const keuze = kiesBakjeOfHoorn(aantalBolletjes);

        totaal.bolletjes += aantalBolletjes;
        if (keuze === "bakje") {
            totaal.bakjes += 1;
        } else if (keuze === "hoorn") {
            totaal.hoorntjes += 1;
        }

        opnieuw = prompt("Wilt u nog meer bestellen? (ja/nee)").toLowerCase();
    }

    if (opnieuw === "nee") {
        const totalePrijs =
            totaal.bolletjes * prijzen.bolletjes +
            totaal.bakjes * prijzen.bakjes +
            totaal.hoorntjes * prijzen.hoorntjes;

        console.log("Uw bestelling:");
        console.log("----[Papi Gelato]----");
        console.log(`Bolletjes: ${totaal.bolletjes} x €${prijzen.bolletjes.toFixed(2)} = €${(totaal.bolletjes * prijzen.bolletjes).toFixed(2)}`);
        console.log(`Bakjes: ${totaal.bakjes} x €${prijzen.bakjes.toFixed(2)} = €${(totaal.bakjes * prijzen.bakjes).toFixed(2)}`);
        console.log(`Hoorntjes: ${totaal.hoorntjes} x €${prijzen.hoorntjes.toFixed(2)} = €${(totaal.hoorntjes * prijzen.hoorntjes).toFixed(2)}`);
        console.log(`Totale prijs: €${totalePrijs.toFixed(2)}`);
        console.log("Bedankt en tot ziens!");
    }
}

bestelling();
