// formularios
const empleado = document.querySelector('#empleado');
const cliente = document.querySelector('#cliente');
const producto = document.querySelector('#producto');
const form  = document.querySelector('#form');
// url
const url = 'http://localhost:4001'
// config
const config = {
    headers: new Headers({
        'Content-Type': 'application/json'
    })
}
async function empleados(){
    let info = await fetch(`${url}/usuarios`)
    let data = await info.json()
    if (data == false){
        console.log('no hay datos');
        empleado.innerHTML += `<option value="N/A">No hay categorias</option>`
    }else{
     data.forEach(element => {
        let plantilla = `<option  value="${element.empleado}">${element.empleado}</option>`
        empleado.innerHTML += plantilla
     });
    }
}
async function clientes(){
    let info = await fetch(`${url}/clientes`)
    let data = await info.json()
    if (data == false){
        console.log('no hay datos');
        cliente.innerHTML += `<option value="N/A">No hay categorias</option>`
    }else{
     data.forEach(element => {
        let plantilla = `<option  value="${element.cliente}">${element.cliente}</option>`
        cliente.innerHTML += plantilla
     });
    }
}
async function productos() {
    let info = await fetch(`${url}/productos`)
    let data = await info.json()
    if (data == false){
        console.log('no hay datos');
        producto.innerHTML += `<option value="N/A">No hay categorias</option>`
    }else{
     data.forEach(element => {
        let plantilla = `<option  value="${element.nombre}">${element.nombre}</option>`
        producto.innerHTML += plantilla
     });
    }
}
const addVenta = async(e)=>{
    e.preventDefault();
    let datos = Object.fromEntries(new FormData(e.target));
    config.method='POST'
    config.body = JSON.stringify(datos)
    let data = await fetch(`${url}/ventas`,config);
}
form.addEventListener('submit',addVenta)
clientes()
empleados()
productos()
