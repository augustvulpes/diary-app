import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateObject } from '../../shared/updateObject';
import * as actions from '../../store/actions/index';

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
        this.props.onAuth(this.state.inputs.email.value, this.state.inputs.password.value, this.props.signin);
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

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to="/" />;
        };

        let content = <Spinner />;
        if (!this.props.loading) {
            content = (
                <>
                    {authRedirect}
                    <div className={classes.Warning}>
                        <h1>Please {this.props.signin ? 'sign in' : 'sign up'}<br />
                            to save your notes!</h1>
                    </div>
                    <div className={classes.Panel}>
                        <form onSubmit={this.submitHandler}>
                            <div className={classes.Inputs}>
                                {inputs}
                            </div>
                            <Button disabled={!this.checkButtonStatus()}>
                                {this.props.signin ? 'Sign in' : 'Sign up'}</Button>
                        </form>
                        <NavLink to={this.props.signin ? '/signup' : '/signin'}>
                            <Button orange>Switch to {this.props.signin ? 'sign up' : 'sign in'}</Button>
                        </NavLink>
                    </div>
                </>
            );
        };

        return (
            <div className={classes.ContentWrapper}>
                <div className={classes.AuthContent}>
                    {content}
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.loading,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);