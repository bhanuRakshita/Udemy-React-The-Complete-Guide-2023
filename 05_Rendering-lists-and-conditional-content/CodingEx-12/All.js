import React from 'react';

// don't change the Component name "App"
export default function App() {
    var content = "";
    const [showAlert, setShowAlert] = React.useState(false);
    
    function deleteClickHandler () {
        setShowAlert(true);
    }
    
    function proceedClickHandler () {
        setShowAlert(false);
    }
    
    if(showAlert) {
        content = <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedClickHandler}>Proceed</button>
        </div>
    };
    
    
    
    return (
      <div>
        {content}
        <button onClick={deleteClickHandler} >Delete</button>
      </div>    
    );
}