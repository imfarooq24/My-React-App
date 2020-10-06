import React from 'react';
import "./PersonComp.css";

const PersonComp = (props) => {
    return (
        <div className="PersonComp">
            <p onClick={props.click}>Im {props.name}</p>
            <p>And my age is {props.age}</p>
            <input type="text" value={props.name} onChange={props.inputName}/>
        </div>
    )
}

export default PersonComp;