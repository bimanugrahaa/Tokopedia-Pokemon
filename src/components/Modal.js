import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import logo from '../assets/pokeball.png';
import { Logo } from "./StyleHeader";
import { Button, Image, Input, Text } from "./StyleModal";

export default function Modal(prop) {

    const [isOpen, setShow] = useState(prop.show);

    const handleCLick = () => {
        setShow(!isOpen)
        prop.isOpen(false)
    }

    console.log("isOpen modal", prop.show)
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
                <Input></Input>
                <Button bgColor="#FF0000">Save</Button>
                <Button bgColor="#FF5C5C" onClick={() => handleCLick()}>Release</Button>
            </ReactModal>
        </>
    )
    
}