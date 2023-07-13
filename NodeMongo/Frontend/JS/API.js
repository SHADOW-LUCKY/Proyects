const url = "http://localhost:4000/"

export const get = async (type) => {
    try {
        const getdata = await fetch(`${url}${type}/all`)
        const data = await getdata.json()
        return data
    } catch (error) {
        return error;
    }
} 
export const post = async (type, data) => {
    try {
        const postdata = await fetch(`${url}${type}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        console.log('it worked');
    } catch (error) {
        return error;
    }
}
export const del = async (type, id) => {
    try {
        const deldata = await fetch(`${url}${type}/del/${id}`, {
            method: 'DELETE'
        })
        console.log('it worked');
    } catch (error) {
        return error;
    }
}