import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Stock from '../components/Stock';
import {API, routes} from "../API";
import axios from "axios";

function Stocks() {

    const [stockData, setStockData] = useState([]);
    function getStocks(){
        console.log("LOL");
        return API.get(routes.stocks)
            .then(response => {
                console.log("API call", response);
                setStockData(response);
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
                <p>Stock Name</p>
                <p>Current Price</p>
                <p>Action</p>
                <p>Expand</p>
            </div>
            <div className="stocks-container">
                <Stock stockData={stockData} />
            </div>
        </div>
    )
}

export default Stocks
