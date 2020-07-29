let anzahlDerBaeme: number = 5;
const pflanzDauerInMinuten: number = 10;
const faulheitsDauer: number = 200;
const zulaessigeArbeitszeit: number = 500

function pflanzeBaeme(anzahlNeuerBaeme: number, nameDesFoersters: string): number {
    console.log("Der Förster " + nameDesFoersters + " hat " + anzahlNeuerBaeme + " Bäume gepflanzt.");
    anzahlDerBaeme += anzahlNeuerBaeme;
    console.log("Wir haben nun " + anzahlDerBaeme + " Bäume in unserem Wald.")
    return pflanzDauerInMinuten * anzahlNeuerBaeme;
}

function pflanzeBaemeUndZeigeDauer(anzahlNeuerBaeme: number, nameDesFoersters: string): void {
    let dauer = pflanzeBaeme(anzahlNeuerBaeme, nameDesFoersters);
    console.log("Das hat " + dauer + " Minuten gedauert.")
    if (dauer < faulheitsDauer || dauer > zulaessigeArbeitszeit) {
        console.log(nameDesFoersters + " hat entweder zu viel oder zu wenig gearbeitet.")
    } else {
        console.log(nameDesFoersters + " hat gut gearbeitet.")
    };
}

const foerster: string[] = [
    "Günter",
    "Tom",
    "Hans",
    "Andi"
];

/* Schleifen*/

for ( let i = 0; i< foerster.length; i ++){
    pflanzeBaemeUndZeigeDauer(18, foerster[i]);
}

/*while (false){
    
}*/

console.log ("________________")

for ( const mensch of foerster ) {
    pflanzeBaemeUndZeigeDauer(18, mensch);
}


/*
pflanzeBaemeUndZeigeDauer(18, "Günther");
pflanzeBaemeUndZeigeDauer(18, "Tom");
pflanzeBaemeUndZeigeDauer(18, "Hans");
*/