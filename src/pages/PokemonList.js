import { useEffect, useState } from "react";
import Loader from 'react-loader-spinner'

import { useGetPokemonList } from "../hooks/useGetPokemon";
import Card from '../components/Card';
import Detail from '../components/Detail';
import Header from '../components/Header';
import { Button, Container } from "./StylePokemonList";


export default function PokemonList() {
    
    const [pokemonList, getPokemonList] = useState([])
    const [offset, setOffset] = useState(0);
    const {pokemonDataList, pokemonDataLoading, _} = useGetPokemonList(20, offset);

    //Fetch pokemon list
    const fetchPokemonList = async() => {
        try {
            await getPokemonList([...pokemonList, ...pokemonDataList?.pokemons?.results])
        } catch (error) {
            console.log("error fetch pokemon list", error)
        }
    }
    
    useEffect(() => {
        fetchPokemonList()
    }, [pokemonDataList])

    //Fetch next data
    const loadMore = () => {
        setOffset(() => pokemonDataList?.pokemons?.nextOffset)
    }

    return (
        <>
            <Header></Header>
            <Card pokemonData={pokemonList}></Card>
            <Container>
                {pokemonDataLoading? 
                <Loader type="TailSpin" color="#FF0000" height={80} width={80}/>
                :
                <>
                </>}
                <Button onClick={loadMore}>Load More!</Button>
            </Container>  
        </>
    )
}