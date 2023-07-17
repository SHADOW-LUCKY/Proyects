import {get, post, del} from './API.js';
const dataPremios = document.querySelector("#dataPremios");
const formPremios = document.querySelector("#formPremios");

async function showget(){
    let data = await get('premios');
    data.forEach(element => {
        let plantilla =`
        <div class="col">
    <div class="card">
      <img src="https://cdn-icons-png.flaticon.com/512/2827/2827014.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
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
        dataPremios.innerHTML += plantilla
    })
}

async function makepost(){
    let formData = Object.fromEntries(new FormData(formPremios));
    await post('premios', formData);
    window.location.reload();
}

async function delpost(e){
    if (e.target.classList.contains("delete")) {
        const etid = e.target.getAttribute("id");
        const confir = confirm("Desea eliminar esta etapa?");
        if (confir) {
            await del('premios', etid);
            window.location.reload();
        }
        
    }
}

addEventListener('DOMContentLoaded', showget);
formPremios.addEventListener('submit', makepost);
dataPremios.addEventListener('click', delpost);
