//Exercise: Using State with Form Inputs

import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [validity, setValidity] = React.useState('Invalid message');
    function textChangeHandler(event){
    console.log(event.target.value.length);
    if(event.target.value.length>=3){
        setValidity("Valid message")
    } else {
        setValidity("Invalid message")
    }
    }
    
    
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={textChangeHandler}/>
            <p>{validity}</p>
        </form>
    );
}