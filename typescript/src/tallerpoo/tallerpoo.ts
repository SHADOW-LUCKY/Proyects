import readlineSync from 'readline-sync'; 
class centro {
    constructor(
       public nombre :string,
       public descripcion :string,
       public ciudad :string,
       public cantidad?: camper[]
    ){}
    
    public quantity(quant: camper[]) {
        this.cantidad = quant;
      }
    
      public getQuantity(): string {
        const quantity = this.cantidad?.length;
        return `Hay ${quantity} en el centro ${this.nombre}`;

     
}
      
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
        public camper:camper,
        public tipocontrato :string
    ){}
    /* getter */
    get tipo(){
        return this.tipocontrato
    }
    /* metodos */
    tipocon(contract:string){
        if(contract == "presencial"|| contract == "online"){
          this.tipocontrato = contract;  
        }else{
          console.log("tipo contrato no valido");          
        }
    }
   continuecon(camper:camper){
        if ( camper.levelstatus == "pendiente"){
            console.log("el contrato no se ha ejecutado porque no ha terminado el nivel");         
            this.tipocontrato = "inactivo";
        }else{
            console.log("el contrato esta vigente");
            
        }
    } 

}

const centro1 = new centro("Centro 1", "Descripción 1", "Ciudad 1");
const centro2 = new centro("Centro 2", "Descripción 2", "Ciudad 2");


const ruta1 = new ruta("Ruta 1", centro1);
const ruta2 = new ruta("Ruta 2", centro2);
const ruta3 = new ruta("Ruta 3", centro1);
const ruta4 = new ruta("Ruta 4", centro2);

const nivel1 = new nivel("Nivel 1", ruta1, "2 horas");
const nivel2 = new nivel("Nivel 2", ruta2, "3 horas");
const nivel3 = new nivel("Nivel 3", ruta3, "4 horas");
const nivel4 = new nivel("Nivel 4", ruta4, "5 horas");

const camper1 = new camper("Camper 1", centro1, nivel1, "id1", "email1", "pendiente");
const camper2 = new camper("Camper 2", centro2, nivel2, "id2", "email2", "pendiente");
const camper3 = new camper("Camper 3", centro1, nivel3, "id3", "email3", "pendiente");
const camper4 = new camper("Camper 4", centro2, nivel4, "id4", "email4", "pendiente"); 

const contrato1 = new contrato(camper1, "presencial");
const contrato2 = new contrato(camper2, "online");

console.log(contrato1.continuecon(camper2));
console.log(contrato1.tipocontrato);



centro1.quantity([camper1,camper2,camper3,camper4]);
console.log(centro1.getQuantity());