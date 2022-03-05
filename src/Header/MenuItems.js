import React from "react";
import { useState, useEffect, useRef } from "react";
import DropDown from "./DropDown";

const MenuItems = ({ items, depthLevel }) => {
    // console.log(items);
    const [dropdown, setDropdown] = useState(false);
    const handleDropdown = () => {
        console.log("Clicked");
        setDropdown((prev) => !prev);
    };
    let ref = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (
                dropdown &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);
    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };
    return (
        <li ref={ref}
            onMouseEnter = {onMouseEnter}
            onMouseLeave = {onMouseLeave}
            className="menu-items" 
        >
            {items.submenu ? (
                <>
                    <span
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? true : false}
                        onClick={handleDropdown}
                    >
                        {items.title}{" "}
                        {depthLevel > 0 ? (
                            <i>&darr;</i>
                        ) : (
                            <i className="arrow" />
                        )}
                    </span>
                    <DropDown
                        submenus={items.submenu}
                        depthLevel={depthLevel}
                        dropdown={dropdown}
                        click={handleDropdown}
                    />
                </>
            ) : (
                <a href="/#">{items.title}</a>
            )}
        </li>
    );
};

export default MenuItems;
