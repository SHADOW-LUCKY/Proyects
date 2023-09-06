import ExpenseForm from "./ExpenseForm"
import { useState } from 'react'
import './css/NewExpense.css'
import './css/ExpenseForm.css'          
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)


    const saveDataHandler = (expenseData) => {
        const expData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expData)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return(
        <div className="new-expense">
            {
                !isEditing && (<button onClick={startEditingHandler}>Add New Expense</button>)
            }
            {
                isEditing && ( <ExpenseForm onCancel={stopEditingHandler} onSaveExpData={saveDataHandler}/> )
            }
          
        </div>
    )
}

export default NewExpense