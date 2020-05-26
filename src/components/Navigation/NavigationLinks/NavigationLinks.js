import React from 'react';

import classes from './NavigationLinks.module.css';
import NavigationLink from './NavigationLink/NavigationLink';

const navigationLinks = props => {
    return (
        <ul className={classes.NavigationLinks}>
            <NavigationLink link="/">Home</NavigationLink>
            <NavigationLink link="/diary">Diary</NavigationLink>
            <NavigationLink link="/signup">Sign up</NavigationLink>
        </ul>
    );
};

export default navigationLinks;