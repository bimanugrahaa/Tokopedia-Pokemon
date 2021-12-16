import { useState } from "react";
import { useGetPokemonList } from "../hooks/useGetPokemon";
import Card from '../components/Card';
import Detail from '../components/Detail';
import Header from '../components/Header';


export default function PokemonList() {
    
    const [pokemonList, getPokemonList] = useState([])

    const {pokemonDataList, pokemonDataLoading, pokemonDataerror} = useGetPokemonList(20,0);

    console.log(pokemonDataList.pokemons)
    return(
        <>
            <Header></Header>
            <>
                {/* {pokemonDataList?.pokemons?.results.map((result) => (
                    <Card pokemonData={result}></Card>
                ))}                 */}
            </>
            <Card pokemonData={pokemonDataList?.pokemons?.results}></Card>
        </>
    )
}