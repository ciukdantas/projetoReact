import React from "react";
import fotoDePerfil from "../avatarciuk.jpeg"
import '../Header/Header.css'

function Header() {
    return (
        <header>
        <img id="fotoDePerfil" rel="fotoDePerfil" src= {fotoDePerfil} alt="" />
        <h1>jose cicero da silva</h1>
        <h3>desenvolvedor de software</h3>
    </header>
    )
    
}

export default Header;