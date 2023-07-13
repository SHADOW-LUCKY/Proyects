import {get,post,del} from './API.js'
const dataClientes = document.querySelector('#dataClientes')
const modales = document.querySelector('#modales')
const nuevoCliente = document.querySelector('#nuevoCliente')

async function showget() {
    let data = await get('clientes')
    data.forEach(element => {
        let plantilla = `
        <tr>
        <td>${element.CodigoPostal}</td>
        <td>${element.Compania}</td>
        <td>${element.Contacto}</td>
        <td>${element.Direccion}</td>
        <td><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#${element._id}">
        Detalles
      </button></td>
        <td><button type="button" class="btn btn-danger eliminar" value="${element._id}">Borrar</button></td>
        </tr>
        `
        let modalplantilla = `
        <div class="modal fade" id="${element._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Detalles</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <h4>Ciudad</h4>
            <h5>${element.Ciudad}</h5><hr>
            <h4>Fax</h4>
            <h5>${element.Fax}</h5><hr>
            <h4>Pais</h4>
            <h5>${element.Pais}</h5><hr>
            <h4>Regiones</h4>
            <h5>${element.Regiones}</h5><hr>
            <h4>Telefono</h4>
            <h5>${element.Telefono}</h5><hr>
            <h4>Titulo</h4>
            <h5>${element.Titulo}</h5><hr> 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
        `
        dataClientes.innerHTML += plantilla
        modales.innerHTML += modalplantilla
    })
}
/* */
async function makepost(e) {
    e.preventDefault()
    let formData = Object.fromEntries(new FormData(e.target))
    await post('clientes', formData)
    window.location.reload()
}

async function shutdown(e){
    if (e.target.classList.contains("eliminar")) {
        const idClientes = e.target.getAttribute("value");
        console.log(idClientes);
        const confir = confirm("Desea eliminar este producto?");
        if (confir) {
           await del('clientes', idClientes);
            window.location.reload();
        }
    }
}



nuevoCliente.addEventListener('submit', makepost)
dataClientes.addEventListener('click', shutdown)
addEventListener('DOMContentLoaded', showget)
/* 

*/