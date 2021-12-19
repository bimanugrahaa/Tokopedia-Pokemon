import { useEffect, useState } from "react";
import Loader from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";

import { useGetPokemonList } from "../hooks/useGetPokemon";
import Card from '../components/Card';
import Header from '../components/Header';
import { Button, Container, Grid, H1 } from "../styles/StylePokemonList";
import { useSelector } from "react-redux";


export default function PokemonList() {
    const myPokemon = useSelector((state) => state.myPokemon.myPokemon)

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

    //Fetch next data
    const loadMore = () => {
        setOffset(() => pokemonDataList?.pokemons?.nextOffset)
    }
    
    useEffect(() => {
        fetchPokemonList()
    }, [pokemonDataList])

    return (
        <>
            <Header></Header>
            <H1>Pokemon List</H1>
            <Grid>
                {pokemonList?.map((result, index) => {
                    
                    const dataOwned = myPokemon.filter((pokemon) => (
                        pokemon.name === result?.name
                    ))

                    return (<Card key={index} pokemonData={result} dataOwned={dataOwned} onClick={() => action(result.name)}></Card>)
                })}
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