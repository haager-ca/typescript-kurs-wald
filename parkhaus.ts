class Auto {
    private typ: string;
    private tueren: number = 4;
    private maxGeschwindigkeit: number = 240;

    constructor(typ: string = "Tesla") {
        this.typ = typ;
    }
}

class Parkhaus {
    private autos: Auto[] = []
    public autosHinzufuegen(auto: Auto) {
        this.autos.push(auto)
    }
}

const auto1 = new Auto();
const auto2 = new Auto("Mercedes");
const auto3 = new Auto("BMW");

const parkhaus = new Parkhaus();
parkhaus.autosHinzufuegen(auto1);
parkhaus.autosHinzufuegen(auto2);
parkhaus.autosHinzufuegen(auto3);

for (let i = 0; i < 10; i++) {
    const autoTesla = new Auto();
    parkhaus.autosHinzufuegen(autoTesla);
}

console.log(parkhaus);