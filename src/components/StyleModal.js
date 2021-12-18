import { css } from "@emotion/react";
import styled from "@emotion/styled";

const dynamicBackground = props =>
    css`
        background-color: ${props.bgColor};
    `
const dynamicFontSize = props => 
    css`
        font-size: ${props.fontSize}
    `
const dynamicTextColor = props => 
    css`
        color: ${props.color}
    `

export const Image = styled.img`
    width: 50px;
    height: 50px;
`
export const Input = styled.input`
    width: 90%;
    height: 20px;
    border: 1px solid #FFDE00;
    border-radius: 5px;
    margin: 0px 10px;

    &:focus {
        outline: none;
    }
`

export const Button = styled.button`
    margin: 10px;
    height: 24px;
    display: inline-block;
    border-radius: 4px;
    ${dynamicBackground};
    border: none;
    color: #FFFFFF;
    font-size: 18px;
    transition: all 0.5s;
    cursor: pointer;
    text-align: center;
`
export const Text = styled.p`
    ${dynamicFontSize}
    ${dynamicTextColor}
    margin: 10px 10px;
`