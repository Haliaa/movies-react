import React from 'react';

import css from './Search.module.css'
const Search = () => {
    return (
        <section>
            <input type="text" placeholder=" Search movie" className={css.search_inp}/>
        </section>
    );
};

export {Search};
