import { obtainEmpleados, nuevaEmpleado, deleteEmpleado, obtenerEmpleado, editarEmpleado } from "./API.js";

const emplead = document.querySelector("#employees");

document.addEventListener("DOMContentLoaded", () => {
    cargarEmpleados();
});

/* LISTAR CATEGORIAS  - CRUD (R) */

async function cargarEmpleados(){
    const empleados = await obtainEmpleados();
    empleados.forEach(element => {
        const plantilla = `
        <tr>
        <td>${element.id_empleado}</td>
        <td>${element.nombre_empleado}</td>
        <td>${element.email_empleado}</td>
        <td>${element.celular_empleado}</td>
        <td>${element.password_empleado}</td>
        <td><a class="btn btn-warning update" id=${element.id_empleado} data-bs-toggle="modal"
        data-bs-target="#updateEmployees">Editar</a></td>
        <td><button class="btn btn-danger delete" id="${element.id_empleado}">Eliminar</button></td>
    </tr>
    `;
    emplead.innerHTML+=plantilla; 
    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.getElementById("formularioEmpleado");
formulario.addEventListener('submit',nuevoEmpleado);

function nuevoEmpleado(e){
    e.preventDefault();
    const nombre_empleado = document.querySelector("#EmpleadoNombre").value;
    const email_empleado = document.querySelector("#EmpleadoEmail").value;
    const celular_empleado = document.querySelector("#EmpleadoCelular").value;
    const password_empleado = document.querySelector("#EmpleadoPassword").value;
    
    const registro={
        nombre_empleado,
        email_empleado,
        celular_empleado,
        password_empleado
    }

    if(validation(registro)){
        alert("Todos los datos son obligatorios");
    } return nuevaEmpleado(registro);
    
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
}

/* ELIMINAR CATEGORIA  - CRUD (D) */

const eliminar = document.querySelector("#employees");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if(e.target.classList.contains('delete')){
        const id = e.target.getAttribute('id')
        console.log(id);

        const confirmar = confirm("Desea Eliminarlo?")
        if(confirmar){
            deleteEmpleado(id);
        }
    } else if(e.target.classList.contains('update')){
        const id = e.target.getAttribute('id')
        obtenerEmployee(id);
    }
}

//EDITAR CATEGORIA - CRUD (U)

const obtenerEmployee = async (id)=>{
    const data = await obtenerEmpleado(id);
    const {nombre_empleado	, email_empleado, celular_empleado, password_empleado} = data[0];
    console.log(data[0]);
    const nombre = document.querySelector("#EmpleadoNombreUpdate");
    nombre.setAttribute("placeholder",nombre_empleado);
    nombre.setAttribute("idEmpl",id);

    const email = document.querySelector("#EmpleadoEmailUpdate");
    email.setAttribute("placeholder",email_empleado);
    
    const celular = document.querySelector("#EmpleadoCelularUpdate");
    celular.setAttribute("placeholder",celular_empleado);

    const password = document.querySelector("#EmpleadoPasswordUpdate");
    password.setAttribute("placeholder",password_empleado);

}

const updateFormulario = document.querySelector("#formularioUpdate");
updateFormulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    updateEmpleado();
})
function updateEmpleado(){
    // Se selecciona el lugar en el que esta el id guardado en la etiqueta 
    const nombre = document.querySelector("#EmpleadoNombreUpdate");
    // Se selecciona el id y se parsea
    const id = parseInt(nombre.getAttribute('idEmpl'));

    const EmpleadoNombre = document.querySelector("#EmpleadoNombreUpdate").value;
    const EmpleadoEmail = document.querySelector("#EmpleadoEmailUpdate").value;
    const EmpleadoCelular = document.querySelector("#EmpleadoCelularUpdate").value;
    const EmpleadoPassword = document.querySelector("#EmpleadoPasswordUpdate").value;


    const empleado = {
        nombre_empleado: EmpleadoNombre,
        email_empleado: EmpleadoEmail,
        celular_empleado: EmpleadoCelular,
        password_empleado: EmpleadoPassword
    }

    if(validation(empleado)){
        alert("Todos los datos son obligatorios");
        // Se retorna la validacion y el id en conjunto
    } return editarEmpleado(empleado,id);
}