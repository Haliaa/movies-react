import styled from "styled-components";
import {theme} from "../constants";

const HeaderStyle = styled.header
    `
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #c42020;
        font-weight: bold;
        font-size: 20px;
        font-family: "Bodoni MT Poster Compressed";
        color: ${props => (props.theme === true) ? theme.black : theme.white};    
        width: 100%;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 10;
        `;
export {
    HeaderStyle
};
