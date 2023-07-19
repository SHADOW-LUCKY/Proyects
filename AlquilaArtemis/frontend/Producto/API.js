const url = "http://localhost:5000/api/productos/";


export const obtainProductos = async () => {
    try {
        const productos = await fetch(url,{
            method: "GET"
        });
        const datosProductos = productos.json();
        return datosProductos;
    } catch (error) {
        console.log(error);
    }
};


export const nuevoProducto = async (categoria) => {
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


export const deleteProducto = async (id) => {
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



export const obtenerProducto = async (id) => {
    try {
        const ProductoId = await fetch(`${url}/${id}`);
        const result = await ProductoId.json();
        return result;
      } catch (error) {
        console.log(error);
      }
};



export const editarProducto = async (category,id) => {
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





