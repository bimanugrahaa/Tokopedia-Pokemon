import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Detail from '../components/Detail';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { useGetPokemonDetail } from '../hooks/useGetPokemon';
import { addMyPokemon } from '../store/Data';
import { Container, Name } from '../styles/StyleDetail';
import getProbability from '../utils/getProbability';

export default function PokemonDetail() {

    const myPokemon = useSelector((state) => state.myPokemon.myPokemon)
    const dispatch = useDispatch()

    const location = useLocation()
    const urlNow = location.pathname.split('/')
    const namePokemon = urlNow[2]

    const [pokemonDetail, getPokemonDetail] = useState([])
    const {detailData, detailLoading, detailError} = useGetPokemonDetail(namePokemon);
    const [show, setShow] = useState(false);
    

    //Fetch pokemon detail
    const fetchPokemonDetail = async() => {
        try {
            await getPokemonDetail(detailData?.pokemon)
        } catch (error) {
            console.log("error fetch pokemon detail", error)
            console.log("detailError", detailError)
        }
    }

    useEffect(() => {
        fetchPokemonDetail();
    },[detailData])

    const setModal = (bool) => {
        setShow(bool)
    }

    const setNicknameInput = (nicknames) => {

        const newPokemon = {
            index: myPokemon[myPokemon.length - 1].index + 1,
            id: detailData?.pokemon?.id,
            name: detailData?.pokemon?.name,
            nickname: nicknames,
            image: detailData?.pokemon?.sprites?.front_default,
        }

        const add = addMyPokemon(newPokemon)
        dispatch(add)

    }

    const handleCatch = () => {
        const prob = getProbability()

        if (prob) {
            setShow(true)
        } else {
            toast.error(`Oh no! ${pokemonDetail?.name} escape!`)
        }
    }

    const dataOwned = myPokemon.filter((pokemon) => (
        pokemon.name === detailData?.pokemon?.name
    ))

    
    return (
        <>
            <Header></Header>
            <Toaster position="bottom-center" reverseOrder={false}/>
            {detailLoading === true? 
                <Container>
                    <Name>Searching for Pokemon...</Name>
                    <Loader type="TailSpin" color="#FF0000" height={80} width={80} style={{margin: "20px"}}/>
                </Container>
                :
                <>
                    <Detail dataOwned={dataOwned} pokemonDetail={pokemonDetail} onClick={handleCatch}></Detail>
                    <Modal show={show} setModal={setModal} setNicknameInput={setNicknameInput}></Modal>
                </>
            }
        </>
    )
}