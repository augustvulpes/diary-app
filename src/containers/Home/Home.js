import React, { Component } from 'react';

import classes from './Home.module.css';
import NewPost from '../NewPost/NewPost';

class Home extends Component {

    render() {
        return (
            <div className={classes.HomeContent}>
                <div className={classes.Description}>
                    <h1>Diary App</h1>
                    <p>You can use this app for making some notes,<br/>
                        writing your thoughts, plans and other<br />
                        great things</p>
                    <h2>I hope you will enjoy!</h2>
                </div>
                <NewPost />
            </div>
        );
    };
};

export default Home;