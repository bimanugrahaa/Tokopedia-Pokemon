import { useState } from 'react';
import Detail from '../components/Detail';
import Header from '../components/Header';
import { useGetPokemonDetail } from '../hooks/useGetPokemon';

export default function PokemonDetail() {
    
    // const [pokemonDetail, getPokemonDetail] = useState([])
    const {detailData, detailLoading, detailError} = useGetPokemonDetail("bulbasaur");

    //Fetch pokemon list
    // const fetchPokemonDetail = async() => {
    //     try {
    //         await getPokemonList([...pokemonList, ...pokemonDataList?.pokemons?.results])
    //     } catch (error) {
    //         console.log("error fetch pokemon detail", error)
    //     }
    // }

    console.log("detail", detailData?.pokemon)

    return (
        <>
        <Header></Header>
        <Detail pokemonDetail={detailData?.pokemon}></Detail>
        </>
    )
}