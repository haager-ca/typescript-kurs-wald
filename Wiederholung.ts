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

const drohne1 = new Drohne();
const drohne2 = new Drohne("Mercedes");
const drohne3 = new Drohne("BMW");

const loadingstation = new LoadingStation();


console.log(loadingstation);