import React from 'react';
import {Switch} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import {themeActions} from "../../redux";
import {Search} from "../Search/Search";
import {UserProfile} from "../UserLogo/UserProfile";
import {HeaderStyle} from "../../styles";
import ts from "./tsss.png";

const Header = () => {
    const dispatch = useDispatch()
    const {theme} = useSelector(state => state.theme);

    const changeTheme = () => {
        dispatch(themeActions.toggleTheme(theme));
        localStorage.setItem('theme', theme)
    }

    return (
        <HeaderStyle theme={theme}>
            <div><Search/></div>
            <div>NETFLIX & <img style={{width: '20px'}} src={ts} alt="ts"/></div>
            <div style={{display: 'flex', alignItems: 'center'}}><UserProfile/>
                <Switch defaultChecked={false} color="error" onChange={changeTheme}/>
            </div>
        </HeaderStyle>
    );
};

export {Header};
