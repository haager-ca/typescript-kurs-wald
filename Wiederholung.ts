class Drohne {
    private typ: string;
    private axles: number = 4;
    private maxBatteryCapacity: number = 1550;

    constructor(typ: string = "Armattan") {
        this.typ = typ;
    }
}

class LoadingStation {
    private drohnen: Drohne[] = []
    private ort: string;
    public countDrohnes: number;


    constructor(ort: string = "München") {
        this.ort = ort;
    }

}

const drohne1 = new Auto();
const drohne2 = new Auto("Mercedes");
const drohne3 = new Auto("BMW");

const loadingstation = new LoadingStation();

for (let i = 0; i < 10; i++) {
    const autoTesla = new Auto();
    parkhaus.autosHinzufuegen(autoTesla);
}

console.log(parkhaus);