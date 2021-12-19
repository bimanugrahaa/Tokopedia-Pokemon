import { useDispatch, useSelector } from "react-redux"
import Header from "../components/Header"
import Card from '../components/Card';
import { Container, Grid, H1, Image } from "../styles/StylePokemonList"
import { deleteMyPokemon } from "../store/Data";
import logo from "../assets/pokeball.png"

export default function MyPokemon() {
    const myPokemon = useSelector((state) => state.myPokemon.myPokemon)
    const dispatch = useDispatch()

    return (
        <>
            <Header></Header>
            <H1>My pokemon</H1>
            <Grid>
                {myPokemon?.map((result) => (
                    myPokemon.length === 1 ?
                        <Container>
                            <Image src={logo}></Image>
                            <H1>Go catch some Pokemon!</H1>
                        </Container>
                        :
                        result.name === "" ? "" : <Card pokemonData={result} index={result?.index} deleteMyPokemon={() => {dispatch(deleteMyPokemon(result.index))}}></Card>
                ))}
            </Grid>
        </>
    )
}