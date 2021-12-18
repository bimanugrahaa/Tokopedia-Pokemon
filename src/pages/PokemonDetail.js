import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'
import Detail from '../components/Detail';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { useGetPokemonDetail } from '../hooks/useGetPokemon';
import { addMyPokemon } from '../store/Data';
import getProbability from '../utils/getProbability';

export default function PokemonDetail() {
    const myPokemon = useSelector((state) => state.myPokemon.myPokemon)
    const urlNow = window.location.pathname
    const uriSplit = urlNow.split('/')
    const namePokemon = uriSplit[2]
    const [pokemonDetail, getPokemonDetail] = useState([])
    const {detailData, detailLoading, detailError} = useGetPokemonDetail(namePokemon);

    const defaultValue = {
        index: 0,
        id: 0,
        name: "",
        nickname: "",
        image: "",
        }
    // const [newPokemon, setNewPokemon] = useState(defaultValue)
    // const isOpen = false;
    const [show, setShow] = useState(false);
    // const [nickname, setNickname] = useState("");
    const dispatch = useDispatch()
    //Fetch pokemon list
    const fetchPokemonDetail = async() => {
        try {
            await getPokemonDetail(detailData?.pokemon)
        } catch (error) {
            console.log("error fetch pokemon detail", error)
        }
    }

    console.log("detail", pokemonDetail)

    useEffect(() => {
        fetchPokemonDetail();
        // console.log("nickname useEffects", nickname)
    },[detailData])

    // const newPokemon = {
    //     index: myPokemon[myPokemon.length - 1].index + 1,
    //     id: detailData?.pokemon?.id,
    //     name: detailData?.pokemon?.name,
    //     nickname: nickname,
    //     image: detailData?.pokemon?.sprites?.front_default,
    // }

    const setModal = (bool) => {
        setShow(bool)
    }

    const setNicknameInput = (nicknames) => {
        console.log("nicknames", nicknames)
        // let nick = nicknames
        // if (nicknames === "") {
        //     const index = myPokemon[myPokemon.length - 1].index + 1
        //     nick = pokemonDetail?.name + index.toString()
        //     console.log("index", nick)
        //     // setNickname(nick)
        // } else {
        //     console.log("nicknames 1", nicknames)
        //     // setNickname(nicknames)
        //     // console.log("nickname inside", nickname)
        //     // const add = addMyPokemon(newPokemon)
        //     // dispatch(add)
        // }
        // setNewPokemon({
        //     index: myPokemon[myPokemon.length - 1].index + 1,
        //     id: detailData?.pokemon?.id,
        //     name: detailData?.pokemon?.name,
        //     nickname: nicknames,
        //     image: detailData?.pokemon?.sprites?.front_default,
        // })

           const newPokemon = {
        index: myPokemon[myPokemon.length - 1].index + 1,
        id: detailData?.pokemon?.id,
        name: detailData?.pokemon?.name,
        nickname: nicknames,
        image: detailData?.pokemon?.sprites?.front_default,
    }
        // newPokemon.index = myPokemon[myPokemon.length - 1].index + 1
        // newPokemon.id = detailData?.pokemon?.id
        // newPokemon.name = detailData?.pokemon?.name
        // newPokemon.nickname = nicknames
        // newPokemon.image = detailData?.pokemon?.sprites?.front_default
        // setNewPokemon(newPokemon)
        const add = addMyPokemon(newPokemon)
        console.log("newPokemon", newPokemon)
        dispatch(add)
        // setNewPokemon(defaultValue)
        
        console.log("nicknames 1", nicknames)
        // console.log("nickname", nickname)
        console.log("redux", myPokemon)
    }

    const handleCatch = () => {
        const prob = getProbability()
        // const newPokemon = {
        //     index: myPokemon.index + 1,
        //     id: detailData?.pokemon?.id,
        //     name: detailData?.pokemon?.name,
        //     nickname: nickname,
        //     image: detailData?.pokemon?.sprites?.front_default,
        // }

        if (prob) {
            setShow(true)
            // dispatch(addMyPokemon(newPokemon))
            console.log("added")
            
        } else {
            console.log("not added")
        }
    }

    
    return (
        <>
        <Header></Header>
        <Detail pokemonDetail={pokemonDetail} onClick={handleCatch}></Detail>
        <Modal show={show} setModal={setModal} setNicknameInput={setNicknameInput}></Modal>
        </>
    )
}