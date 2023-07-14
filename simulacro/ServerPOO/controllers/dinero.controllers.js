
const getMoney = async (req, res) => {
    try {
        res.send({"message":"Hello World! this is the server"})
    } catch (error) {
        console.log(error)
    }
}

const postMoney = async (req, res) => {
    res.json(
        {
            "message":"POST API"
        }
    )
}

const delMoney = async (req, res) => {
    res.json(
        {
            "message":"DELETE API"
        }
    )
}

const putMoney = async (req, res) => {
    res.json(
        {
            "message":"PUT API"
        }
    )
}

export const methMoney = {
    getMoney,
    postMoney,
    delMoney,
    putMoney
}