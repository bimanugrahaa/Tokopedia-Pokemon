import { css } from "@emotion/react";
import styled from "@emotion/styled"

const dynamicFontSize = props => 
    css`
        font-size: ${props.fontSize}
    `

const dynamicMargin = props => 
    css`
        margin: ${props.margin}
    `

const dynamicSize = props => 
    css`
        width: ${props.width};
        height: ${props.height};
    `

const dynamicAlignItem = props => 
    css`
        text-align: ${props.textAlign};
        justify-content: ${props.justifyContent};
    `

export const Container = styled.div`
background-color:#fff;
    background-clip:border-box;
    
    height: 100%;
    width: 90%;
    margin: 10px auto;
    text-align: center;
    border-radius: 5px;
    justify-content: center;
    border: ${props => 
        props.bordered ? '1px solid rgba(0,0,0,.125)' : '0px'}
`

export const PokemonImage = styled.img`
    height: 150px;
    width: 150px;

    @media (min-width: 576px) {
        height: 25%;
        width: 25%;
    }
    
`

export const Name = styled.p`
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0;
    ${dynamicFontSize}
    ${dynamicMargin}
`

export const Owned = styled.p`
    font-size: 16px;
    margin: 0;
    ${dynamicMargin}
    ${dynamicFontSize}
    ${dynamicAlignItem}
    text-transform: capitalize;
`

export const CatchButton = styled.button`
    border-radius: 4px;
    background-color: #FF0000;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 24px;
    padding: 10px;
    width: 20%;
    transition: all 0.5s;
    cursor: pointer;
    margin: 20px auto;

    &:hover {
        font-weight: 700;
        background-color: #CC0000;
    }

    @media (max-width: 576px) {
        font-size: 16px;
        width: 100px;
        padding: 10px;
    }
`

export const Grid = styled.div`
    padding-top: 5px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin-left: 50px;
    margin-right: 50px;
    align-items: center;
    ${dynamicAlignItem}
`

export const Card = styled.div`
    
    position:relative;
    display:flex;
    flex-direction:column;

    word-wrap:break-word;
    background-color:#fff;
    background-clip:border-box;
    border:1px solid rgba(0,0,0,.125);
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    transition: all 0.5s;
    ${dynamicSize}

    &:hover {
        border:1px solid #3B4CCA;
        background: #3B4CCA;
        color: white;
    }

`