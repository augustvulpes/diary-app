import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    satte = {
        showSideDrawer: false
    }
    
    render() {
        return (
            <>
            <Toolbar />
            <main>
                {this.props.children}
            </main>
            </>
        );
    };
};

export default Layout;