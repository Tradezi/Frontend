import React, {useState, useEffect} from 'react'
import Overview from '../components/Overview'
import Header from '../components/Header'
import {API, routes} from "../API";
import axios from "axios";

function Portfolio() {

    // Trial API call
    function getData(){
        console.log("LOL");
        //getData();
        API.get(routes.user_details)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        console.log("Hello");
        getData();
    }, [])

    return (
        <div className="portfolio">
            <Header title="Portfolio" />
            <Overview />
        </div>
    )
}

export default Portfolio
