import { getReg, AddReg, DelReg } from "../UBICA.js";
const TablaReg = document.querySelector('#datosRegion');
const ownForm = document.querySelector('#insreg');

async function loadRegiones() {
    let data = await getReg();
    data.forEach(element => {
        let plantilla = `
        <tr>
        <td>${element.idReg}</td>
        <td>${element.nombreReg}</td>
        <td>${element.idDep}</td>
        <th><button id="${element.idReg}" class="btn btn-danger delete">eliminar</button></th>
        </tr>`
        TablaReg.innerHTML += plantilla
    })
}

async function insReg(e) {
    e.preventDefault();
    let instance = Object.fromEntries(new FormData(e.target));      
    let send = {
        nombreReg: instance.nombreReg,
        idDep: instance.idDep
    }
    await AddReg(send);
    window.location.reload(); 
}
async function borrar(e) {
    if(e.target.classList.contains('delete')){
        const id = e.target.getAttribute('id')
        let obj = {idReg:id}
        const confir = confirm("desea eliminarlo?")
        if (confir) {
            await DelReg(obj)
            window.location.reload();
        }
    }
}
TablaReg.addEventListener('click',borrar);
addEventListener('DOMContentLoaded',loadRegiones);
ownForm.addEventListener('submit',insReg);