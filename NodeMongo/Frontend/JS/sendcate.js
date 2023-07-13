import {get} from './API.js'
const dataCategorias = document.querySelector('#dataCategorias')

async function showget() {
    let data = await get('categorias')
    data.forEach(element => {
        let plantilla = `  <tr>
        <td>${element.CategoriaNombre}</td>
        <td>${element.Descripcion}</td>
        <td><img src="${element.Imagen}" alt="..." width="50px"></td>
      </tr>`
        dataCategorias.innerHTML += plantilla
    })
 
};
showget()
// CategoriaNombre Descripcion Imagen