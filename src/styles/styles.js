import styled from "styled-components";
import {theme} from "../constants";

const HeaderStyle = styled.header
    `
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #c42020;
        font-weight: bold;
        font-size: 20px;
        font-family: "Bodoni MT Poster Compressed";
        color: ${props => (props.theme === true) ? theme.black : theme.white};    
        `;
export {
    HeaderStyle
};
