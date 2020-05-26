import React from 'react';

import classes from './Button.module.css'

const button = props => {
    const classList = [classes.Button];

    if (props.orange) {
        classList.push(classes.Orange);
    };
    
    return (
        <button
            disabled={props.disabled}
            className={classList.join(' ')}
            onClick={props.clicked}>{props.children}</button>
    );
};

export default button;