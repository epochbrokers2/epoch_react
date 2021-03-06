import React from "react";

// import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

export default function Navbar({ smallNavOpen, menuItems }) {
    return (
        <>
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
        </>
    );
}
