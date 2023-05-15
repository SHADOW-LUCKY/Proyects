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

/* function delCate(e){
   e.preventDefault();
       let id = e.target.value
       config.method = "DELETE"
       let info = fetch(`${url}/categorias/${id}`, config)
       showCate()
} */

const showCate = async()=> {
    let info = await fetch(`${url}/categorias`)
    let data = await info.json()
    data.forEach(element => {
        let plantilla=`
        <tr>
        <th>${element.id}</th>
        <th>${element.category}</th>
        <th><button type="button" id="delete" onclick="delCate(this)" value="${element.id}" class="btn btn-danger">Borrar</button></th></tr>`
        ans.innerHTML +=  plantilla
    });
}



showCate()
cate.addEventListener('submit', addCate)