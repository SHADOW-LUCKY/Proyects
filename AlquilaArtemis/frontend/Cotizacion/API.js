const url = "http://localhost:5000/api/cotizaciones/";


export const obtainCotizaciones = async () => {
    try {
        const cotizaciones = await fetch(url,{
            method: "GET"
        });
        const datosCotizaciones = cotizaciones.json();
        return datosCotizaciones;
    } catch (error) {
        console.log(error);
    }
};


export const nuevoCotizacion = async (cotizacion) => {
    try {
        await fetch(url,{
            method: "POST",
            body: JSON.stringify(cotizacion),
            headers:{
                'Content-Type':'application/json'
            }
        })
        location.reload();
    } catch (error) {
        console.log(error);
    }
};


export const deleteCotizacion = async (id) => {
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



export const obtenerCotizacion = async (id) => {
    try {
        const CotizacionId = await fetch(`${url}/${id}`);
        const result = await CotizacionId.json();
        return result;
      } catch (error) {
        console.log(error);
      }
};



export const editarCotizacion = async (cotization,id) => {
    try {
        await fetch(`${url}/${id}`,{
          method: 'PUT',
          body: JSON.stringify(cotization),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      location.reload();
      } catch (error) {
        console.log(error);
      }
};





