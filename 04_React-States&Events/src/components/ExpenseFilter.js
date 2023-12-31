import React, { useState } from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const [selectedYear, setSelectedYear] = useState('2022');
    function yearChangeHandler (event) {
        setSelectedYear(event.target.value)
        props.onYearChange(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={yearChangeHandler} value={selectedYear}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;