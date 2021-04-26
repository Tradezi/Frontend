import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Stock from '../components/Stock';
import {API, routes} from "../API";
import axios from "axios";

function Stocks() {

    const [stockData, setStockData] = useState([]);
    function getStocks(){
        //console.log("LOL");
        return API.get(routes.stocks)
            .then(response => {
                console.log("Get stocks API call", response.data);
                setStockData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        getStocks();
        console.log("Stocks page");
        console.log("Use state", stockData);
    }, [])

    return (
        <div className="stocks">
            <Header title="Stocks" />            
            <div className="title-bar">
                <p>Symbol</p>
                <p>Company</p>
                <p>Current Price</p>
            </div>
            <div className="stocks-container">
                {
                    stockData.map((value, index) => {
                        return <Stock key={index} stockData={value} />
                    })
                }
            </div>
        </div>
    )
}

export default Stocks
