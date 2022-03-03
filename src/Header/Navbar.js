import React from 'react'
import { menuItems } from '../menuItems'
import MenuItems from './MenuItems'

export default function Navbar() {
  return (
    <nav className='menu'>
        <ul>
            {
                menuItems.map((menu,index) => {
                    const depthLevel = 0;
                    return (
                        <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                        // <li className='menu-items' key={index}>
                        //     <a href="#!">{menu.title}</a>
                        // </li>
                    )
                })
            }
        </ul>
    </nav>
  )
}
