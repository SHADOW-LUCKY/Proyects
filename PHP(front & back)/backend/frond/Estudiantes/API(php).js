const url = "http://localhost/ArTeM01-044/Proyects/PHP(front%20&%20back)/backend/controles/campers.php?op=GetAll"


export const getEstudaintes = async () =>{
    try{
        const result = await fetch (url);
        const datosUsuarios = await result.json();
        return datosUsuarios;
        
    }
    catch(error){
        console.log(error);
    }
}
