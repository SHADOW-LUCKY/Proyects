import { useState } from "react"

const ExpenseForm = (props) => {

    const[userInput, setUserInput]=useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = e => {
        setUserInput({
            ...userInput,
            enteredTitle: e.target.value
        })
    }
    const amountChangeHandler = e => {
        setUserInput({
            ...userInput,
            enteredAmount: e.target.value
        })
    }
    const dateChangeHandler = e => {
        setUserInput({
            ...userInput,
            enteredDate: e.target.value
        })
    }

   /*  inputChangeHandler = (id,val) => {
        if(id === 'enteredTitle'){
            setUserInput({
                ...userInput,
                enteredTitle: val
            })
        }else if(id === 'enteredAmount'){
            setUserInput({
                ...userInput,
                enteredAmount: val
            })
        }else{
            setUserInput({
                ...userInput,
                enteredDate: val
            })
        }
    } */
    
    const submitHandler = e => {
        e.preventDefault();
        const data = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }

        props.onSaveExpData(data);

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={userInput.enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}  value={userInput.enteredAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userInput.enteredDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm