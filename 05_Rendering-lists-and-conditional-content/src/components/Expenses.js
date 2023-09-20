
import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function NewExpenseItems(props) {

    const [selectedYear, setSelectedYear] = useState('2021');

    function filterYearHandler(year) {
        setSelectedYear(year);
    }
    
    let filteredExpenses = props.items.filter(exp=>exp.date.getFullYear()==selectedYear);

    
    return (

        <Card className='expenses'>

            <ExpenseFilter onYearChange={filterYearHandler} selectedYear={selectedYear}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>

        </Card>
    )
}

export default NewExpenseItems;