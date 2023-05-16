/* Form y config */
const cate = document.querySelector('#cate')
const ans = document.querySelector('#ans')
const url = 'http://localhost:4001'
const config = {
    headers: new Headers({
        'Content-Type': 'application/json'
    })
}
/* funciones */
const addCate= async (e)=> {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    config.method = "POST"
    config.body = JSON.stringify(data)
    let info = await fetch(`${url}/categorias`, config)
    showCate()
}
async function delCate(e){
    let info = e.target.value;
    config.method = "DELETE"
    let peticion = await fetch(`${url}/categorias/${info}`, config)
    showCate()
} 

const showCate = async()=> {
    let info = await fetch(`${url}/categorias`)
    let data = await info.json(`${url}/categorias`, config)
    data.forEach(element => {
        let plantilla=`
        <tr>
        <th>${element.id}</th>
        <th>${element.category}</th>
        <th><button type="button" id="delete" onclick="delCate(event)" value="${element.id}" class="btn btn-danger">Borrar</button></th></tr>`
        ans.innerHTML +=  plantilla
    });
}



showCate()
cate.addEventListener('submit', addCate)