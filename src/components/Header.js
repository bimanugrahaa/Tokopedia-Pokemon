import { Logo, Nav, NavItem } from "./StyleHeader";
import logo from '../assets/Pokemon_logo.svg';

export default function Header() {
    

    return (
        <>
        <Nav>
            <Logo src={logo}/>
            <div>
                <NavItem>Pokemon list</NavItem>
                <NavItem>My pokemon</NavItem>
            </div>
            
        </Nav>
        </>
    )
}