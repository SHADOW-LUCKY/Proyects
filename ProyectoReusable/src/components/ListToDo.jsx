import Todo from './components/Todo';
function ListToDo(props) {
    const data = props.concepts
    return (
        <div>
            <Todo title={data[0].title} description={data[0].description} image={data[0].image}/>
            
        </div>       
    )
};

export default ListToDo;