import React, {useState, useEffect} from 'react'
import Overview from '../components/Overview'
import Header from '../components/Header'
import {API, routes} from "../API";
import axios from "axios";

function Portfolio() {

    const [user, setUser] = useState();
    function getUserDetails(){
        return API.get(routes.user_details)
            .then(response => {
                console.log("User details", response);
                setUser(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        //getUserDetails();
        console.log("Portfolio page");
        //console.log("User", user);
    }, [])

    return (
        <div className="portfolio">
            <Header title="Portfolio" />
            <Overview />
        </div>
    )
}

export default Portfolio
