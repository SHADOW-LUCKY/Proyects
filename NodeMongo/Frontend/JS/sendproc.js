import {get,post,del} from './API.js'
const dataProductos = document.querySelector('#dataProductos')
const modales = document.querySelector('#modales')
const nuevoProducto = document.querySelector('#nuevoProducto')
async function showget() {
    let data = await get('productos')
    data.forEach(element => {
        let plantilla = `
        <tr>
        <td>${element.ProductoNombre}</td>
        <td>${element.PrecioUnitario }</td>
        <td>${element.CantidadPorUnidad }</td>
        <td>${element.UnidadesStock}</td>
        <td><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#${element._id}">
        Detalles
        </button></td>
        <td><button type="button" class="btn btn-danger eliminar" id="${element._id}">Borrar</button></td>
        </tr>`
        let modalplantilla = `
        <div class="modal fade" id="${element._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Detalles</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h4>CategoriaID</h4>
        <h5>${element.CategoriaID}</h5><hr>
        <h4>Descontinuado?</h4>
        <h5>${element.Discontinuado}</h5><hr>
        <h4>Nivel Reorden</h4>
        <h5>${element.NivelReorden}</h5><hr>
        <h4>Unidades Pedidas</h4>
        <h5>${element.ProveedorIUnidadesPedidas}</h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        `
        modales.innerHTML += modalplantilla 
        dataProductos.innerHTML += plantilla    
    })
}
function makepost(e) {
    e.preventDefault()
    let formData = Object.fromEntries(new FormData(e.target))
    post('productos', formData)
    window.location.reload()
}

function shutdown(e){
    if (e.target.classList.contains("eliminar")) {
        const idCategorias = e.target.getAttribute("id");
        console.log(idCategorias);
        const confir = confirm("Desea eliminar este producto?");
        if (confir) {
            del('productos', idCategorias);
            window.location.reload();
        }
    }
}


addEventListener('DOMContentLoaded', showget())
dataProductos.addEventListener('click', shutdown)
nuevoProducto.addEventListener('submit', makepost)
/* 
*/