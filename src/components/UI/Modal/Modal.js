import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    render() {
        let classList = [classes.Modal];

        if (this.props.show) {
            classList.push(classes.Show);
        };
        
        return (
            <>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={classList.join(' ')}>
                    {this.props.children}
                </div>
            </>
        );
    };
};

export default Modal;