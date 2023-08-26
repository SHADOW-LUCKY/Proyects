
import Todo from './Todo';
function ListToDo(props) {
    const data = props.concepts
    let all = []
    for (let i = 0; i < data.length; i++) {
        all.push(<Todo title={data[i].title} description={data[i].description} image={data[i].image} price ={data[i].price} />)
    }
    return (
        <ul id="concepts">
           {all}
        </ul>       
    )
};

export default ListToDo;