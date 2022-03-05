import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="nav-area">
                    <a href="/" className="nav-logo">
                        <img src="/images/img/logo.png" alt="Epoch Logo" />
                    </a>
                    <Navbar />
                </div>
            </div>
        </header>
    );
};

export default Header;
