/* REGISTER */
const register = document.querySelector('#register')

let config = {/* methods */
  headers:new Headers({
      "Content-Type": "application/json"
  }), 
};
const postUser = async(e)=> {
  e.preventDefault()
  let data = Object.fromEntries(new FormData(e.target))
  config.method = "POST"
  config.body = JSON.stringify(data)
  let ans = await fetch('http://localhost:4000/usuarios', config)
  console.log(ans)
}

register.addEventListener('submit',(e)=>{
  postUser(e)
} )