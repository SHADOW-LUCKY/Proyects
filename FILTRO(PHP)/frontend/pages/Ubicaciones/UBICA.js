const urlPais = 'http://localhost/ArTeM01-044/Proyects/FILTRO(PHP)/backend/controllers/controllers.pais.php?op=GetPais';
const urlDep ='http://localhost/ArTeM01-044/Proyects/FILTRO(PHP)/backend/controllers/controllers.departamento.php?op=GetDep';
const urlReg = 'http://localhost/ArTeM01-044/Proyects/FILTRO(PHP)/backend/controllers/conrtrollers.region.php?op=GetReg';
const urlAddPais='http://localhost/ArTeM01-044/Proyects/FILTRO(PHP)/backend/controllers/controllers.pais.php?op=insPais';
const urlAddDep ='http://localhost/ArTeM01-044/Proyects/FILTRO(PHP)/backend/controllers/controllers.departamento.php?op=insDep';
const urlAddReg ='http://localhost/ArTeM01-044/Proyects/FILTRO(PHP)/backend/controllers/conrtrollers.region.php?op=insReg';
const urlDelPais ='http://localhost/ArTeM01-044/Proyects/FILTRO(PHP)/backend/controllers/controllers.pais.php?op=delPais';
const urlDelDep ='http://localhost/ArTeM01-044/Proyects/FILTRO(PHP)/backend/controllers/controllers.departamento.php?op=delDep';
const urlDelReg ='http://localhost/ArTeM01-044/Proyects/FILTRO(PHP)/backend/controllers/conrtrollers.region.php?op=delReg';
/* obtenemos datos */
export const getPais = async () => {
    try {
        const paises = await fetch(urlPais)
        const data = await paises.json()
        return data
    } catch (error) {
        return error;
    }
}
export const getDep = async () => {
    try {
        const departamentos = await fetch(urlDep)
        const data = await departamentos.json()
        return data
    } catch (error) {
        return error;
    }
}
export const getReg = async () => {
    try {
        const regiones = await fetch(urlReg)
        const data = await regiones.json()
        return data
    } catch (error) {
        return error;
    }
}
/* insertamos datos */
export const AddPais = async (register) => {
    try {
        await fetch(urlAddPais, {
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
export const AddDep = async (register) => {
    try {
        await fetch(urlAddDep, {
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
export const AddReg = async (register) => {
    try {
        await fetch(urlAddReg, {
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
/* BORRAMOS DATOS */
export const DelPais = async(idPais)=>{
    try {
        await fetch(urlDelPais,{
            body: JSON.stringify(idPais),
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}
export const DelDep = async(idDep)=>{
    try {
        await fetch(urlDelDep,{
            body: JSON.stringify(idDep),
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}
export const DelReg = async(idReg)=>{
    try {
        await fetch(urlDelReg,{
            body: JSON.stringify(idReg),
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}