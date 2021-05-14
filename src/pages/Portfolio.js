import React, {useState, useEffect} from 'react'
import Overview from '../components/Overview'
import Header from '../components/Header'
import PortfolioStock from '../components/PortfolioStock'
import {API, routes} from "../API";
import axios from "axios";

function Portfolio() {

    const [userFunds, setUserFunds] = useState({});
    function getUserFunds(){
        return API.get(routes.user_details)
            .then(response => {
                console.log("User Funds", response.data.funds);
                setUserFunds(response.data.funds);
                //console.log("UserName", userDetails.username);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const [userStockDetails, setUserStockDetails] = useState({});
    const [userStocks, setUserStocks] = useState([]);
    function getUserStockDetails(){
        return API.get(routes.user_stock_details)
            .then(response => {
                console.log("User Stock Details", response.data);
                setUserStockDetails(response.data);
                setUserStocks(response.data.stocks);
                //console.log("UserName", userDetails.username);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        console.log("Portfolio mounted");
        getUserFunds();
        getUserStockDetails();
    }, [])


    console.log("User funds", String(userFunds));
    console.log("User stocks", userStockDetails.stocks);

    return (
        <div className="portfolio">
            <Header title="Portfolio" />
            <Overview userFunds={userFunds} userStockDetails={userStockDetails}/>
            <div className="portfolio-container">
                {
                    userStocks.map((value, index) => {
                        return <PortfolioStock key={index} stockData={value} />
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio
