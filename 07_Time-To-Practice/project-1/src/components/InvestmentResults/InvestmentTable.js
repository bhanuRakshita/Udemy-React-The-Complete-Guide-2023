import react from 'react';
import Investment from './Investment';
import classes from './InvestmentResults.module.css'

const InvestmentTable = (props) => {
    return (
        <table className={classes.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>YEAR NUMBER</td>
                    <td>TOTAL SAVINGS END OF YEAR</td>
                    <td>INTEREST GAINED IN YEAR</td>
                    <td>TOTAL INTEREST GAINED</td>
                    <td>TOTAL INVESTED CAPITAL</td>
                </tr>
                {props.data.map(inv=>
                    (<Investment 
                        key={inv.year}
                        year={inv.year}
                        savingsEndOfYear={inv.savingsEndOfYear}
                        yearlyInterest={inv.yearlyInterest}
                        yearlyContribution={inv.yearlyContribution}
                        initialInvestment={inv.initialInvestment}
                    />)
                )}
            </tbody>
        </table>
    )
}

export default InvestmentTable;

