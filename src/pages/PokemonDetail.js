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
import getProbability from '../utils/getProbability';

export default function PokemonDetail() {

    const myPokemon = useSelector((state) => state.myPokemon.myPokemon)
    const location = useLocation()
    const urlNow = location.pathname
    const uriSplit = urlNow.split('/')
    const namePokemon = uriSplit[2]
    const [pokemonDetail, getPokemonDetail] = useState([])
    const {detailData, detailLoading, detailError} = useGetPokemonDetail(namePokemon);

    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    //Fetch pokemon detail
    const fetchPokemonDetail = async() => {
        try {
            await getPokemonDetail(detailData?.pokemon)
        } catch (error) {
            console.log("error fetch pokemon detail", error)
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

    
    return (
        <>
            <Header></Header>
            <Toaster position="bottom-center" reverseOrder={false}/>
            {detailLoading === true? 
                <Loader type="TailSpin" color="#FF0000" height={80} width={80} style={{margin: "20px"}}/>
                :
                <>
                    <Detail pokemonDetail={pokemonDetail} onClick={handleCatch}></Detail>
                    <Modal show={show} setModal={setModal} setNicknameInput={setNicknameInput}></Modal>
                </>
            }
        </>
    )
}