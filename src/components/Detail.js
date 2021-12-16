import { Card, CatchButton, Container, Grid, Name, Owned, PokemonImage } from "./StyleDetail";
import bulbasaur from '../assets/bulbasaur.png';


export default function Detail(props) {
    
    console.log("props", props)
    
    return(
        <>
        {/* <Container>
        <Container bordered>
            <Name>Bulbasaur</Name>
            <PokemonImage src={bulbasaur}/>
            <Owned>Owned: 1</Owned>
        </Container>
        </Container> */}
        <Container>
            <Name>{props?.pokemonDetail?.name}</Name>
            <PokemonImage src={props?.pokemonDetail?.sprites?.front_default}/>
            <Owned>Owned: 1</Owned>
        </Container>
        <Container>
            <CatchButton>CATCH!</CatchButton>
        </Container>
        <Name>Types</Name>
        <Grid>
            {props?.pokemonDetail?.types?.map((result) => (
                <Card>
                <Owned>{result?.type?.name}</Owned>
                </Card>
            ))}
            {/* <Card>
            <Owned>Grass</Owned>
            </Card> */}
            {/* <Card>
            <Owned>Grass</Owned>
            </Card> */}
        </Grid>
        <Name>Moves</Name>
        <Grid>
            {props?.pokemonDetail?.moves?.map((result) => (
                <Card>
                <Owned>{result?.move?.name}</Owned>
                </Card>
            ))}
            {/* <Card>
            <Owned>Grass</Owned>
            </Card> */}
            {/* <Card>
            <Owned>Grass</Owned>
            </Card> */}
        </Grid>
        {/* <Name>Moves</Name>
        <Owned>Grass</Owned> */}
            
        </>
    )
}