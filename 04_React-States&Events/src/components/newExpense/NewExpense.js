import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

export default function NewExpense(props) {
    function saveExpenseDataHandler(enteredExpensedata){
        const expenseData = {
            ...enteredExpensedata,
            id: 1
        }

        props.onAddExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}