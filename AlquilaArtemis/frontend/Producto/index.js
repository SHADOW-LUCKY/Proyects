import { obtainProductos, nuevoProducto, deleteProducto, obtenerProducto, editarProducto } from "./API.js";

const produc = document.querySelector("#products");

document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
});

/* LISTAR CATEGORIAS  - CRUD (R) */

async function cargarProductos(){
    const productos = await obtainProductos();
    productos.forEach(element => {
        const plantilla = `
        <tr>
        <td>${element.id_producto}</td>
        <td>${element.nombre_producto}</td>
        <td>${element.precio_x_dia}</td>
        <td>${element.stock_producto}</td>
        <td>${element.nombre_categoria}</td>
        <td><a class="btn btn-warning update" id=${element.id_producto} data-bs-toggle="modal"
        data-bs-target="#updateProduct" >Editar</a></td>
        <td><button class="btn btn-danger delete" id="${element.id_producto}">Eliminar</button></td>
    </tr>
    `;
    produc.innerHTML+=plantilla; 
    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.getElementById("formularioProductos");
formulario.addEventListener('submit',nuevoProductos);

function nuevoProductos(e){
    e.preventDefault();
    const nombre_producto = document.querySelector("#ProductoNombre").value;
    const precio_x_dia = document.querySelector("#PrecioXDia").value;
    const stock_producto = document.querySelector("#Stock").value;
    const categoria_producto = document.querySelector("#ProductoCategoria").value;
    
    const registro={
        nombre_producto,
        precio_x_dia,
        stock_producto,
        categoria_producto
    }

    if(validation(registro)){
        alert("Todos los datos son obligatorios");
    } return nuevoProducto(registro);
    
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
}

/* ELIMINAR CATEGORIA  - CRUD (D) */

const eliminar = document.querySelector("#products");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if(e.target.classList.contains('delete')){
        const id = e.target.getAttribute('id')
        console.log(id);

        const confirmar = confirm("Desea Eliminarlo?")
        if(confirmar){
            deleteProducto(id);
        }
    } else if(e.target.classList.contains('update')){
        const id = e.target.getAttribute('id')
        obtenerProductos(id);
    }
}

//EDITAR CATEGORIA - CRUD (U)

const obtenerProductos = async (id)=>{
    const data = await obtenerProducto(id);
    const {nombre_producto	, precio_x_dia, stock_producto, categoria_producto} = data[0];
    console.log(data[0]);
    const nombre = document.querySelector("#ProductoNombreUpdate");
    nombre.setAttribute("placeholder",nombre_producto);
    nombre.setAttribute("idProd",id);

    const precio = document.querySelector("#PrecioXDiaUpdate");
    precio.setAttribute("placeholder",precio_x_dia);
    
    const stocks = document.querySelector("#StockUpdate");
    stocks.setAttribute("placeholder",stock_producto);

    const categoria = document.querySelector("#ProductoCategoriaUpdate");
    categoria.setAttribute("placeholder",categoria_producto);

}
const updateFormulario = document.querySelector("#formularioUpdate");
updateFormulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    updateProducto();
})
function updateProducto(){
    // Se selecciona el lugar en el que esta el id guardado en la etiqueta 
    const nombre = document.querySelector("#ProductoNombreUpdate");
    // Se selecciona el id y se parsea
    const id = parseInt(nombre.getAttribute('idProd'));

    const ProductoNombre = document.querySelector("#ProductoNombreUpdate").value;
    const ProductoPrecio = document.querySelector("#PrecioXDiaUpdate").value;
    const ProductoStock = document.querySelector("#StockUpdate").value;
    const ProductoCategoria = document.querySelector("#ProductoCategoriaUpdate").value;


    const empleado = {
        nombre_producto: ProductoNombre,
        precio_x_dia: ProductoPrecio,
        stock_producto: ProductoStock,
        categoria_producto: ProductoCategoria
    }

    if(validation(empleado)){
        alert("Todos los datos son obligatorios");
        // Se retorna la validacion y el id en conjunto
    } return editarProducto(empleado,id);
}