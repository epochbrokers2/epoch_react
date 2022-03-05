import React from "react";

function MultiDropdown({ submenus, multiDropdown, depthLevel }) {
    console.log(submenus);
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} ${multiDropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className="menu-items">
                    <a href="/#">{submenu.title}</a>
                </li>
            ))}
        </ul>
    );
}

export default MultiDropdown;
