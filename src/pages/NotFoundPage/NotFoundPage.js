import React from 'react';

import {Link} from "react-router-dom";
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {

    return (
        <div className={css.not_found}>
            <h1>Page not found!!!</h1>
            <Link to={'/'}>
                <button className={css.not_found_btn}>Back</button>
            </Link>
        </div>
    );
};

export {NotFoundPage};
