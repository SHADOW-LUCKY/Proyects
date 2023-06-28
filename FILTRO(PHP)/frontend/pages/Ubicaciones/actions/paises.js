import { getPais,AddPais,DelPais } from "../UBICA.js";
const TablaPais = document.querySelector('#datosPaises');
const FormDep = document.querySelector('#paisfrom');
const ownForm = document.querySelector('#inspais');

async function loadPaises() {
    let data = await getPais();
    data.forEach(element => {
        let plantilla = `
        <tr>
        <td>${element.idPais}</td>
        <td>${element.nombrePais}</td>
        <th><button id="${element.idPais}" class="btn btn-danger delete">eliminar</button></th>
        </tr>`
        TablaPais.innerHTML += plantilla
    })
}
async function formpais() {
    let data = await getPais();
    data.forEach(element => {
        let plantilla = `<option value="${element.idPais}">${element.nombrePais}</option>`
        FormDep.innerHTML += plantilla
    })
}
async function insPais(e) {
    e.preventDefault();
    let instance = Object.fromEntries(new FormData(e.target));  
    let send = {
        nombrePais: instance.nombrePais
    }
    await AddPais(send);
    window.location.reload();
}
async function borrar(e) {
    if(e.target.classList.contains('delete')){
        const id = e.target.getAttribute('id')
        let obj = {idPais:id}
        const confir = confirm("desea eliminarlo?")
        if (confir) {
            await DelPais(obj)
            window.location.reload();
        }
    }
}
TablaPais.addEventListener('click',borrar);
addEventListener('DOMContentLoaded',loadPaises);
addEventListener('DOMContentLoaded',formpais);
ownForm.addEventListener('submit',insPais);