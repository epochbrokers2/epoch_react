import React from "react";
import Routing from "./Routing";

function SubRouting({ submenu }) {
    return (
        <>
            {submenu.map((submenu, index) => (
                <Routing menuItems={submenu} key={index} />
            ))}
        </>
    );
}

export default SubRouting;
