const url = "http://localhost:5000/api/constructoras/";


export const obtainConstructoras = async () => {
    try {
        const constructoras = await fetch(url,{
            method: "GET"
        });
        const datosConstructoras = constructoras.json();
        return datosConstructoras;
    } catch (error) {
        console.log(error);
    }
};


export const nuevaConstructora = async (categoria) => {
    try {
        await fetch(url,{
            method: "POST",
            body: JSON.stringify(categoria),
            headers:{
                'Content-Type':'application/json'
            }
        })
        location.reload();
    } catch (error) {
        console.log(error);
    }
};


export const deleteConstructora = async (id) => {
    try {
        await fetch(`${url}/${id}`,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            }
        })
        location.reload();
    } catch (error) {
        console.log(error);
    }
};



export const obtenerConstructora = async (id) => {
    try {
        const ConstructorId = await fetch(`${url}/${id}`);
        const result = await ConstructorId.json();
        return result;
      } catch (error) {
        console.log(error);
      }
};



export const editarConstructora = async (category,id) => {
    try {
        await fetch(`${url}/${id}`,{
          method: 'PUT',
          body: JSON.stringify(category),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      location.reload();
      } catch (error) {
        console.log(error);
      }
};





