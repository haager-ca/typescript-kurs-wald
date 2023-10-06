const prices: number[] = [
    1.50,
    0.99,
    0.99,
    4.50,
    5.65
];

const mengePr: number[] = [ 7, 15, 11, 3, 9];

const menge: boolean[] = [true, true, true, true, true];

const products: string[] = [
    "Musliriegel",
    "Mars",
    "Snickers",
    "M&Ms",
    "Chips"
];

function getMenge() {
    for (let i = 0; i < mengePr.length; i++) {
        if(mengePr[i] > 0) {
           menge[i] = true
           console.log(menge[i] + " " + mengePr[i])
        } else {
            menge[i] = false;
            console.log(menge[i] + " " + mengePr[i])
        }
    }
}



function canGetSnack(eingabe: number, geldEin: number) {
    getMenge();
    if (eingabe <= 4 && menge[eingabe] == true){    
        getSnack(eingabe, geldEin)
        return
    } if (eingabe <= 4 && menge[eingabe] == false) {
        console.log("Dieser Artikel ist leider ausverkauft")
        return
    } else {
        console.log("Diesen Artikel haben wir leider nicht im Sortiment")
        return
    }
}

function getSnack(productNr: number, geldEIN: number) {
    console.log("Du hast den " + products[productNr] + " gewählt")
    console.log("Es kostet: " + prices[productNr])
    console.log("du hast " + geldEIN + "€ gegeben")
    if(geldEIN >= prices[productNr]) {
        let geldAus = geldEIN - prices[productNr]
        console.log("Hier ist dein Snack. Du bekommst " + geldAus + "€ zurück" )
        mengePr[productNr] = mengePr[productNr] - 1
        console.log(mengePr)
        return
    } else {
        let geldNotwendig = prices[productNr] - geldEIN
        console.log("Du musst noch " + geldNotwendig + "€ einwerfen")
        return
    }
}


canGetSnack(0, 10)
canGetSnack(0, 10)
canGetSnack(0, 10)
canGetSnack(0, 10)
canGetSnack(0, 10)
canGetSnack(0, 10)
canGetSnack(0, 10)
canGetSnack(0, 10)

