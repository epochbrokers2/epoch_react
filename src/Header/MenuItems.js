import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import DropDown from "./DropDown";

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    const handleDropdown = () => {
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
        window.innerWidth > 1100 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 1100 && setDropdown(false);
    };
    return (
        <>
            <li
                ref={ref}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
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
                                <span className="icon-right_arrow"></span>
                            ) : (
                                <span className="icon-down_arrow"></span>
                            )}
                        </span>
                        <DropDown
                            submenus={items.submenu}
                            type={items.type}
                            depthLevel={depthLevel}
                            dropdown={dropdown}
                            click={handleDropdown}
                        />
                    </>
                ) : (
                    <Link to={items.url}>{items.title}</Link>
                )}
            </li>
        </>
    );
};

export default MenuItems;
