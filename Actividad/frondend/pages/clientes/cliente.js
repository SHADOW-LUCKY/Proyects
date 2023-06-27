import {getCli,AddCli,DelCli} from './CLI.js'
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
    <th><button id="${element.id_constructora}" class="btn btn-danger delete">eliminar</button></th>
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
        nit_constructora: data.NIT,
        nombre_representante: data.Representante ,
        email_contacto: data.Email,
        telefono_contacto: data.telefono,
    }
     AddCli(registro)
};

function borrar(e) {
    if(e.target.classList.contains('delete')){
        const idCliente = e.target.getAttribute('id')
        let obj = {id_constructora:idCliente}
        const confir = confirm("desea eliminarlo?")
        if (confir) {
            DelCli(obj)
        }
    }
}
constructoras.addEventListener('click',borrar)
formCli.addEventListener('submit',newCli)

