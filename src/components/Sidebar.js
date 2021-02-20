import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { NavLink, Link } from 'react-router-dom'
import { SidebarData } from "./SidebarData"
import "../styles/Sidebar.css" 
import { IconContext } from "react-icons"

function Sidebar() {
    return (
        <>
        <IconContext.Provider value={{ color: "red" }}> 
            <nav className='nav-menu'>
                <ul className="nav-menu-items">
                    <li className="header">TradeZi</li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <NavLink to={item.path} activeClassName="active">
                                {item.icon}
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    )
                })}
                </ul>
            </nav>
        </IconContext.Provider> 
        </>
    )
}

export default Sidebar
