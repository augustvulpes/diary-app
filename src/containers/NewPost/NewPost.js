import React, { Component } from 'react';

import classes from './NewPost.module.css';
import Button from '../../components/UI/Button/Button';

class NewPost extends Component {

    render() {
        return (
            <div className={classes.NewPost}>
                <form>
                    <input type="text" name="title" placeholder="Title..." />
                    <div className={classes.TextareaWrapper}>
                        <textarea placeholder="Just start typing here..." />
                    </div>
                    <Button>Continue</Button>
                </form>
            </div>
        );
    };
};

export default NewPost;