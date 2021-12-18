import { Hamburger, Icon, Logo, MenuLabel, Nav, NavItem } from "./StyleHeader";
import logo from '../assets/Pokemon_logo.svg';
import { NavLink } from "react-router-dom";
import { useState } from "react";

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