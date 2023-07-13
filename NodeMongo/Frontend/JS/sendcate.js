import {get,post,del} from './API.js'
const dataCategorias = document.querySelector('#dataCategorias')
const nuevaCategoria = document.querySelector('#nuevaCategoria')
async function showget() {
    let data = await get('categorias')
    data.forEach(element => {
        let plantilla = `  <tr>
        <td>${element.CategoriaNombre}</td>
        <td>${element.Descripcion}</td>
        <td><img src="${element.Imagen}" alt="..." width="50px"></td>
        <td><button type="button" class="btn btn-danger eliminar" id="${element._id}">Borrar</button></td>
        </tr>
      </tr>`
        dataCategorias.innerHTML += plantilla
    })
 
};


function makepost(e) {
    e.preventDefault()
    let formData = Object.fromEntries(new FormData(e.target))
    post('categorias', formData)
    window.location.reload()
}

async function shutdown(e){
    if (e.target.classList.contains("eliminar")) {
        const idCategorias = e.target.getAttribute("id");
        console.log(idCategorias);
        const confir = confirm("Desea eliminar este producto?");
        if (confir) {
            await  del('categorias', idCategorias);  
            window.location.reload();           
    }
}
}
addEventListener('DOMContentLoaded', showget())
dataCategorias.addEventListener('click', shutdown)
nuevaCategoria.addEventListener('submit', makepost)