//Exercise: Listening to Events

import React from 'react';

import './styles.css';
// don't change the Component name "App"
export default function App() {
    const clickHandler =()=>{
        console.log('stored!')
    }
    return <button onClick={clickHandler}>Bookmark</button>;
}

