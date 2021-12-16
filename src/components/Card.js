import { Container, Grid, Name, Owned, PokemonImage } from "./StyleCard";

export default function Card(props) {
    
    return (
        <>
            <Grid>
                {props?.pokemonData?.map((result) => (
                    <Container>
                        <PokemonImage src={result.image}/>
                        <Name>{result.name}</Name>
                        <Owned>Owned: 1</Owned>
                    </Container>
                ))}
            </Grid>
        </>
    )
}