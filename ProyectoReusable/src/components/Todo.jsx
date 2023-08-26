
function Todo(props) {
const title = props.title
const description = props.description
const image = props.image
const price = props.price
   return (
        <li className="concept">
         <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <span>${price}</span>
        <button>Buy</button>
        </li>
   ) 
};

export default Todo