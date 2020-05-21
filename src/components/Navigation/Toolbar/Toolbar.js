import React from 'react';

import classes from './Toolbar.module.css';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import NavigationLink from '../NavigationLinks/NavigationLink/NavigationLink';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={classes.Info}>
                <Logo width="60px" />
                <div className={classes.DesktopOnly}><NavigationLink link='/info'>Info</NavigationLink></div>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationLinks />
            </nav>
        </header>
    );
};

export default toolbar;