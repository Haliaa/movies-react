import React from 'react';
import css from './LeftBar.module.css'
import {GenreList} from "../GenreList/GenreList";
const LeftBar = () => {
    return (
        <div className={css.leftBar}>
            <GenreList/>
        </div>
    );
};

export {LeftBar};
