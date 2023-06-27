
const url="http://localhost/tests/Proyects/Actividad/backend/controller.clientes.php?op=GetCli"
const urlnew="http://localhost/tests/Proyects/Actividad/backend/controller.clientes.php?op=InsertCli"
const urldel="http://localhost/tests/Proyects/Actividad/backend/controller.clientes.php?op=DeleteCli"


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
export const DelCli = async(idCliente)=>{
    try {
        await fetch(urldel,{
            body: JSON.stringify(idCliente),
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}