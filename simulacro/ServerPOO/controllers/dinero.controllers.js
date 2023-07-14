import dinero from '../models/dinero.js';
const getMoney = async (req, res) => {
   const money = await dinero.find() 
   res.json(money)
}

const postMoney = async (req, res) => {
   
}

const delMoney = async (req, res) => {
  
}

const putMoney = async (req, res) => {
 
}

export const methMoney = {
    getMoney,
    postMoney,
    delMoney,
    putMoney
}