import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import DropDown from "./DropDown";
import Home from "../pages/Home/Home";
import Overview from "../pages/About/Overview";

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
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/overview" element={<Overview />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes> */}
        </>
    );
};

export default MenuItems;
