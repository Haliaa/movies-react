import React from 'react';

import css from './Header.module.css'
import {Search} from "../Search/Search";
import {UserLogo} from "../UserLogo/UserLogo";
import ts from "./tsss.png";


const Header = () => {
    return (
        <div className={css.header}>
            <Search/>
            <div>NETFLIX & <img src={ts} alt="ts"/></div>
            <UserLogo/>
        </div>
    );
};

export {Header};
