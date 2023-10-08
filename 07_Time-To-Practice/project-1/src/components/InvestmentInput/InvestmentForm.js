import { useState } from "react";
import classes from './InvestmentInput.module.css';

const InvestmentForm = (props) => {

  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectesInterest, setExpectedInterest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");


  function inputChangeHandler(identifier, value) {
    if (identifier === "current-savings") {
      setCurrentSavings(+value);
    } else if (identifier === "yearly-contribution") {
      setYearlySavings(+value);
    } else if (identifier === "expected-return") {
      setExpectedInterest(+value);
    } else if (identifier === "duration") {
      setInvestmentDuration(+value);
    } else {
      throw ('invalid identifier')
    };
  }

  function submitHandler(event) {
    const inputData = {
      currentSavings: currentSavings,
      yearlySavings: yearlySavings,
      expectesInterest: expectesInterest,
      investmentDuration: investmentDuration
    };
    event.preventDefault();
    props.onCalculate(inputData);

  }

  function resetHandler() {
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedInterest("");
    setInvestmentDuration("");
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" value={currentSavings} onChange={(event) => { inputChangeHandler('current-savings', event.target.value) }} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" value={yearlySavings} onChange={(event) => { inputChangeHandler('yearly-contribution', event.target.value) }} />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" value={expectesInterest} onChange={(event) => { inputChangeHandler('expected-return', event.target.value) }} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" avalue={investmentDuration} onChange={(event) => { inputChangeHandler('duration', event.target.value) }} />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" onClick={resetHandler} className={classes.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  )
}

export default InvestmentForm;