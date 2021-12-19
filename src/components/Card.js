import { Button, Container, Name, Owned, PokemonImage } from "../styles/StyleCard";

export default function Card(props) {

    return (
        <>
            {props.onClick === undefined? 
                <Container>
                    <Name>{props.pokemonData?.name}</Name>
                    <PokemonImage src={props?.pokemonData?.image}/>
                    <Name>{props.pokemonData?.nickname}</Name>
                    <Button onClick={() => props.deleteMyPokemon(props?.index)}>Release</Button>
                </Container>
                :
                <Container onClick={() => props.onClick()}>
                    <Name>{props.pokemonData?.name}</Name>
                    <PokemonImage src={props?.pokemonData?.image}/>
                    <Owned>Owned</Owned>
                    <Owned fontWeight="700">{props?.dataOwned.length}</Owned>
                </Container>
            }
        </>
    )
}