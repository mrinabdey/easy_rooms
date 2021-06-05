import React from 'react';
import './NotFound.css';

const NotFound = (props) => {
    return (
        <div className="not_found_container">{props.children}</div>
    )
}

export default NotFound;