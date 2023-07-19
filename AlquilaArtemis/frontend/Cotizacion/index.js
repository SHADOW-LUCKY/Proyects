import { obtainCotizaciones, nuevoCotizacion, deleteCotizacion, obtenerCotizacion, editarCotizacion } from "./API.js";

const coti = document.querySelector("#cotization");

document.addEventListener("DOMContentLoaded", () => {
    cargarCotizaciones();
});

/* LISTAR CATEGORIAS  - CRUD (R) */

async function cargarCotizaciones(){
    const cotizaciones = await obtainCotizaciones();
    cotizaciones.forEach(element => {
        const plantilla = `
        <tr>
        <td>${element.id_cotizacion}</td>
        <td>${element.nombre_empleado}</td>
        <td>${element.nombre_constructora}</td>
        <td>${element.fecha_cotizacion}</td>
        <td>${element.hora_cotizacion}</td>
        <td>${element.dia_alquiler}</td>
        <td>${element.duracion_alquiler}</td>
        <td><a class="btn btn-warning update" id=${element.id_cotizacion} data-bs-toggle="modal"
        data-bs-target="#updateCotization" >Editar</a></td>
        <td><button class="btn btn-danger delete" id="${element.id_cotizacion}">Eliminar</button></td>
    </tr>
    `;
    coti.innerHTML+=plantilla; 
    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.getElementById("formularioCotizaciones");
formulario.addEventListener('submit',nuevoCotizaciones);

function nuevoCotizaciones(e){
    e.preventDefault();
    const fk_id_empleado  = document.querySelector("#EmpleadoNombre").value;
    const fk_id_constructora  = document.querySelector("#ConstructoraNombre").value;
    const fecha_cotizacion = document.querySelector("#Fecha").value;
    const hora_cotizacion = document.querySelector("#Hora").value;
    const dia_alquiler = document.querySelector("#Dia").value;
    const duracion_alquiler = document.querySelector("#Duracion").value;
    
    const registro={
        fk_id_empleado ,
        fk_id_constructora ,
        fecha_cotizacion,
        hora_cotizacion,
        dia_alquiler,
        duracion_alquiler
    }

    if(validation(registro)){
        alert("Todos los datos son obligatorios");
    } return nuevoCotizacion(registro);
    
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
}

/* ELIMINAR CATEGORIA  - CRUD (D) */

const eliminar = document.querySelector("#cotization");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if(e.target.classList.contains('delete')){
        const id = e.target.getAttribute('id')
        console.log(id);

        const confirmar = confirm("Desea Eliminarlo?")
        if(confirmar){
            deleteCotizacion(id);
        }
    } else if(e.target.classList.contains('update')){
        const id = e.target.getAttribute('id')
        obtenerCotiza(id);
    }
}

//EDITAR CATEGORIA - CRUD (U)

const obtenerCotiza = async (id)=>{
    const data = await obtenerCotizacion(id);
    const {fk_id_empleado, fk_id_constructora , fecha_cotizacion, hora_cotizacion, dia_alquiler, duracion_alquiler} = data[0];
    console.log(data[0]);
    const idEmpleado = document.querySelector("#EmpleadoNombreUpdate");
    idEmpleado.setAttribute("placeholder",fk_id_empleado );
    idEmpleado.setAttribute("idProd",id);

    const idConstructora = document.querySelector("#ConstructoraNombreUpdate");
    idConstructora.setAttribute("placeholder",fk_id_constructora );
    
    const fecha = document.querySelector("#FechaUpdate");
    fecha.setAttribute("placeholder",fecha_cotizacion);

    const hora = document.querySelector("#HoraUpdate");
    hora.setAttribute("placeholder",hora_cotizacion);

    const dia = document.querySelector("#DiaUpdate");
    dia.setAttribute("placeholder",dia_alquiler);
    dia.setAttribute("idCot",id);

    const duracion = document.querySelector("#DuracionUpdate");
    duracion.setAttribute("placeholder",duracion_alquiler);

}
const updateFormulario = document.querySelector("#formularioUpdate");
updateFormulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    updateProducto();
})
function updateProducto(){
    // Se selecciona el lugar en el que esta el id guardado en la etiqueta 
    const dia = document.querySelector("#DiaUpdate");
    // Se selecciona el id y se parsea
    const id = parseInt(dia.getAttribute('idCot'));
    console.log(id);
    const EmpleadoNombre = document.querySelector("#EmpleadoNombreUpdate").value;
    const ConstructoraNombre = document.querySelector("#ConstructoraNombreUpdate").value;
    const Fecha = document.querySelector("#FechaUpdate").value;
    const Hora = document.querySelector("#HoraUpdate").value;
    const Dia = document.querySelector("#DiaUpdate").value;
    const Duracion = document.querySelector("#DuracionUpdate").value;


    const cotizacion = {
        fk_id_empleado: EmpleadoNombre,
        fk_id_constructora: ConstructoraNombre,
        fecha_cotizacion: Fecha,
        hora_cotizacion: Hora,
        dia_alquiler: Dia,
        duracion_alquiler: Duracion
    }

    if(validation(cotizacion)){
        alert("Todos los datos son obligatorios");
        // Se retorna la validacion y el id en conjunto
    } return editarCotizacion(cotizacion,id);
}