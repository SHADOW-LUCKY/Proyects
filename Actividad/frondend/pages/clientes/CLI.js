
const url="http://localhost/SkylAb-154/Proyects/Actividad/backend/controller.clientes.php?op=GetCli"
const urlnew="http://localhost/SkylAb-154/Proyects/Actividad/backend/controller.clientes.php?op=InsertCli"



export const getCli = async () => {
    try {
        const clientes = await fetch(url)
        const data = await clientes.json()
        return data 
    } catch (error) {
        return error;
    }
}

export const AddCli = async (register) => {
    try {
        await fetch(urlnew, {
            method: 'POST',
            body: JSON.stringify(register),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
    } catch (error) {
        console.log(error);
    }
}
/* const eliminar=document.querySelector('#datosClientes')
eliminar.addEventListener('click',borrar)
function borrar(e) {
    if(e.target.classList.contains('delete')){
        console.log(e.target);
        const idCliente = e.target.getAttribute('id')
        console.log(idCliente);
        const confir = confirm("desea eliminarlo?")
        if (confir) {
            deleteCliente(idCliente)
        }
    } */