import {getReg} from "../Ubicaciones/UBICA.js";
const Select = document.querySelector('#regs');

async function loadRegiones() {
    let data = await getReg();
    data.forEach(element => {
        let plantilla = `
        <option value="${element.idReg}">${element.nombreReg}</option>`
        Select.innerHTML += plantilla
    })
}

addEventListener('DOMContentLoaded',loadRegiones);

