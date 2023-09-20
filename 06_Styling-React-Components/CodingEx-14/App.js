import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [toggleValue, setToggleVlaue] = React.useState(true)
    
    function clickHandler(){
        setToggleVlaue(!toggleValue)
    }
    return (
        
        <div>
            <p className={`${toggleValue?'':'active'}`} >Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}
