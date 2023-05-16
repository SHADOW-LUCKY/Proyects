/* url  */
const form = document.querySelector('#form')
const ans = document.querySelector('#ans')
const url = 'http://localhost:4001'
const config = {
    headers: new Headers({
        'Content-Type': 'application/json'
    })
}
/* funcion para añadir clientes */
async function addClient(e) {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    console.log(data)
    config.method = "POST"
    config.body = JSON.stringify(data)
    let info = await fetch(`${url}/clientes`,config)
    showClient()
}
/* funcion para mostrar clientes */
async function showClient() {
    let info = await fetch(`${url}/clientes`)
    data = await info.json()
    if(data == false){
        console.log('no hay datos');
    }else{
        data.forEach(element => {
            let plantilla = `<tr>
            <th>${element.id}</th>
            <th><img src="../imgs/user.png" alt="..." height="30px"></th>
            <th>${element.nombre}</th>
            <th>${element.telefono}</th>
            <th>${element.direccion}</th>
            <th><button type="button" id="delete" onclick="delClient(event)" value="${element.id}" class="btn btn-danger">Borrar</button></th></tr>`
            ans.innerHTML += plantilla
        }) 
    }
}
/* funcion para eliminar clientes */
async function delClient(e) {
    e.preventDefault();
    let id = e.target.value
    config.method = "DELETE"
    let info = await fetch(`${url}/clientes/${id}`,config)
    showClient()
}

form.addEventListener('submit',addClient)
showClient()

