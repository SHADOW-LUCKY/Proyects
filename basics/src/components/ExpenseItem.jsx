import ExpenseDate from './ExpenseDate';
import './css/ExpenseItem.css';
function ExpenseItem({date,title,amount}) {
  
    return (
       <div className="expense-item">
        <ExpenseDate date={date}/>
        <div className="expense-item__description">
            <h3>{title}</h3>
            <div className="expense-item__price">${amount}</div>
        </div>
       </div>
    )
};

export default ExpenseItem