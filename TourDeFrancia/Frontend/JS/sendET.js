import {get, post, del} from './API.js';
const dataEtapas = document.querySelector("#dataEtapas");
const formEtapas = document.querySelector("#nuevaEtapa");

async function showget() {
    let data = await get('etapas');
     data.forEach(element => {
         let plantilla =`
         <div class="col">
     <div class="card">
       <img src="https://png.pngtree.com/png-vector/20220606/ourlarge/pngtree-speedway-icon-in-flat-style-on-a-yellow-background-png-image_4877923.png" class="card-img-top" alt="...">
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
         dataEtapas.innerHTML += plantilla
     })
}

async function makepost(e) {
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.target));
    await post('etapas', formData);
    window.location.reload();
}

async function delpost(e) {
    if (e.target.classList.contains("delete")) {
        const etid = e.target.getAttribute("id");
        const confir = confirm("Desea eliminar esta etapa?");
        if (confir) {
            await del('etapas', etid);
            window.location.reload();
        }
    }
}

addEventListener('DOMContentLoaded', showget)
formEtapas.addEventListener('submit', makepost)
dataEtapas.addEventListener('click', delpost)

