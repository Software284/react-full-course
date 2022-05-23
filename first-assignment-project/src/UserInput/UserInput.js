import React from 'react';
import './UserInput.css';
const userInput= (props) =>{
    const inputStyle={
        border:'2px solid red'
    };
    return <input type="text" onChange={props.changed} value={props.currentName} style={inputStyle} />;
}
export default userInput;