import React from 'react';

import css from './UserProfile.module.css'
import userPhoto from './UserProfile.png';
const UserProfile = () => {
    return (
        <div style={{display: "flex"}}>
            <div className={css.user}>User</div>
            <div className={css.circle}>
                <img src={userPhoto} alt="userPhoto"/>
            </div>
        </div>
    );
};

export {UserProfile};
