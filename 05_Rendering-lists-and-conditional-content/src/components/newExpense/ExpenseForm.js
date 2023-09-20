import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     eneteredAmount: '',
    //     enteredDate: ''
    // });

    // function titleChangeHandler(event) {
    //     setEnteredTitle(event.target.value);
    //     // setUserInput((prevState) => {
    //     //     return {...prevState, enteredTitle: event.target.value}
    //     // })
    // };

    // function amountChangeHandler(event) {
    //     setEnteredAmount(event.target.value);
    //     // setUserInput((prevState) => {
    //     //     return {...prevState, enteredAmount: event.target.value}
    //     // })
    // }

    // function dateChangeHandler(event) {
    //     setEnteredDate(event.target.value);
    //     // setUserInput((prevState) => {
    //     //     return {...prevState, enteredDate: event.target.value}
    //     // })
    // }

    //We can have one combined function for all this

    function inputChangeHandler(identifier, value) {
        if (identifier === 'title') {
            setEnteredTitle(value);
        } else if (identifier === 'amount') {
            setEnteredAmount(value);
        } else if (identifier === 'date') {
            setEnteredDate(value);
        }
    }

    function submitHandler(event) {
        event.preventDefault();
        const inputValues = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');

        props.onSaveExpenseData(inputValues);

    }

    return (
        <form onSubmit={submitHandler} >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={(event) => inputChangeHandler('title', event.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={(event) => inputChangeHandler('amount', event.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2024-12-31" onChange={(event) => inputChangeHandler('date', event.target.value)} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onCancel} type="button">cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}