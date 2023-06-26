import {getCli,AddCli} from './CLI.js'
const constructoras = document.querySelector('#datosClientes');
const formCli =document.querySelector('#InsertCli');

async function loadConstructoras() {
   let data = await getCli()
   data.forEach(element => {
    let plantilla =`
    <tr>
    <td>${element.id_constructora}</td>
    <td>${element.nombre_constructora}</td>
    <td>${element.nit_constructora}</td>
    <td>${element.nombre_representante}</td>
    <td>${element.email_contacto}</td>
    <td>${element.telefono_contacto}</td>
    </tr>`
    constructoras.innerHTML += plantilla
   });
}

addEventListener('DOMContentLoaded', () => {
    loadConstructoras();
})
/* new Cliente */
function newCli(e) {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    const registro={
        nombre_constructora: data.Constructora,
        nit_constructora: data.Representante,
        nombre_representante: data.NIT,
        email_contacto: data.Email,
        telefono_contacto: data.telefono,
    }
    AddCli(registro)
};


formCli.addEventListener('submit',newCli)

