import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Stock from '../components/Stock';
import {API, routes} from "../API";
import axios from "axios";

function Stocks() {

    const [stockData, setStockData] = useState([]);
    // Trial API call
    function getHistory(){
        console.log("LOL");
        return API.get(routes.stocks_history)
            .then(response => {
                console.log("API call", response);
                setStockData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        getHistory();
        console.log("All stocks component");
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
                <Stock stockData={stockData} />
                <Stock stockData={stockData} />
                <Stock stockData={stockData} />
                <Stock stockData={stockData} />
                <Stock stockData={stockData} />
                <Stock stockData={stockData} />
            </div>
        </div>
    )
}

export default Stocks
