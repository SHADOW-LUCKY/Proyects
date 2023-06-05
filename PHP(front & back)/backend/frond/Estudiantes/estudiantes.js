import { getEstudaintes } from './API(php).js';
const tabla=document.querySelector('#tabla');
const detalles = document.querySelector('#detalles');
const modales = document.querySelector('#modales');
addEventListener('DOMContentLoaded', cargarEstudiantes)

async function cargarEstudiantes() {
    const estudiantes = await getEstudaintes()
    console.log(estudiantes);
    estudiantes.forEach(element => {
        let plantilla =`<tr class="cards" 
        id="${element.id}"
        nombre="${element.nombre}"  
        promedio="${element.promedio}"
        nivelCAmpus="${element.nivelCAmpus}"
        nivelIngles="${element.nivelIngles}"
        especialidad="${element.especialidad}"
        direccion="${element.direccion}"
        celular="${element.celular}"
        ingles="${element.ingles}"
        Ser="${element.Ser}"
        Review="${element.Review}"
        Skills="${element.Skills}"
        Asistencia="${element.Asitencia}"
        imagen="${element.imagen}"
        >
        <th scope="row" id="${element.id}" >${element.id}</th>
        <th scope="row">${element.nombre}</th>
        <th scope="row">${element.especialidad}</th>
        <th scope="row"><img src="images/${element.imagen}" alt="..." ></th>
        <th scope="row" ><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal${element.id}">
        Notas
      </button></th>
      </tr>
      `
      let modal=`
      <div class="modal fad e" id="modal${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          ${element.id}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
      ` 
        modales.innerHTML+=modal
        tabla.innerHTML+=plantilla
    });
}

    tabla.addEventListener('click',async(e)=>{
        if (e.target.getAttribute('id')) {
            const id = e.target.getAttribute('id')
            const element = document.getElementById(id)

            let idDetale =element.getAttribute('id')
            let nombre =element.getAttribute('nombre')
            let promedio =element.getAttribute('promedio')
            let nivelCAmpus =element.getAttribute('nivelcampus')
            let nivelIngles =element.getAttribute('nivelingles')
            let especialidad =element.getAttribute('especialidad')
            let direccion =element.getAttribute('direccion')
            let celular =element.getAttribute('celular')
            let ingles =element.getAttribute('ingles')
            let Ser =element.getAttribute('Ser')
            let Review =element.getAttribute('Review')
            let Skills =element.getAttribute('Skills')
            let Asitencia =element.getAttribute('asistencia')
            let imagen =element.getAttribute('imagen')
           

            let plantilla=`  
            <h3>Detalles</h3>
            <img src="images/${imagen}" alt="" height="200px">
            <h1>${nombre}</h1>
            <table class="table ">
          <tr>
            <th>nivelCampus</th>
            <th>${nivelCAmpus}</th>
          </tr>
          <tr>
            <th>nivel Ingles</th>
            <th>${nivelIngles}</th>
          </tr>
          <tr>
            <th>especialidad</th>
            <th>${especialidad}</th>
          </tr>
          <tr>
            <th>direccion</th>
            <th>${direccion}</th>
          </tr>
          <tr>
            <th>celular</th>
            <th>${celular}</th>
          </tr>
          <tr>
          </table>
          <div id="echarts" class="charts"></div> 
            `
            
            detalles.innerHTML= plantilla
            const getOpts = (e)=>{
              return{
                tooltip: {
                  trigger: 'item'
                },
                legend: {
                  top: '5%',
                  left: 'center',
                  // doesn't perfectly work with our tricks, disable it
                  selectedMode: false
                },
                series: [
                  {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '70%'],
                    // adjust the start angle
                    startAngle: 180,
                    label: {
                      show: true,
                      formatter(param) {
                        // correct the percentage
                        return param.name + ' (' + param.percent * 2 + '%)';
                      }
                    },
                    data: [
                      { value: ingles, name: 'Ingles' },
                      { value: Ser, name: 'Ser' },
                      { value: Review, name: 'Review' },
                      { value: Skills, name: 'Skills' },
                      { value: Asitencia, name: 'Asistencia' },
                      {
                        // make an record to fill the bottom 50%
                        value: 5 + 5 + 5 + 5 + 5,
                        itemStyle: {
                          // stop the chart from rendering this piece
                          color: 'none',
                          decal: {
                            symbol: 'none'
                          }
                        },
                        label: {
                          show: false
                        }
                      }
                    ]
                  }
                ]
              };  
            }
            const chart1=echarts.init(document.getElementById('echarts'))
            chart1.setOption(getOpts())
        }
    })
