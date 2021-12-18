import styled from "@emotion/styled"

export const Container = styled.div`
background-color:#fff;
    background-clip:border-box;
    
    height: 100%;
    width: 90%;
    margin: 10px auto;
    text-align: center;
    border-radius:.25rem;
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
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0;
`

export const Owned = styled.p`
    font-size: 14px;
    margin: 0;
    
`

export const CatchButton = styled.button`
    // display: inline-block;
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

    @media (max-width: 576px) {
        // height: 25%;
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
    margin-left: 30px


`

export const Card = styled.div`
    
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
    padding: 10px;
    

`