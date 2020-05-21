import React, { Component } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerHandler = () => {
        this.setState(prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    };
    
    render() {
        return (
            <>
            <Toolbar drawerToggleClicked={this.sideDrawerHandler} />
            <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
            </>
        );
    };
};

export default Layout;