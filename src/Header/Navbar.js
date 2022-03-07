import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

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
        </>
    );
}
