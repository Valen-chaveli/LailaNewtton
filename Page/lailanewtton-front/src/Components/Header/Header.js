import "./css/header.css";
import "./css/hamburguer-menu.css";
import React, { useState } from 'react'
import { Menu } from "../Menu/Menu";
import { AnimatePresence, motion } from "framer-motion";

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
        <AnimatePresence>
            {menuOpen && <Menu />} 
        </AnimatePresence>
        </>
    )
}

export default Header;