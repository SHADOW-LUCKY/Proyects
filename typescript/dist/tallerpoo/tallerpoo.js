"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class centro {
    constructor(nombre, descripcion, ciudad, cantidad) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.cantidad = cantidad;
    }
    quantity(quant) {
        this.cantidad = quant;
    }
    Cantidad() {
        var _a;
        return `Hay ${(_a = this.cantidad) === null || _a === void 0 ? void 0 : _a.length} en el centro ${this.nombre}`;
    }
}
class ruta {
    constructor(nombre, centro) {
        this.nombre = nombre;
        this.centro = centro;
    }
}
class nivel {
    constructor(nombre, ruta, duracion) {
        this.nombre = nombre;
        this.ruta = ruta;
        this.duracion = duracion;
    }
}
class camper {
    constructor(nombre, centro, nivel, id, email, levelstatus) {
        this.nombre = nombre;
        this.centro = centro;
        this.nivel = nivel;
        this.id = id;
        this.email = email;
        this.levelstatus = levelstatus;
    }
}
class contrato {
    constructor(camper, tipocontrato) {
        this.camper = camper;
        this.tipocontrato = tipocontrato;
    }
    /* getter */
    get tipo() {
        return this.tipocontrato;
    }
    /* metodos */
    tipocon(contract) {
        if (contract == "presencial" || contract == "online") {
            this.tipocontrato = contract;
        }
        else {
            console.log("tipo contrato no valido");
        }
    }
    continuecon(camper) {
        if (camper.levelstatus == "pendiente") {
            console.log("el contrato no se ha ejecutado porque no ha terminado el nivel");
            this.tipocontrato = "inactivo";
        }
        else {
            console.log("el contrato esta vigente");
        }
    }
}
const centro1 = new centro("Centro 1", "Descripción 1", "Ciudad 1");
const centro2 = new centro("Centro 2", "Descripción 2", "Ciudad 2");
const ruta1 = new ruta("Ruta 1", centro1);
const ruta2 = new ruta("Ruta 2", centro2);
const ruta3 = new ruta("Ruta 3", centro1);
const ruta4 = new ruta("Ruta 4", centro2);
const nivel1 = new nivel("Nivel 1", ruta1, "2 horas");
const nivel2 = new nivel("Nivel 2", ruta2, "3 horas");
const nivel3 = new nivel("Nivel 3", ruta3, "4 horas");
const nivel4 = new nivel("Nivel 4", ruta4, "5 horas");
const camper1 = new camper("Camper 1", centro1, nivel1, "id1", "email1", "pendiente");
const camper2 = new camper("Camper 2", centro2, nivel2, "id2", "email2", "pendiente");
const camper3 = new camper("Camper 3", centro1, nivel3, "id3", "email3", "pendiente");
const camper4 = new camper("Camper 4", centro2, nivel4, "id4", "email4", "pendiente");
const contrato1 = new contrato(camper1, "presencial");
const contrato2 = new contrato(camper2, "online");
console.log(contrato1.continuecon(camper2));
console.log(contrato1.tipocontrato);
centro1.quantity([camper1, camper2, camper3, camper4]);
console.log(centro1.Cantidad());
