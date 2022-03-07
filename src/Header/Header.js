import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
    const [click, setClick] = useState(false)
    const handleClick =() => {setClick(!click)}
    return (
        <header>
            <div className="navcontainer">
                <div className="nav-area">
                    <div className="nav-area-top">
                        <a href="/" className="nav-logo">
                            <img src="/images/img/logo.png" alt="Epoch Logo" />
                        </a>
                        <div
                            className={`navbar__Link navbar__Link-toggle ${click ? "hamburger" : ""}`}
                            id="navbar-toggle"
                            aria-controls="navbar-menu"
                            aria-expanded={click ? true : false}
                            onClick = {handleClick}
                        >
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </div>
                    </div>
                    <Navbar smallNavOpen={`${click ? "navbar__ToggleShow" : ""}`} />
                </div>
            </div>
        </header>
    );
};

export default Header;
