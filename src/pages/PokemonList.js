import { useEffect, useState } from "react";
import Loader from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";

import { useGetPokemonList } from "../hooks/useGetPokemon";
import Card from '../components/Card';
import Header from '../components/Header';
import { Button, Container, Grid, H1 } from "./StylePokemonList";


export default function PokemonList() {
    
    const [pokemonList, getPokemonList] = useState([])
    const [offset, setOffset] = useState(0);
    const {pokemonDataList, pokemonDataLoading, pokemonDataError} = useGetPokemonList(20, offset);

    const navigate = useNavigate();
    const action = (name) => {
        navigate(`/pokemon/${name}`)
    }

    //Fetch pokemon list
    const fetchPokemonList = async() => {
        try {
            getPokemonList([...pokemonList, ...pokemonDataList?.pokemons?.results])
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
            <H1>Pokemon List</H1>
            <Grid>
                {pokemonList?.map((result) => (
                    <Card pokemonData={result} onClick={() => action(result.name)}></Card>
                ))}
            </Grid>
            <Container>
                {pokemonDataLoading? 
                    <Loader type="TailSpin" color="#FF0000" height={80} width={80} style={{margin: "20px"}}/>
                    :
                    <></>
                }
                <Button onClick={loadMore}>Load More!</Button>
            </Container>  
        </>
    )
}