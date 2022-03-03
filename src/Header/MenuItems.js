import React from 'react'
import { useState } from 'react';
import DropDown from './DropDown'

const MenuItems = ({items, depthLevel}) => {
    // console.log(items);
    const [dropdown, setDropdown] = useState(false);
    return (
        <li className='menu-items'>
            {
                items.submenu ? (
                    <>
                        <span aria-haspopup="menu" 
                            aria-expanded={dropdown ? true : false} 
                            onClick={() => setDropdown((prev) => !prev)}
                            >
                            {items.title}{" "}
                            {depthLevel > 0 ? <i>&darr;</i> : <i className="arrow" />}
                        </span>
                        <DropDown submenus={items.submenu} depthLevel={depthLevel} dropdown={dropdown}  />
                        
                    </>
                ) : (
                    <span>
                        <a href="/#">{items.title}</a>
                    </span>
                )
            }
        </li>
    )
}

export default MenuItems