function Todo(props) {
const title = props.title
const description = props.description
const image = props.image
   return (
    <div>
        <ul id="data">
        <li className="concept">
         <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        </li>
        </ul>
    </div>
   ) 
};

export default Todo