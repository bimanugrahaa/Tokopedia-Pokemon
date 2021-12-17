import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import Detail from '../components/Detail';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { useGetPokemonDetail } from '../hooks/useGetPokemon';
import { addMyPokemon } from '../store/Data';
import getProbability from '../utils/getProbability';

export default function PokemonDetail() {
    
    const urlNow = window.location.pathname
    const uriSplit = urlNow.split('/')
    const namePokemon = uriSplit[2]
    // const [pokemonDetail, getPokemonDetail] = useState([])
    const {detailData, detailLoading, detailError} = useGetPokemonDetail(namePokemon);

    // const isOpen = false;
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    //Fetch pokemon list
    // const fetchPokemonDetail = async() => {
    //     try {
    //         await getPokemonList([...pokemonList, ...pokemonDataList?.pokemons?.results])
    //     } catch (error) {
    //         console.log("error fetch pokemon detail", error)
    //     }
    // }

    // console.log("detail", detailData?.pokemon)

    // useEffect(() => {
    //     setShow(show)
    // },[show])

    const set = (isOpen) => {
        setShow(isOpen)
    }
    const handleCatch = () => {
        const prob = getProbability()
        const newPokemon = {
            id: detailData?.pokemon?.id,
            name: detailData?.pokemon?.name,
            image: detailData?.pokemon?.sprites?.front_default,
        }

        if (prob) {
            setShow(true)
            dispatch(addMyPokemon(newPokemon))
            console.log("added")
            
        } else {
            console.log("not added")
        }
    }

    
    return (
        <>
        <Header></Header>
        <Detail pokemonDetail={detailData?.pokemon} onClick={handleCatch}></Detail>
        <Modal show={show} isOpen={set}></Modal>
        </>
    )
}