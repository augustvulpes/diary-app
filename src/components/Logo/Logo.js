import React from 'react';

import Logo from '../../assets/Images/Logo.png';

const logo = props => {
    return (
        <img style={{height: props.height, width: props.width}} src={Logo} alt="DiaryLogo" />
    );
};

export default logo;