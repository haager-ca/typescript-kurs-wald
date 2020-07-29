class Baum {
    private hoehe: number = 0;
    private typ: string;
    private durchmesser: number = 0;

    constructor(typ: string = "Tanne") {
        this.typ = typ;
    }

    public wachsen(zusaetslicheHoehe: number = 5) {
        this.hoehe += zusaetslicheHoehe;
        this.durchmesser = zusaetslicheHoehe / 5;
    }
}

class Wald {
    private baeme: Baum[] = []
    public baumeHinzufuegen(baum: Baum) {
        this.baeme.push(baum)
    }

}

const baum1 = new Baum("Fichte");
const baum2 = new Baum();

const wald = new Wald();
wald.baumeHinzufuegen(baum1);
wald.baumeHinzufuegen(baum2);

for (let i = 0; i < 5; i++) {
    const baumTemp = new Baum()
    wald.baumeHinzufuegen(baumTemp)
}


console.log(wald);

