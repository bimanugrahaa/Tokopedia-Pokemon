import { useDispatch, useSelector } from "react-redux"
import Header from "../components/Header"
import Card from '../components/Card';
import { Grid } from "../styles/StylePokemonList"
import { deleteMyPokemon } from "../store/Data";


export default function MyPokemon() {
    const myPokemon = useSelector((state) => state.myPokemon.myPokemon)
    const dispatch = useDispatch()

    return (
        <>
            <Header></Header>
            <Grid>
                {myPokemon?.map((result) => (
                    result.name === "" ? 
                    "" 
                    : 
                    <Card pokemonData={result} index={result?.index} deleteMyPokemon={() => {dispatch(deleteMyPokemon(result.index))}}></Card>
                    
                ))}
            </Grid>
        </>
    )
}