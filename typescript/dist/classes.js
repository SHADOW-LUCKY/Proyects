"use strict";
class Astronauta {
    constructor(id, nombre, _record, reward) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
        this.reward = reward;
    }
    /* setter */
    set record(record) {
        this._record = record;
    }
    /* getter */
    get record() {
        return this._record;
    }
    /* metodos */
    recompensa(reward) {
        if (reward == "artemis") {
            console.log(`gano 5 millones`);
        }
        else {
            console.log(`gano 1 millon`);
        }
    }
    ;
}
const astro1 = new Astronauta(1, "Juan", "100", "artemis");
const astro2 = new Astronauta(2, "Pedro", "200", "alo");
console.log(`record b: ${astro1.record}`);
astro1.record = "300";
console.log(`record a: ${astro1.record}`);
astro1.recompensa(astro1.reward);
