import { Container, Grid, Name, Owned, PokemonImage } from "./StyleCard";
import { useNavigate } from "react-router-dom";

export default function Card(props) {

    console.log("props", props)
    return (
        <>
            {props.onClick === undefined? 
                <Container>
                    <PokemonImage src={props?.pokemonData?.image}/>
                    <Name>{props.pokemonData?.name}</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                :
                <Container onClick={() => props.onClick()}>
                    <PokemonImage src={props?.pokemonData?.image}/>
                    <Name>{props.pokemonData?.name}</Name>
                    <Owned>Owned: 1</Owned>
                </Container>}
        </>
    )
}