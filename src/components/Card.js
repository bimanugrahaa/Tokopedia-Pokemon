import { Container, Grid, Name, Owned, PokemonImage } from "./StyleCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Card(props) {

    const myPokemon = useSelector((state) => state.myPokemon.myPokemon)

    const dataOwned = myPokemon.filter((pokemon) => (
        pokemon.name === props?.pokemonData?.name
    ))
    console.log("dataOwned", dataOwned)
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
                    <Owned>Owned: {dataOwned.length}</Owned>
                </Container>}
        </>
    )
}