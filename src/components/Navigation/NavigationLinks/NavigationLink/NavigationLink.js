import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationLink.module.css';

const navigationLink = props => {
    let classList = [classes.NavigationLink];

    if (props.mobileOnly) {
        classList.push(classes.MobileOnly);
    };
    
    return (
        <li className={classList.join(' ')}>
            <NavLink
                to={props.link}
                activeClassName={classes.active}
                exact>{props.children}</NavLink>
        </li>
    );
};

export default navigationLink;