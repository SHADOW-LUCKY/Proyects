"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Astronauta {
    constructor(id, nombre, _record, reward, mission = []) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
        this.reward = reward;
        this.mission = mission;
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
    getLaunches() {
        return __awaiter(this, void 0, void 0, function* () {
            const launches = "https://api.spacexdata.com/v3/launches";
            const { data } = yield axios_1.default.get(launches);
            data.forEach((element) => {
                const { mission_name } = element;
                this.mission.push(mission_name);
            });
            console.log(this.mission);
            return this.mission;
        });
    }
}
/* export default Astronauta; */
const astro1 = new Astronauta(1, "Juan", "100", "artemis");
const astro2 = new Astronauta(2, "Pedro", "200", "alo");
/* console.log(`record b: ${astro1.record}`);
astro1.record = "300";
console.log(`record a: ${astro1.record}`);

astro1.recompensa(astro1.reward);  */
console.log(astro1.getLaunches());
class detalles {
    constructor(nombre, descripcion, fechaCreacion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
    }
    get year() {
        return this.fechaCreacion.getFullYear();
    }
}
class cohete extends detalles {
    constructor(orbita, nombre, descripcion, fechaCreacion) {
        super(nombre, descripcion, fechaCreacion);
        this.orbita = orbita;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
    }
}
let cohete1 = new cohete("luz", "Fantasma", "es un cohete que se encuentra en el espacio", new Date());
/* console.log(cohete1.year); */
