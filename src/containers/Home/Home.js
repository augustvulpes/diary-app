import React, { Component } from 'react';

import classes from './Home.module.css';

class Home extends Component {

    render() {
        return (
            <div>
                <div className={classes.Description}>
                    <h1>Diary App</h1>
                    <p>You can use this app for making some notes,
                        writing your thoughts, plans and other 
                        great things</p>
                    <h2>I hope you will enjoy!</h2>
                </div>
            </div>
        )
    }
}

export default Home;