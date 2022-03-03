import React from "react";
import { useState } from "react";
import MultiDropdown from "./MultiDropdown";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    const [multiDropdown, setmultiDropdown] = useState(false);
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                // <li key={index} className="menu-items">
                //     <a href="/#">{submenu.title}</a>
                // </li>
                <li key={index} className="menu-items">
                    {/* <a href="/#">{submenu.title}</a>
                    {console.log(submenu.submenu)} */}
                    {submenu.submenu ? (
                        <>
                            <span
                                type="button"
                                aria-haspopup="sub-menu"
                                aria-expanded={multiDropdown ? "true" : "false"}
                                onClick={() => setmultiDropdown((prev) => !prev)}
                            >
                                {submenu.title}{" "}
                                {depthLevel > 0 ? (
                                    <i>&darr;</i>
                                ) : (
                                    <i className="arrow" />
                                )}
                            </span>
                            <MultiDropdown
                                submenus={submenu.submenu}
                                depthLevel={depthLevel}
                                dropdown={multiDropdown}
                            />
                        </>
                    ) : (
                        <a href="/#">{submenu.title}</a>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;
