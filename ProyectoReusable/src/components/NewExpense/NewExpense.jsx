import ExpenseForm from "./ExpenseForm"
import './css/NewExpense.css'
import './css/ExpenseForm.css'          
const NewExpense = () => {
    return(
        <div className="new-expense">
            <ExpenseForm />
        </div>
    )
}

export default NewExpense