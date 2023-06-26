
const url="http://localhost/ArTeM01-044/Proyects/Actividad/backend/controller.clientes.php?op=GetCli"
const urlnew="http://localhost/ArTeM01-044/Proyects/Actividad/backend/controller.clientes.php?op=InsertCli"



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