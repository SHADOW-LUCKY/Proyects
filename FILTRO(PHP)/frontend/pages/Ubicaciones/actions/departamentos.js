import { getDep,AddDep,DelDep } from "../UBICA.js";
const TablaDep = document.querySelector('#datosDepartamento');
const formReg = document.querySelector('#depfrom');
const ownForm = document.querySelector('#insdep');
async function loadDepartamentos() {
    let data = await getDep();
    data.forEach(element => {
        let plantilla = `
        <tr>
        <td>${element.idDep}</td>
        <td>${element.nombreDep}</td>
        <td>${element.idPais}</td>
        <th><button id="${element.idDep}" class="btn btn-danger delete">eliminar</button></th>
        </tr>`
        TablaDep.innerHTML += plantilla
    })
}
async function formdep() {
    let data = await getDep();
    data.forEach(element => {
        let plantilla = `<option value="${element.idDep}">${element.nombreDep}</option>`
        formReg.innerHTML += plantilla
    })
}
async function insDep(e) {
    e.preventDefault();
    let instance = Object.fromEntries(new FormData(e.target));
    console.log(instance);  
    let send = {
        nombreDep: instance.nombreDep,
        idPais: instance.idPais
    } 
    await AddDep(send);
    window.location.reload();
    
}
async function borrar(e) {
    if(e.target.classList.contains('delete')){
        const id = e.target.getAttribute('id')
        let obj = {idDep:id}
        const confir = confirm("desea eliminarlo?")
        if (confir) {
            await DelDep(obj)
            window.location.reload();
        }
    }
}

TablaDep.addEventListener('click',borrar);
addEventListener('DOMContentLoaded',loadDepartamentos);
addEventListener('DOMContentLoaded',formdep);
ownForm.addEventListener('submit',insDep);