import React, { useState, useEffect } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { NavLink, Link } from 'react-router-dom'
import { SidebarData } from "./SidebarData"
import "../styles/Sidebar.css" 
import { IconContext } from "react-icons"
import {API, routes} from "../API";

function Sidebar({ handleLogout }) {
    const [userDetails, setUserDetails] = useState({});
    function getUserDetails(){
        return API.get(routes.user_details)
            .then(response => {
                console.log("User details", response.data);
                setUserDetails(response.data);
                //console.log("UserName", userDetails.username);
            })
            .catch(error => {
                console.log(error);
            })
    }


    useEffect(() => {
        console.log("Sidebar mounted");
        getUserDetails();
    }, [])

    const userName = userDetails.username;
    console.log("User", userName);


    return (
        <>
        <IconContext.Provider value={{ color: "red" }}> 
            <nav className='nav-menu'>
                <ul className="nav-menu-items">
                    <li className="header">TRADEZI</li>
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
                <div className="sidebar-footer">
                    <p>Welcome! {userName}</p>
                    <button className="btn-footer" ><FaIcons.FaCog /><span>Settings</span></button>
                    <button className="btn-footer" onClick={handleLogout}><FaIcons.FaUser /><span>Logout</span></button>
                </div>
            </nav>
        </IconContext.Provider> 
        </>
    )
}

export default Sidebar
