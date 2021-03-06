import "./css/header.css";
import "./css/hamburguer-menu.css";
import React, { useState } from 'react'
import { Menu } from "../Menu/Menu";
import { AnimatePresence, motion } from "framer-motion";
import {VscBook} from "react-icons/vsc";
export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const animateHamburguerMenu = (e) => {

        if(menuOpen) setMenuOpen(false);
        else setMenuOpen(true);
        const menuBtn = document.querySelector('.menu-btn');
        menuBtn.classList.toggle('open');
    };

    return (
        <>
        <header id="header-mobile-container">
             <div className="menu-btn" onClick={animateHamburguerMenu}>
                <div className="menu-btn__burger"></div>
            </div>
            <h1>Laila Newtton</h1>
        </header>
        <header id="header-desktop-continer">
            <div>
                <VscBook/>
                El club de los ojos claros
            </div>
            <div>
                Sobre la autora
            </div>
            <div>
                Contacto
            </div>
            <div>
                Upcomming
            </div>
        </header>
        <AnimatePresence initial={false}>
            {menuOpen && <Menu />} 
        </AnimatePresence>
        </>
    )
}

export default Header;