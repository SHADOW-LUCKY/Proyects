import {get} from './API.js'
const dataEmployees = document.querySelector('#dataEmployees')
const modales = document.querySelector('#modales')

async function showget() {
    let data = await get('empleados')
    data.forEach(element => {
        let plantilla = `  <tr>
        <td>${element.Nombre}</td>
        <td>${element.Apellido}</td>
        <td>${element.Direccion}</td>
        <td>${element.FechaContratacion}</td>
        <td><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#${element._id}">
        Detalles
      </button></td>
      </tr>`
    let modalplantilla =`
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
        <h4>CodigoPostal</h4>
        <h5>${element.CodigoPostal}</h5><hr>
        <h4>Direccion</h4>
        <h5>${element.Direccion}</h5><hr>
        <h4>EmpleadoID</h4>
        <h5>${element.EmpleadoID}</h5><hr>
        <h4>Extension</h4>
        <h5>${element.Extension}</h5><hr>
        <h4>FechaNacimiento</h4>
        <h5>${element.FechaNacimiento}</h5><hr>
        <h4>Foto</h4>
        <h5>${element.Foto}</h5><hr>
        <h4>Jefe</h4>
        <h5>${element.Jefe}</h5><hr>
        <h4>Notas</h4>
        <h5>${element.Notas}</h5><hr>
        <h4>Pais</h4>
        <h5>${element.Pais}</h5><hr>
        <h4>Regiones</h4>
        <h5>${element.Regiones}</h5><hr>
        <h4>RutaFoto</h4>
        <h5>${element.RutaFoto}</h5><hr>
        <h4>Telefono</h4>
        <h5>${element.Telefono}</h5><hr>
        <h4>Titulo</h4>
        <h5>${element.Titulo}</h5><hr>
        <h4>TituloCortesia</h4>
        <h5>${element.TituloCortesia}</h5><hr>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    `
      dataEmployees.innerHTML += plantilla
      modales.innerHTML += modalplantilla
    })

}

showget()

/*
Ciudad 
CodigoPostal 
Direccion 
EmpleadoID 
Extension 
FechaNacimiento 
Foto 
Jefe 
Notas 
Pais 
Regiones 
RutaFoto 
Telefono 
Titulo 
TituloCortesia 
_id 
*/