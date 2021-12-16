import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Detail from '../components/Detail';
import Header from '../components/Header';
import { useGetPokemonDetail } from '../hooks/useGetPokemon';
import { addMyPokemon } from '../store/Data';

export default function PokemonDetail() {
    
    const urlNow = window.location.pathname
    const uriSplit = urlNow.split('/')
    const namePokemon = uriSplit[2]
    // const [pokemonDetail, getPokemonDetail] = useState([])
    const {detailData, detailLoading, detailError} = useGetPokemonDetail(namePokemon);

    const dispatch = useDispatch()
    //Fetch pokemon list
    // const fetchPokemonDetail = async() => {
    //     try {
    //         await getPokemonList([...pokemonList, ...pokemonDataList?.pokemons?.results])
    //     } catch (error) {
    //         console.log("error fetch pokemon detail", error)
    //     }
    // }

    console.log("detail", detailData?.pokemon)

    const handleCatch = (e) => {
        const newPokemon = {
            id: detailData?.pokemon?.id,
            name: detailData?.pokemon?.name,
            image: detailData?.pokemon?.sprites?.front_default,
        }

        dispatch(addMyPokemon(newPokemon))
        console.log("added")
    }
    return (
        <>
        <Header></Header>
        <Detail pokemonDetail={detailData?.pokemon} onClick={handleCatch}></Detail>
        </>
    )
}