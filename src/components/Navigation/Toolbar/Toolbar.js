import React from 'react';

import classes from './Toolbar.module.css';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import NavigationLink from '../NavigationLinks/NavigationLink/NavigationLink';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => {
    const classList = [classes.Toolbar];
    
    return (
        <header className={classList.join(' ')}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={classes.Info}>
                <Logo width="60px" />
                <div className={classes.DesktopOnly}><NavigationLink link='/info'>Info</NavigationLink></div>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationLinks isAuth={props.isAuth} />
            </nav>
        </header>
    );
};

export default toolbar;