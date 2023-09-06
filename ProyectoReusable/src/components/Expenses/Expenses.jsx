import React from "react";
import {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import './css/Expenses.css'

function Expenses(props) { 

    const item = props.expenses

    const [filteredYear, setFilterYear] = useState("2023");

    const filterChangeHandler = (selectedYear) => {
      setFilterYear(selectedYear);
    };

    const filteredExpenses = item.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
      });

    return (
        <div className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseList items={filteredExpenses}/> 
        </div>
    )
}

export default Expenses