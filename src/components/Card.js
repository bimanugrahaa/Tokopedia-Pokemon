import { Container, Grid, Name, Owned, PokemonImage } from "./StyleCard";
import { useNavigate } from "react-router-dom";

export default function Card(props) {

    console.log("props", props)

    return (
        // <>
        //     <Grid>
        //         {props?.pokemonData?.map((result) => (
        //             <Container onClick={() => action(result.name)}>
        //                 <PokemonImage src={result.image}/>
        //                 <Name>{result.name}</Name>
        //                 <Owned>Owned: 1</Owned>
        //             </Container>
        //         ))}
        //     </Grid>
        // </>
        <>
            <Container onClick={() => props.onClick()}>
                <PokemonImage src={props?.pokemonData?.image}/>
                <Name>{props.pokemonData?.name}</Name>
                <Owned>Owned: 1</Owned>
            </Container>
        </>
    )
}