// formularios
const empleado = document.querySelector('#empleado');
const cliente = document.querySelector('#cliente');
const producto = document.querySelector('#producto');
const form  = document.querySelector('#form');
const ans = document.querySelector('#ans')
const detalle = document.querySelector('#detalle')

// url
const url = 'http://localhost:4001'
// config
const config = {
    headers: new Headers({
        'Content-Type': 'application/json'
    })
}
async function modal(num) {
    let info = await fetch(`${url}/ventas/${num}`)
    let data = await info.json()
    let detalles = `
    <h2>Producto</h2>
    <h3>${data.productoElec}</h3>
    <h2>Cantidad</h2>
    <h3>${data.cantidad}</h3>`    
    detalle.innerHTML=detalles

}
/* mostrar ventas */
async function showVenta(){
    let info = await fetch(`${url}/ventas`)
    let data = await info.json()
   if (data == false ){
    console.log('no hay ventas');
   }else{
    data.forEach(element => {
        let plantilla =` <tr>
        <th>${element.id}</th>
        <th>${element.clienteElec}</th>
        <th>${element.empleadoElec}</th>
        <th>${element.fecha}</th>
        <th><button type="button" data-bs-toggle="modal" data-bs-target="#venta"  onclick="modal(${element.id})"class="btn btn-info">Detalles</button></th>
        <th><button type="button"  onclick="delVenta(event)" value="${element.id}" class="btn btn-danger">Borrar</button></th>
        </tr>` 
        ans.innerHTML+= plantilla
    });
   }
}
/*edit formularios  */
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
/* añadir y quitar ventas */
const addVenta = async(e)=>{
    e.preventDefault();
    let datos = Object.fromEntries(new FormData(e.target));
    config.method='POST'
    config.body = JSON.stringify(datos)
    let data = await fetch(`${url}/ventas`,config);
    showVenta()
}
const delVenta = async(e)=>{
    e.preventDefault()
    let id = e.target.value
    config.method= 'DELETE'
    let peticion = await fetch(`${url}/ventas/${id}`,config)
    showVenta()
}
form.addEventListener('submit',addVenta)
clientes()
empleados()
productos()
showVenta()