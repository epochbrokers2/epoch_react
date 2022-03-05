import React from "react";
// import { useState } from "react";

const Dropdown = ({ submenus, dropdown, depthLevel, click }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className="menu-items">
                    <a href="/#">{submenu.title}</a>
                </li>
                // <li key={index} className="menu-items">
                //     {submenu.submenu ? (
                //         <>
                //             <span
                //                 type="button"
                //                 aria-haspopup="sub-menu"
                //                 aria-expanded={dropdown ? "true" : "false"}
                //                 onClick={click}
                //             >
                //                 {submenu.title}{" "}
                //                 {depthLevel > 0 ? (
                //                     <i>&darr;</i>
                //                 ) : (
                //                     <i className="arrow" />
                //                 )}
                //             </span>
                //             <ul
                //                 className={`dropdown ${dropdownClass} ${
                //                     dropdown ? "show" : ""
                //                 }`}
                //             >
                //                 {submenu.submenu.map((submenu, index) => (
                //                     <li key={index} className="menu-items">
                //                         <a href="/#">{submenu.title}</a>
                //                     </li>
                //                 ))}
                //             </ul>
                //         </>
                //     ) : (
                //         <a href="/#">{submenu.title}</a>
                //     )}
                // </li>
            ))}
        </ul>
    );
};

export default Dropdown;
