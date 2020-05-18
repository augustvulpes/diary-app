import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationLink.module.css';

const navigationLink = props => {
    return (
        <li className={classes.NavigationLink}>
            <NavLink
                to={props.link}
                activeClassName={classes.active}
                exact>{props.children}</NavLink>
        </li>
    );
};

export default navigationLink;