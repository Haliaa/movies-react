import React from 'react';

import css from './UserLogo.module.css'
import userPhoto from './userPhoto.png';
const UserLogo = () => {
    return (
        <div className={css.user_wrap}>
            <div className={css.user}>Welcome, User!</div>
            <div className={css.logo}>
                <img src={userPhoto} alt="userPhoto"/>
            </div>
        </div>
    );
};

export {UserLogo};
