import { Card, CatchButton, Container, Grid, Name, Owned, PokemonImage } from "../styles/StyleDetail";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Detail(props) {

    return(
        <>
        <Container>
            <Name fontSize="30px">{props?.pokemonDetail?.name}</Name>
            <PokemonImage src={props?.pokemonDetail?.sprites?.front_default}/>
            <Owned>Owned</Owned>
            <Owned>{props?.dataOwned.length}</Owned>
        </Container>

        <Container>
            <CatchButton onClick={() => props.onClick()}>CATCH!</CatchButton>
        </Container>

        <Name margin="20px 0px 0px 20px">Stats</Name>
        <Container textAlign="center">
            <Grid justifyContent="center">
                {props?.pokemonDetail?.stats?.map((result) => (
                    <Card width="100px" height="130px">
                        <Owned margin="5px" textAlign="center" fontSize="12px">{result?.stat?.name}</Owned>
                        <CircularProgressbarWithChildren minValue={0} maxValue={255} value={result?.base_stat} styles={buildStyles({pathColor: "#FF0000"})}>
                            <Owned fontSize="12px">{result?.base_stat}</Owned>
                        </CircularProgressbarWithChildren>
                    </Card>
                ))}
            </Grid>
        </Container>
        
        <Name margin="20px 0px 0px 20px">Types</Name>
        <Grid>
            {props?.pokemonDetail?.types?.map((result) => (
                <Owned margin="10px 0px 0px 10px">{result?.type?.name}</Owned>
            ))}
        </Grid>
        
        <Name margin="30px 0px 0px 20px">Moves</Name>
        <Grid justifyContent="center">
            {props?.pokemonDetail?.moves?.map((result) => (
                <Card>
                    <Owned>{result?.move?.name}</Owned>
                </Card>
            ))}
        </Grid>
        </>
    )
}