import React from 'react';

import classes from './NavigationLinks.module.css';
import NavigationLink from './NavigationLink/NavigationLink';

const navigationLinks = props => {
    let links = (
        <>
            <NavigationLink link="/">Home</NavigationLink>
            <NavigationLink link="/signup">Sign up</NavigationLink>
            <NavigationLink link="/signin">Sign in</NavigationLink>
        </>
    );

    if (props.isAuth) {
        links = (
            <>
                <NavigationLink link="/note">Note</NavigationLink>
                <NavigationLink link="/">New note</NavigationLink>
                <NavigationLink link="/diary">Diary</NavigationLink>
                <NavigationLink link="/logout">Logout</NavigationLink>
            </>
        );
    };
    
    return (
        <ul className={classes.NavigationLinks}>
            {links}
        </ul>
    );
};

export default navigationLinks;