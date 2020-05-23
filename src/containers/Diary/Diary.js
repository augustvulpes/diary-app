import React, { Component } from 'react';

import classes from './Diary.module.css';
import DiaryPost from '../../components/DiaryPost/DiaryPost';

class Diary extends Component {
    render() {
        return (
            <div className={classes.Diary}>
                <DiaryPost />
                <DiaryPost />
            </div>
        );
    };
};

export default Diary;