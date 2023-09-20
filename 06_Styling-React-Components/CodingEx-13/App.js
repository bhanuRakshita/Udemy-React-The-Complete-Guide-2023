import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [toggleValue, setToggleValue] = React.useState(false)
    function onClichHandler() {
        setToggleValue(!toggleValue)
    }
    return (
        <div>
            <p style={{'color': toggleValue?'red':'white'}}>Style me!</p>
            <button onClick = {onClichHandler}> Toggle style</button>
        </div>
    );
}
