import { obtainCategories, nuevaCategoria, deleteCategory, obtenerCategory, editarCategory } from "./API.js";

const cat = document.querySelector("#categories");

document.addEventListener("DOMContentLoaded", () => {
    cargarCategorias();
});

/* LISTAR CATEGORIAS  - CRUD (R) */

async function cargarCategorias(){
    const categorias = await obtainCategories();
    categorias.forEach(element => {
        const plantilla = `
        <tr>
        <td>${element.id_categoria}</td>
        <td>${element.nombre_categoria}</td>
        <td>${element.descripcion_categoria}</td>
        <td>${element.img_categoria}</td>
        <td><a class="btn btn-warning update" id=${element.id_categoria} data-bs-toggle="modal"
        data-bs-target="#updateCategory">Editar</a></td>
        <td><button class="btn btn-danger delete" id="${element.id_categoria}">Eliminar</button></td>
    </tr>
    `;
    
    cat.innerHTML+=plantilla; 
    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.getElementById("formulario");
formulario.addEventListener('submit',nuevoCategoria);

function nuevoCategoria(e){
    e.preventDefault();
    console.log(4);
    const nombre_categoria = document.querySelector("#CategoriaNombre").value;
    const descripcion_categoria = document.querySelector("#Descripcion").value;
    const img_categoria = document.querySelector("#Imagen").value;
    
    const registro={
        nombre_categoria,
        descripcion_categoria,
        img_categoria
    }

    if(validation(registro)){
        alert("Todos los datos son obligatorios");
    } return nuevaCategoria(registro);
    
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
}

/* ELIMINAR CATEGORIA  - CRUD (D) */

const eliminar = document.querySelector("#categories");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if(e.target.classList.contains('delete')){
        const id = e.target.getAttribute('id')
        console.log(id);

        const confirmar = confirm("Desea Eliminarlo?")
        if(confirmar){
            deleteCategory(id);
        }
    } else if(e.target.classList.contains('update')){
        const id = e.target.getAttribute('id');
        obtenerCategoria(id);
    }
}

//EDITAR CATEGORIA - CRUD (U)

const obtenerCategoria = async (id)=>{
    const data = await obtenerCategory(id);
    const {nombre_categoria, descripcion_categoria, img_categoria} = data[0];
    console.log(data[0]);
    const nombre = document.querySelector("#CategoriaNombreUpdate");
    nombre.setAttribute("placeholder",nombre_categoria);
    nombre.setAttribute("idCat",id);

    const descripcion = document.querySelector("#DescripcionUpdate");
    descripcion.setAttribute("placeholder",descripcion_categoria);
    
    const imagen = document.querySelector("#ImagenUpdate");
    imagen.setAttribute("placeholder",img_categoria);
}

const updateFormulario = document.querySelector("#formularioUpdate");
updateFormulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    updateCategoria();
})

function updateCategoria(){
    // Se selecciona el lugar en el que esta el id guardado en la etiqueta 
    const nombre = document.querySelector("#CategoriaNombreUpdate");
    // Se selecciona el id y se parsea
    const id = parseInt(nombre.getAttribute('idCat'));

    const CategoriaNombre = document.querySelector("#CategoriaNombreUpdate").value;
    const descripcion = document.querySelector("#DescripcionUpdate").value;
    const imagen = document.querySelector("#ImagenUpdate").value;


    const categoria = {
        nombre_categoria: CategoriaNombre,
        descripcion_categoria: descripcion,
        img_categoria: imagen
    }

    if(validation(categoria)){
        alert("Todos los datos son obligatorios");
        // Se retorna la validacion y el id en conjunto
    } return editarCategory(categoria,id);
}