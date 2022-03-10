import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = ({menuItems}) => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };
    return (
        <>
            <header>
                <div className="navcontainer">
                    <div className="nav-area">
                        <div className="nav-area-top">
                            <Link to="/" className="nav-logo">
                                <img
                                    src="/images/img/logo.png"
                                    alt="Epoch Logo"
                                />
                            </Link>
                            <div
                                className={`navbar__Link navbar__Link-toggle ${
                                    click ? "hamburger" : ""
                                }`}
                                id="navbar-toggle"
                                aria-controls="navbar-menu"
                                aria-expanded={click ? true : false}
                                onClick={handleClick}
                            >
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </div>
                        </div>
                        <Navbar menuItems={menuItems}
                            smallNavOpen={`${
                                click ? "navbar__ToggleShow" : ""
                            }`}
                        />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
