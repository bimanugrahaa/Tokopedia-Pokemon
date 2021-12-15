import styled from "@emotion/styled"

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
    margin-top: 0;
`