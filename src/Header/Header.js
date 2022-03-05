import React from "react";
import Navbar from "./Navbar";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="nav-area">
                    <a href="/" className="nav-logo">
                        <img src="/images/img/logo.png" alt="Epoch Logo" />
                    </a>
                    <Navbar />
                    {/* <Navigation /> */}
                </div>
            </div>
        </header>
    );
};

export default Header;
