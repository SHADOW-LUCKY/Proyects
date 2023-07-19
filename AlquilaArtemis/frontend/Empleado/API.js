const url = "http://localhost:5000/api/empleados/";


export const obtainEmpleados = async () => {
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


export const nuevaEmpleado = async (categoria) => {
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


export const deleteEmpleado = async (id) => {
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



export const obtenerEmpleado = async (id) => {
    try {
        const EmployeeId = await fetch(`${url}/${id}`);
        const result = await EmployeeId.json();
        return result;
      } catch (error) {
        console.log(error);
      }
};



export const editarEmpleado = async (category,id) => {
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





