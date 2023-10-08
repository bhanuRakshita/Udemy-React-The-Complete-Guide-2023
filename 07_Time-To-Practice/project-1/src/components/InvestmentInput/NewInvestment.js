import InvestmentForm from "./InvestmentForm";

const NewInvestment = (props) => {

    const calculateHandler = (userInput) => {
        const yearlyData = []; // per-year results
        let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
        const yearlyContribution = +userInput['yearlySavings']; // as mentioned: feel free to change the shape...
        const expectedReturn = +userInput['expectesInterest'] / 100;
        const duration = +userInput['investmentDuration'];

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                // feel free to change the shape of the data pushed to the array!
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
                initialInvestment: userInput.currentSavings
            });
        }
        // do something with yearlyData ...
        props.onInvest(yearlyData, currentSavings);

    };

    return (
        <div>
            <InvestmentForm onCalculate={calculateHandler} />
        </div>
    )
}

export default NewInvestment;