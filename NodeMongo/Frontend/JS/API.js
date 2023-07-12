const url = "http://localhost:4000/categorias/all"

export const get = async () => {
    try {
        const getdata = await fetch(url)
        const data = await getdata.json()
        return data
    } catch (error) {
        return error;
    }
} 
