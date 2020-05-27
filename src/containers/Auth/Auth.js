import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import { updateObject } from '../../shared/updateObject';

class Auth extends Component {
    state = {
        inputs: {
            email: {
                params: {
                    type: 'email',
                    placeholder: 'Email Address...'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                params: {
                    type: 'password',
                    placeholder: 'Password...'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    };

    inputOnChange = (event, name) => {
        const newInputs = updateObject(this.state.inputs, {
            [name]: updateObject(this.state.inputs[name], {
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.inputs[name].validation),
                touched: true
            })
        });
        this.setState({inputs: newInputs});
    };

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        };

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        };

        return isValid;
    };

    checkButtonStatus = () => {
        let isValid = true;

        for (let key in this.state.inputs) {
            if (!this.state.inputs[key].valid) {
                isValid = false;
            };
        };

        return isValid;
    };

    submitHandler = (event) => {
        event.preventDefault();
    };

    render() {
        const inputsElemArray = [];
        for (let key in this.state.inputs) {
            inputsElemArray.push({
                id: key,
                config: this.state.inputs[key]
            });
        };

        const inputs = inputsElemArray.map(elem => {
            return (
                <input
                    key={elem.id}
                    type={elem.config.params.type}
                    placeholder={elem.config.params.placeholder}
                    onChange={(event) => this.inputOnChange(event, elem.id)}
                    value={elem.config.value} />
            );
        });

        return (
            <div className={classes.AuthContent}>
                <div className={classes.Warning}>
                    <h1>Please {this.props.signin ? 'sign in' : 'sign up'}<br />
                        to save this note!</h1>
                </div>
                <div className={classes.Panel}>
                    <form onSubmit={this.submitHandler}>
                        <div className={classes.Inputs}>
                            {inputs}
                        </div>
                        <Button disabled={!this.checkButtonStatus()} >Sign up</Button>
                    </form>
                    <NavLink to={this.props.signin ? '/signup' : '/signin'}>
                        <Button orange>Switch to {this.props.signin ? 'sign up' : 'sign in'}</Button>
                    </NavLink>
                </div>
            </div>
        );
    };
};

export default Auth;