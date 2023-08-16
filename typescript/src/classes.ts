class Astronauta {
    constructor(
        public readonly id: number,
        public nombre: string,
        private _record: string,
        public reward: string
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

}

const astro1 = new Astronauta(1, "Juan", "100","artemis");
const astro2 = new Astronauta(2, "Pedro", "200","alo");

console.log(`record b: ${astro1.record}`);
astro1.record = "300";
console.log(`record a: ${astro1.record}`);

astro1.recompensa(astro1.reward);
