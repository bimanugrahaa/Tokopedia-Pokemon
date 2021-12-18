import { Button, Container, Grid, Name, Owned, PokemonImage } from "./StyleCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Card(props) {

    const myPokemon = useSelector((state) => state.myPokemon.myPokemon)

    const dataOwned = myPokemon.filter((pokemon) => (
        pokemon.name === props?.pokemonData?.name
    ))

    return (
        <>
            {props.onClick === undefined? 
                <Container>
                    <Name>{props.pokemonData?.name}</Name>
                    <PokemonImage src={props?.pokemonData?.image}/>
                    <Name>{props.pokemonData?.nickname}</Name>
                    <Button onClick={() => props.deleteMyPokemon(myPokemon.index)}>Release</Button>
                </Container>
                :
                <Container onClick={() => props.onClick()}>
                    <Name>{props.pokemonData?.name}</Name>
                    <PokemonImage src={props?.pokemonData?.image}/>
                    <Owned>Owned</Owned>
                    <Owned fontWeight="700">{dataOwned.length}</Owned>
                </Container>
            }
        </>
    )
}