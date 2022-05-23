import React from 'react';
import './UserOutput.css'
const userOutput=(props)=>{
    return(
        <div className="UserOutput">
            <p>Username:{props.userName}</p>
            <p>i hope i will be overidden</p>
        </div>
    );
}
export default userOutput;