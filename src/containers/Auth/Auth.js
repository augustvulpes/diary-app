import React, { Component } from 'react';

import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';

class Auth extends Component {
    // state = {

    // }

    render() {
        return (
            <div className={classes.AuthContent}>
                <div className={classes.Warning}>
                    <h1>Please sign up<br />
                        to save this note!</h1>
                </div>
                <div className={classes.Panel}>
                    <form>
                        <input type="email" name="email" placeholder="Email Address..." />
                        <input type="password" name="password" placeholder="Password..." />
                        <Button>Sign up</Button>
                    </form>
                    <Button orange>Switch to sign in</Button>
                </div>
            </div>
        );
    };
};

export default Auth;