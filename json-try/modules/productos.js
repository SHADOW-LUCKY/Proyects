/* url ,select y formluario */
const url = 'http://localhost:4001'
const select = document.querySelector('#select')
const form = document.querySelector('#form')
const ans = document.querySelector('#ans')
/* config */
const config = {
    headers: new Headers({
        'Content-Type': 'application/json'
    })
}
/* funcion para las opciones de select */
async function optPut(){
    let info = await fetch(`${url}/categorias`)
    let data = await info.json()
    if (data == false){
        console.log('no hay datos');
        select.innerHTML += `<option value="N/A">No hay categorias</option>`
    }else{
     data.forEach(element => {
        let plantilla = `<option  value="${element.categoria}">${element.categoria}</option>`
        select.innerHTML += plantilla
     });
    }
}
/* funcion para agregar proceso */
async function addProc(e){
    e.preventDefault()
    let info = Object.fromEntries(new FormData(e.target));
    config.method= 'POST'
    config.body = JSON.stringify(info)
    let peticion = await fetch(`${url}/productos`,config)
    showProc()
}
async function showProc() {
    let info = await fetch(`${url}/productos`)
    let data = await info.json()
    data.forEach(element => {
        let plantilla=`
        <tr>
        <th>${element.id}</th>
        <th>${element.categoriaElec}</th>
        <th>${element.nombre}</th>
        <th>${element.price}$</th>
        <th><button type="button" id="delete" onclick="delProc(event)" value="${element.id}" class="btn btn-danger">Borrar</button></th></tr>`
        ans.innerHTML +=  plantilla
    });
}
/* funcion para eliminar proceso */
async function delProc(e){
    e.preventDefault()
    let id = e.target.value
    config.method= 'DELETE'
    let peticion = await fetch(`${url}/productos/${id}`,config)
    showProc()
}

form.addEventListener('submit',addProc)
optPut()
showProc()