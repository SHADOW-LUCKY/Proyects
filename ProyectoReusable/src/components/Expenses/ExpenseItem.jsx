import React, { useState } from "react";
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './css/ExpenseItem.css';
function ExpenseItem(p) {
    const [title,setTitle] = useState(p.title)
    const handleClick = () => {
        setTitle('changed')
        console.log(title);
    }
    
    return (
       <Card className="expense-item">
        <ExpenseDate date={p.date}/>
        <div className="expense-item__description">
            <h3>{title}</h3>
            <div className="expense-item__price">${p.amount}</div>
            <button onClick={handleClick}>change title</button>
        </div>
       </Card> 
    )
};

export default ExpenseItem