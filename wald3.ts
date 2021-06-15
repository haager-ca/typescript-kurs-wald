let anzahlDerBaume: number = 5
const pflanzDauerInMinuten: number = 10;
const faulheitsDauer: number = 120;
const zulaessigeArbeitsZeit: number = 500;

function pflanzeBaume(anzahlNeuerBaume: number, nameDesFoersters: string): number {
    console.log("Der Förster " + nameDesFoersters + " hat " + anzahlNeuerBaume + " Bäume gepflanzt");
    anzahlDerBaume += anzahlNeuerBaume;
    console.log("Wir haben nun " + anzahlDerBaume + " Bäume in unserm Wald!");
    return pflanzDauerInMinuten * anzahlNeuerBaume;
}


function pflanzeBaumeUndZeigeDieDauer(anzahlNeuerBaume: number, nameDesFoersters: string): void {
    let dauer = pflanzeBaume(anzahlNeuerBaume, nameDesFoersters);
    console.log("Das hat " + dauer + " Minuten gedauert.");
    if (dauer < faulheitsDauer || dauer > zulaessigeArbeitsZeit) {

        console.log(nameDesFoersters + " hat entweder zu viel oder zu wenig gearbeiten.")
    } else {
        console.log(nameDesFoersters + " hat gut gearbeitet")
    }

}


pflanzeBaumeUndZeigeDieDauer(2, "Andi");
pflanzeBaumeUndZeigeDieDauer(18, "Peter");
pflanzeBaumeUndZeigeDieDauer(100, "Kunigunde");
pflanzeBaumeUndZeigeDieDauer(50, "Hans-Peter-Jörg");
pflanzeBaumeUndZeigeDieDauer(45, "Hans-Dieter-Jörg");

