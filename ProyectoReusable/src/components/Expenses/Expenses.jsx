import React from "react";
import {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import './css/Expenses.css'

function Expenses(props) { 

    const item = props.expenses

    const [filteredYear, setFilterYear] = useState("2023");

    const filterChangeHandler = (selectedYear) => {
      setFilterYear(selectedYear);
    };

    return (
        <div className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {item.map(expense => (
                <ExpenseItem  title={expense.title} amount={expense.amount} date={expense.date}/>
            ))}
        </div>
    )
}

export default Expenses