import { css } from "@emotion/react"
import styled from "@emotion/styled"

const dynamicFontWeight = props => 
    css`
        font-weight: ${props.fontWeight}
    `

export const Grid = styled.div`
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    background-color: white;
    background-size: cover;
    align-items: center;
    justify-content: center;
    text-align: center;

`

export const Container = styled.div`
    
    position:relative;
    display:flex;
    flex-direction:column;

    min-width:0;
    word-wrap:break-word;
    background-color:#fff;
    background-clip:border-box;
    border:1px solid rgba(0,0,0,.125);
    border-radius:.25rem;
    margin: 10px;
    padding: 4px;
    transition: all 0.25s;

    &:hover {
        border: 1px solid rgba(255, 222, 0, 0.7);
        transform: scale(1.05);
    }
`

export const PokemonImage = styled.img`
    height: 75px;
    width: 100%;

    @media (min-width: 576px) {
        height: 150px;
    }
`

export const Name = styled.p`
    font-size: 14px;
    // background-color: blue;
    // padding: 3px;
    text-transform: capitalize;
    // color: #3B4CCA;
    margin-top: 0;
    margin-bottom: 0;
`

export const Owned = styled.p`
    font-size: 12px;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 400;
    ${dynamicFontWeight}
`

export const Button = styled.button`
    display: inline-block;
    border-radius: 0px 0px 4px 4px;
    background-color: #FF5C5C;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
    height: 24px;
    width: 100%;
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
        background-color: #FF0000
    }
`