import { Container, Grid, Name, Owned, PokemonImage } from "./StyleCard";
import bulbasaur from '../assets/bulbasaur.png';


export default function Card(props) {
    
    console.log("props", props)
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
            {/* <Container>
                <PokemonImage src={props?.pokemonData?.image}/>
                <Name>{props?.pokemonData?.name}</Name>
                <Owned>Owned: 1</Owned>
            </Container> */}
        </Grid>
            {/* <Grid>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
                <Container>
                    <PokemonImage src={bulbasaur}/>
                    <Name>Bulbasaur</Name>
                    <Owned>Owned: 1</Owned>
                </Container>
            </Grid> */}
        </>
    )
}