import React from 'react';

import classes from './DiaryPost.module.css';

const diaryPost = props => {
    return (
        <div className={classes.DiaryPost}>
            <div className={classes.Heading}>
                <h2>Title</h2>
                <span>05/23/2020</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non animi eaque modi voluptas blanditiis, asperiores aut, hic deserunt, nesciunt sapiente illo provident alias qui delectus dolor similique sunt saepe maiores.</p>
        </div>
    );
};

export default diaryPost;