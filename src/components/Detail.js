import { CatchButton, Container, Name, Owned, PokemonImage } from "./StyleDetail";
import bulbasaur from '../assets/bulbasaur.png';


export default function Detail() {
    
    
    return(
        <>
        <Container bordered>
            <Name>Bulbasaur</Name>
            <PokemonImage src={bulbasaur}/>
            <Owned>Owned: 1</Owned>
        </Container>
        <Container>
            <CatchButton>CATCH!</CatchButton>
        </Container>
        <Name>Types</Name>
        <Owned>Grass</Owned>
        <Name>Moves</Name>
        <Owned>Grass</Owned>
            
        </>
    )
}