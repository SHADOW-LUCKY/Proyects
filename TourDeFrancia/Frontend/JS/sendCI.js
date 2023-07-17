import {get, post, del} from './API.js';
const dataCiclista = document.querySelector("#dataCiclistas");
const formCiclista = document.querySelector("#formCiclistas");
async function showget() {
    let data = await get('ciclistas');
    data.forEach(element => {
        let plantilla =`
        <div class="col">
    <div class="card">
      <img src="https://cdn-icons-png.flaticon.com/512/5778/5778454.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.nombre_completo}</h5>
            <ul style="padding: 0">
                <ol>edad: ${element.edad}</ol>
                <ol>pais: ${element.pais}</ol>
                <ol>genero: ${element.genero}</ol>
                <ol>equipo: ${element.equipo}</ol>
            </ul>
            <div class="row">
                <div class="col-sm-4">
                    <button type="button" class="btn btn-warning">Editar</button>
                </div>
                <div class="col-sm-4">
                    <button type="button" class="btn btn-danger delete" id="${element._id}">Eliminar</button>
                </div>
            </div>
      </div>
    </div>
  </div>
        `
        dataCiclista.innerHTML += plantilla
    })
}

async function showpost(e) {
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.target));
    await post('ciclistas', formData);
    window.location.reload();
}

async function delpost(e) {
    if (e.target.classList.contains("delete")) {
        const biker = e.target.getAttribute("id");
        const confir = confirm("Desea eliminar este ciclista?");
        if (confir) {
            await  del('ciclistas', biker);  
            window.location.reload();
        }
} 
}



addEventListener('DOMContentLoaded', showget())
formCiclista.addEventListener('submit', showpost)
dataCiclista.addEventListener('click', delpost)
