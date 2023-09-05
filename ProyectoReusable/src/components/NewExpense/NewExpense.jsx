import ExpenseForm from "./ExpenseForm"
import './css/NewExpense.css'
import './css/ExpenseForm.css'          
const NewExpense = (props) => {

    const saveDataHandler = (expenseData) => {
        const expData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expData)
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpData={saveDataHandler}/>
        </div>
    )
}

export default NewExpense