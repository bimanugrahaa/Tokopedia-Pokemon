import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import logo from '../assets/pokeball.png';
import { Logo } from "./StyleHeader";
import { Button, Image, Input, Text } from "./StyleModal";

export default function Modal(prop) {

    const myPokemon = useSelector((state) => state.myPokemon.myPokemon)
    const [show, setShow] = useState(prop.show);
    const [nickname, setNickname] = useState("");
    const [errNickname, setErrNickname] = useState("");

    const handleClick = (condition) => {
        setShow(!show)
        if (condition) {
            const data = myPokemon.filter((nick) => (
                nick.nickname.toString().toLowerCase() === nickname.toString().toLowerCase()
            ))

            console.log(data)
            if (data.length === 0) {
                // setNickname(value)
                console.log("masuk")
                console.log(nickname)
                prop.setNicknameInput(nickname)
                prop.setModal(false)
                // prop.setNicknameInput(nickname)
            } else {
                setErrNickname("Nickname has already taken.")
            }
            // console.log(nickname)
            // prop.setNicknameInput(nickname)
        }

        if (condition === false) {
            prop.setModal(false)
        }
        // prop.setModal(false)
        
        
    }

    const handleInput = (e) => {
        const value = e.target.value
        console.log(value)
        setNickname(value)
        // const data = myPokemon.filter((nick) => (
        //     nick.toString().toLowerCase() === nickname.toString().toLowerCase()
        // ))

        // if (data.length === 0) {
        //     setNickname(value)
        //     console.log("masuk")
        //     // prop.setNicknameInput(nickname)
        // } else {
        //     setErrNickname("Nickname has already taken.")
        // }
        // console.log("errNickname", errNickname)
        
    }

    // console.log("show modal", prop.show)
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
                <Text fontSize="12px">{errNickname}</Text>
                <Button bgColor="#FF0000" onClick={() => handleClick(true)}>Save</Button>
                <Button bgColor="#FF5C5C" onClick={() => handleClick(false)}>Release</Button>
            </ReactModal>
        </>
    )
    
}