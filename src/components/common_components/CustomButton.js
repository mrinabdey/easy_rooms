import React from 'react';
import './CustomButton.css';

export default function CustomButton(props) {
    return (
        <button className="custom_button" onClick={props.onClick} style={{backgroundColor: props.color}}>{props.buttonText}</button>
    )
}