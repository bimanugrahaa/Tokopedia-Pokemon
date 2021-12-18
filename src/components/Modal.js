import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import logo from '../assets/pokeball.png';
import { Logo } from "./StyleHeader";
import { Button, Image, Input, Text } from "./StyleModal";

export default function Modal(prop) {

    const myPokemon = useSelector((state) => state.myPokemon.myPokemon)
    const [nickname, setNickname] = useState("");
    const [errNickname, setErrNickname] = useState("");

    const handleClick = (condition) => {

        //Check if nickname already taken
        const data = myPokemon.filter((nick) => (
            (nick.nickname.toString().toLowerCase() === nickname.toString().toLowerCase())
        ))

        //Check which button is clicked
        if (condition === true) {
            if (data.length === 0 && errNickname === "") {
                prop.setNicknameInput(nickname)
                prop.setModal(false)
                setErrNickname("")
                setNickname("")
            } else if (nickname === "") {
                setErrNickname("Nickname can't be empty.")
            } else {
                setErrNickname("Nickname has already taken.")
            }
        }

        if (condition === false) {
            prop.setModal(false)
            setErrNickname("")
            setNickname("")
        }
        
        
        
    }

    const handleInput = (e) => {
        const value = e.target.value
        setNickname(value)
        if (value === "") {
            setErrNickname("Nickname can't be empty.")
        } else {
            setErrNickname("")
        }
    }

    return(
        <>
            <ReactModal
                isOpen={prop.show} 
                style={{
                    content: {
                        width: '70%',
                        height: '25%',
                        position: 'absolute',
                        left: '0px',
                        right: '0px',
                        margin: 'auto',
                        textAlign: 'center',
                        border: '1px solid white',
                        background: '#FFDE00'
                    }
                }}>

                <Image src={logo}></Image>
                <Text fontSize="18px">Pokemon Catched!</Text>
                <Text fontSize="12px">Give your pokemon a nickname!</Text>
                <Input value={nickname} onChange={(e) => handleInput(e)}></Input>
                <Text fontSize="12px" color="#FF0000">{errNickname}</Text>
                <Button bgColor="#FF0000" onClick={() => handleClick(true)}>Save</Button>
                <Button bgColor="#FF5C5C" onClick={() => handleClick(false)}>Release</Button>
            </ReactModal>
        </>
    )
    
}