import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

export default function NewExpense(props) {

    const [showForm, setShowForm] = useState(false);

    function saveExpenseDataHandler(enteredExpensedata) {
        const expenseData = {
            ...enteredExpensedata,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
        setShowForm(false)
    }

    function addExpenseClickHandler() {
        setShowForm(true)
    }

    let content = <button onClick={addExpenseClickHandler}>Add New Expense</button>;

    if (showForm === true) {
        content = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={()=>setShowForm(false)}/>
    }

    return (
        <div className='new-expense'>
            {content}
        </div>
    )
}