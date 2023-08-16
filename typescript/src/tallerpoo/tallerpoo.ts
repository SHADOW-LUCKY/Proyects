import readlineSync as rs from 'readline-sync';


class centro {
    constructor(
       public nombre :string,
       public descripcion :string,
       public ciudad :string
    ){}
}
class ruta {
    constructor(
       public nombre :string,
       public centro :centro 
    ){}
    
}
class nivel {
    constructor(
       public nombre :string,
       public ruta :ruta,
       public duracion:string 
    ){}
}
class camper {
    constructor (
        public nombre :string,
        public centro :centro,
        public nivel :nivel,
        public readonly id :string,
        public email :string,
        public levelstatus :string
    ){}
    
}

class contrato {
    constructor (
        public camper :camper,
        public tipocontrato :string
    ){}
    /* getter */
    get tipo(){
        return this.tipocontrato
    }
    /* metodos */
    tipocon(contract){
        if(contract == "presencial"|| contract == "online"){
          this.tipocontrato = contract;  
        }else{
          console.log("tipo contrato no valido");          
        }
    }
    continuecon(){
        if (camper.levelstatus == "pendiente"){
            console.log("el contrato no se ha ejecutado porque no ha terminado el nivel");         
            this.tipocontrato = "inactivo";
        }else{
            console.log("el contrato esta vigente");
            
        }
    }

}


/* programa */
const centros = []
const rutas = []
const niveles = []
const campers = []
const contratos = []

let program = true
while (program == true) {
    let opcion = rs.question("Que quieres hacer?\n1. Crear un centro\n2. Crear una ruta\n3. Crear un nivel\n4. Crear un camper\n5. Crear un contrato\n6. Salir")
    switch (opcion) {
        case "1":
            let nombre = rs.question("Ingresa el nombre del centro:")
            let descripcion = rs.question("Ingresa la descripcion del centro:")
            let ciudad = rs.question("Ingresa la ciudad del centro:")
    }
}

