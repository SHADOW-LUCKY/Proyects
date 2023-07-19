import { obtainConstructoras, nuevaConstructora, deleteConstructora, obtenerConstructora, editarConstructora } from "./API.js";

const construct = document.querySelector("#constructor");

document.addEventListener("DOMContentLoaded", () => {
    cargarConstructoras();
});

/* LISTAR CATEGORIAS  - CRUD (R) */

async function cargarConstructoras(){
    const categorias = await obtainConstructoras();
    categorias.forEach(element => {
        const plantilla = `
        <tr>
        <td>${element.id_constructora}</td>
        <td>${element.nombre_constructora}</td>
        <td>${element.nit_constructora}</td>
        <td>${element.nombre_representante}</td>
        <td>${element.email_contacto}</td>
        <td>${element.telefono_contacto}</td>
        <td><a class="btn btn-warning update" id=${element.id_constructora} data-bs-toggle="modal"
        data-bs-target="#updateConstruct">Editar</a></td>
        <td><button class="btn btn-danger delete" id="${element.id_constructora}">Eliminar</button></td>
    </tr>
    `;
    construct.innerHTML+=plantilla; 
    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.getElementById("formularioConstructora");
formulario.addEventListener('submit',nuevoConstructora);

function nuevoConstructora(e){
    e.preventDefault();
    const nombre_constructora = document.querySelector("#ConstructoraNombre").value;
    const nit_constructora = document.querySelector("#Nit").value;
    const nombre_representante = document.querySelector("#RepresentanteNombre").value;
    const email_contacto = document.querySelector("#EmailContacto").value;
    const telefono_contacto = document.querySelector("#TelefonoContacto").value;
    
    const registro={
        nombre_constructora,
        nit_constructora,
        nombre_representante,
        email_contacto,
        telefono_contacto
    }

    if(validation(registro)){
        alert("Todos los datos son obligatorios");
    } return nuevaConstructora(registro);
    
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
}

/* ELIMINAR CATEGORIA  - CRUD (D) */

const eliminar = document.querySelector("#constructor");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if(e.target.classList.contains('delete')){
        const id = e.target.getAttribute('id')
        console.log(id);

        const confirmar = confirm("Desea Eliminarlo?")
        if(confirmar){
            deleteConstructora(id);
        }
    } else if(e.target.classList.contains('update')){
        const id = e.target.getAttribute('id')
        obtenerConstruct(id);
    }
}

//EDITAR CATEGORIA - CRUD (U)

const obtenerConstruct = async (id)=>{
    const data = await obtenerConstructora(id);
    const {nombre_constructora	, nit_constructora, nombre_representante, email_contacto, telefono_contacto} = data[0];
    console.log(data[0]);
    const nombre = document.querySelector("#ConstructoraNombreUpdate");
    nombre.setAttribute("placeholder",nombre_constructora);
    nombre.setAttribute("idConst",id);

    const nit = document.querySelector("#NitUpdate");
    nit.setAttribute("placeholder",nit_constructora);
    
    const repNombre = document.querySelector("#RepresentanteNombreUpdate");
    repNombre.setAttribute("placeholder",nombre_representante);

    const Email = document.querySelector("#EmailContactoUpdate");
    Email.setAttribute("placeholder",email_contacto);

    const Telefono = document.querySelector("#TelefonoContactoUpdate");
    Telefono.setAttribute("placeholder",telefono_contacto);
}

const updateFormulario = document.querySelector("#formularioUpdate");
updateFormulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    updateConstructora();
})

function updateConstructora(){
    // Se selecciona el lugar en el que esta el id guardado en la etiqueta 
    const nombre = document.querySelector("#ConstructoraNombreUpdate");
    // Se selecciona el id y se parsea
    const id = parseInt(nombre.getAttribute('idConst'));

    const ConstructoraNombre = document.querySelector("#ConstructoraNombreUpdate").value;
    const Nit = document.querySelector("#NitUpdate").value;
    const RepNombre = document.querySelector("#RepresentanteNombreUpdate").value;
    const Email = document.querySelector("#EmailContactoUpdate").value;
    const Telefono = document.querySelector("#TelefonoContactoUpdate").value;


    const constructora = {
        nombre_constructora: ConstructoraNombre,
        nit_constructora: Nit,
        nombre_representante: RepNombre,
        email_contacto: Email,
        telefono_contacto: Telefono
    }

    if(validation(constructora)){
        alert("Todos los datos son obligatorios");
        // Se retorna la validacion y el id en conjunto
    } return editarConstructora(constructora,id);
}