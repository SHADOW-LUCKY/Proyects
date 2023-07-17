import {get, post, del} from './API.js';
const dataEquipos = document.querySelector("#dataEquipos");
const formEquipos = document.querySelector("#formEquipos");

async function showget(){
    let data = await get('equipos');
    data.forEach(element => {
        let plantilla =`
        <div class="col">
    <div class="card">
      <img src="https://www.nicepng.com/png/detail/280-2806927_teamspirit-high-performing-team-icon.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <h6 class="card-title">${element.country}</h6>
            <p class="card-text">${element.description}</p>
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
        dataEquipos.innerHTML += plantilla
    })
}

async function makepost(){
    let formData = Object.fromEntries(new FormData(formEquipos));
    await post('equipos', formData);
    window.location.reload();
}

async function delpost(e){
    if (e.target.classList.contains("delete")) {
        const etid = e.target.getAttribute("id");
        const confir = confirm("Desea eliminar esta etapa?");
        if (confir) {
            await del('equipos', etid);
            window.location.reload();
        }
        
    }
}

addEventListener('DOMContentLoaded', showget);
formEquipos.addEventListener('submit', makepost);
dataEquipos.addEventListener('click', delpost);
