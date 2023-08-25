import '../index.css';
import Todo from './Todo';
function ListToDo(props) {
    const data = props.concepts
    let all = []
    for (let i = 0; i < data.length; i++) {
        all.push(<Todo key={i} title={data[i].title} description={data[i].description} image={data[i].image} />)
    }
    return (
        <div>
            {all}
        </div>       
    )
};

export default ListToDo;