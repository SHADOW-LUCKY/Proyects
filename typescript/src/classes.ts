import axios from "axios";
import {APISpacexResponse} from "./interface/apispacex_response_interface";
class Astronauta {
    constructor(
        public readonly id: number,
        public nombre: string,
        private _record: string,
        public reward: string,
        public mission: string[] = []
    ){}
    
    /* setter */
    set record(record: string){
        this._record = record
    }
    /* getter */
    get record(){
        return this._record
    }

    /* metodos */
    public recompensa(reward: string){
      if (reward == "artemis"){
          console.log(`gano 5 millones`)
      }else{
          console.log(`gano 1 millon`)
      }
    };
    async getLaunches(){
        const launches = "https://api.spacexdata.com/v3/launches"
        const {data} = await axios.get<APISpacexResponse[]>(launches)
        data.forEach((element: any) => {
            const {mission_name} = element
            this.mission.push(mission_name)
        });
        console.log(this.mission);
        return this.mission
    }

}

/* export default Astronauta; */
const astro1 = new Astronauta(1, "Juan", "100","artemis");
const astro2 = new Astronauta(2, "Pedro", "200","alo");

/* console.log(`record b: ${astro1.record}`);
astro1.record = "300";
console.log(`record a: ${astro1.record}`);

astro1.recompensa(astro1.reward);  */
console.log(astro1.getLaunches());


class detalles {
    constructor(
      public nombre :string,
      public descripcion :string,
      public fechaCreacion :Date  
    ){}
    get year(){
        return this.fechaCreacion.getFullYear();
    }
}

class cohete extends detalles {
    constructor(
        public orbita :string,
        public nombre :string,
        public descripcion :string,
        public fechaCreacion :Date  
    ){
        super(nombre, descripcion, fechaCreacion);
    }
}

let cohete1 = new cohete("luz" , "Fantasma", "es un cohete que se encuentra en el espacio", new Date());

/* console.log(cohete1.year); */
