import React from 'react';

import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import Backgrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Closed];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Opened]
    };

    return (
        <>
        <Backgrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(' ')}>
            <div>
                <Logo />
            </div>
            <nav onClick={props.closed}>
                <NavigationLinks />
            </nav>
        </div>
        </>
    );
};

export default sideDrawer;