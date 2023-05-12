/* REGISTER */
const register = document.querySelector('#register')
/* login */
const login = document.querySelector('#userver')
/* url */
const url = 'http://localhost:4001'
let config = {/* methods */
  headers:new Headers({
      "Content-Type": "application/json"
  }), 
};
/* post */
const postUser = async(e)=> {
  e.preventDefault()
  let data = Object.fromEntries(new FormData(e.target))
  config.method = "POST"
  config.body = JSON.stringify(data)
 let ans = await fetch(`${url}/usuarios`, config)
  console.log(ans)
}
/* verify */
const verify = async(e)=> {
e.preventDefault()
let data = Object.fromEntries(new FormData(e.target))
let userVer = await fetch(`${url}/usuarios`) 
let verify = await userVer.json()
console.log(data)
if (verify == false){
  alert('no hay datos')
}else{
  let token = false
  verify.forEach((log) => {
    if (data.userVer == log.userName && data.passVer == log.password) {
      token = true
    }
  });
  if (token == true) {
    window.location.href = 'html/dash.html'
  }else{
    alert('usuario o contraseña incorrecta')
  }
} 

}
login.addEventListener('submit', verify)
register.addEventListener('submit', postUser)