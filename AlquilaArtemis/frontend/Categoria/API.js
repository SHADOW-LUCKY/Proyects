const url = "http://localhost:5000/api/categorias/";


export const obtainCategories = async () => {
    try {
        const categorias = await fetch(url);
        const datosCategorias = categorias.json();
        return datosCategorias;
    } catch (error) {
        console.log(error);
    }
}

export const nuevaCategoria = async (categoria) => {
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
}


export const deleteCategory = async (id) => {
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
}



export const obtenerCategory = async (id) => {
    try {
        const CategoryId = await fetch(`${url}/${id}`);
        const result = await CategoryId.json();
        return result;
      } catch (error) {
        console.log(error);
      }
}



export const editarCategory = async (category,id) => {
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
}





