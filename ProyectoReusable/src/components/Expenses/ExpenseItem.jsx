import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './css/ExpenseItem.css';
function ExpenseItem(p) {
 
    
    return (
       <Card className="expense-item">
        <ExpenseDate date={p.date}/>
        <div className="expense-item__description">
            <h3>{p.title}</h3>
            <div className="expense-item__price">${p.amount}</div>
        </div>
       </Card> 
    )
};

export default ExpenseItem