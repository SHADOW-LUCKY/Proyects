const url = 'http://localhost:4001'
const ans = document.querySelector('#ans')
const config = {
    headers: new Headers({
        'Content-Type': 'application/json'
    })
}
const showUser = async()=> {
    let info = await fetch(`${url}/usuarios`)
    let data = await info.json()
    data.forEach(element => {
        let plantilla = `<tr>
        <th>${element.id}</th>
        <th>${element.empleado}</th>
        <th>${element.username}</th>
        <th>${element.email}</th>
        <th><button type="button" id="delete" onclick="delUser(event)" value="${element.id}" class="btn btn-danger">Borrar</button></th></tr>`
        ans.innerHTML +=  plantilla
    });
}

const delUser = async(e) => {
    let verifyUser = await fetch(`${url}/usuarios`)
    let data = await verifyUser.json()
    if (data.length == 1) {
        alert('mi loco no puede hacer eso')
    }else{
        let info = e.target.value
        config.method = "DELETE"
        let peticion = await fetch(`${url}/usuarios/${info}`, config)
        showUser()
    }
    
}
showUser()