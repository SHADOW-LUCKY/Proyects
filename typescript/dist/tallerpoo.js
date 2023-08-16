"use strict";
class centro {
    constructor(nombre, descripcion, ciudad) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
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
}
const centro1 = new centro("Centro 1", "Descripción del centro 1", "Ciudad 1");
const centro2 = new centro("Centro 2", "Descripción del centro 2", "Ciudad 2");
const centro3 = new centro("Centro 3", "Descripción del centro 3", "Ciudad 3");
const centro4 = new centro("Centro 4", "Descripción del centro 4", "Ciudad 4");
const centro5 = new centro("Centro 5", "Descripción del centro 5", "Ciudad 5");
const ruta1 = new ruta("Ruta 1", centro1);
const ruta2 = new ruta("Ruta 2", centro2);
const ruta3 = new ruta("Ruta 3", centro3);
const ruta4 = new ruta("Ruta 4", centro4);
const ruta5 = new ruta("Ruta 5", centro5);
const nivel1 = new nivel("Tema 1", ruta1, " 1semanas");
const nivel2 = new nivel("Tema 2", ruta2, " 2semanas");
const nivel3 = new nivel("Tema 3", ruta3, " 3semanas");
const nivel4 = new nivel("Tema 4", ruta4, " 4semanas");
const nivel5 = new nivel("Tema 5", ruta5, " 5semanas");
const camper1 = new camper("Camper 1", centro1, nivel1, "id1", "email1", "pendiente");
const contrato1 = new contrato(camper1, "presencial");
console.log(camper1);
