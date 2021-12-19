import { Card, CatchButton, Container, Grid, Name, Owned, PokemonImage } from "../styles/StyleDetail";


export default function Detail(props) {
    
    return(
        <>
        <Container>
            <Name>{props?.pokemonDetail?.name}</Name>
            <PokemonImage src={props?.pokemonDetail?.sprites?.front_default}/>
            <Owned>Owned: 1</Owned>
        </Container>
        <Container>
            <CatchButton onClick={() => props.onClick()}>CATCH!</CatchButton>
        </Container>
        <Name>Types</Name>
        <Grid>
            {props?.pokemonDetail?.types?.map((result) => (
                <Card>
                <Owned>{result?.type?.name}</Owned>
                </Card>
            ))}
        </Grid>
        <Name>Moves</Name>
        <Grid>
            {props?.pokemonDetail?.moves?.map((result) => (
                <Card>
                <Owned>{result?.move?.name}</Owned>
                </Card>
            ))}
        </Grid>
        </>
    )
}