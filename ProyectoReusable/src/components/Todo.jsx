function Todo(props) {
const data = props.concepts
   return (
    <div>
        <ul id="data">
        <li className="concept">
         <img src={data[0].image} alt={data[0].title} />
        <h2>{data[0].title}</h2>
        <p>{data[0].description}</p>
        </li>
        </ul>
    </div>
   ) 
};

export default Todo