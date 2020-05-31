import React, { Component } from 'react';

import classes from './Info.module.css';
import Button from '../../components/UI/Button/Button';

class Info extends Component {
    render() {
        return (
            <div className={classes.InfoContent}>
                <div className={classes.InfoBlock}>
                    <div className={classes.Text}>
                        <h1>Diary App</h1>
                        <p>I develop this app to practise my skills in react,<br/>
                            and I think this diary may be useful for me and other people.<br/>
                            Feel free to tell me your opinion about this app and my code<br/>
                            on my github page!</p>
                        <p>I used: React.js, Redux, Firebase</p>
                    </div>
                    <div className={classes.Text}>
                        <p>Designed and coded by <span>NOLONHUM</span></p>
                        <p>Icons provided by <span>icons8.com</span></p>
                    </div>
                </div>
                <a href="https://github.com/NOLONHUM/diary-app" rel="noopener noreferrer" target="_blank"><Button>Visit GitHub Page</Button></a>
            </div>
        );
    };
};

export default Info;