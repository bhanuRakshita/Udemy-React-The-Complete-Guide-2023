// Exercise: Updating State Based On Older State
// Your task is to build a basic counter that should increment whenever the "Increment" button is clicked.

import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    function clickHandler(){
        setCounter(prevState=>prevState+1)
    }
    
    const [counter, setCounter] = React.useState(0);
    return (
      <div>
        <p id="counter">{counter}</p>
        <button onClick={clickHandler}>Increment</button>
      </div>
    );
}
