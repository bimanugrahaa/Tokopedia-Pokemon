import { Logo, Nav, NavItem } from "../styles/StyleHeader";
import logo from '../assets/Pokemon_logo.svg';
import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <>
        <Nav>
            <Logo src={logo}/>
            <div>
                <NavLink to="/"><NavItem>Pokemon list</NavItem></NavLink>
                <NavLink to="/my-pokemon"><NavItem>My pokemon</NavItem></NavLink>
            </div>      
        </Nav>
        </>
    )
}