import React, { Component } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    render() {
        return (
            <>
            <Toolbar />
            <main className={classes.Content}>
                {this.props.children}
            </main>
            </>
        );
    };
};

export default Layout;