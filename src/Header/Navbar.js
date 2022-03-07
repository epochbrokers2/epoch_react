import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import App from "../App";
import Page from "./Page";

export default function Navbar({ smallNavOpen }) {
    return (
        <>
            <Router>
                <nav className={`menu ${smallNavOpen}`}>
                    <ul>
                        {menuItems.map((menu, index) => {
                            const depthLevel = 0;
                            return (
                                <MenuItems
                                    items={menu}
                                    key={index}
                                    depthLevel={depthLevel}
                                />
                            );
                        })}
                    </ul>
                </nav>
            </Router>
            <Router>
                <Routes>
                    <Route path="/page/:slug" element={<Page />} />
                    <Route  element={<App />} />
                </Routes>
            </Router>
        </>
    );
}
