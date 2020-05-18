import React from 'react';

import classes from './Toolbar.module.css';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import NavigationLink from '../NavigationLinks/NavigationLink/NavigationLink';
import Logo from '../../Logo/Logo';
// Logo, NavigationLinks, DrawerToggle

const toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            {/* DrawerToggle */}
            <div className={classes.Info}>
                <Logo width="60px" />
                <NavigationLink link='/info'>Info</NavigationLink>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationLinks />
            </nav>
        </header>
    );
};

export default toolbar;