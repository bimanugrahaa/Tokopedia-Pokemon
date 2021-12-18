import { useSelector } from "react-redux"
import Header from "../components/Header"
import Card from '../components/Card';
import { Grid } from "./StylePokemonList"


export default function MyPokemon() {
    const myPokemon = useSelector((state) => state.myPokemon.myPokemon)

    console.log(myPokemon)
    return (
        <>
            <Header></Header>
            <Grid>
                {myPokemon?.map((result) => (
                    result.name === "" ? "":<Card pokemonData={result}></Card>
                    
                ))}
            </Grid>
        </>
    )
}