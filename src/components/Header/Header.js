import React from 'react';

import css from './Header.module.css'
import {Search} from "../Search/Search";
import {UserProfile} from "../UserLogo/UserProfile";
import ts from "./tsss.png";


const Header = () => {
    return (
        <div className={css.header}>
            <Search/>
            <div>NETFLIX & <img src={ts} alt="ts"/></div>
            <UserProfile/>
        </div>
    );
};

export {Header};
