import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Stock from '../components/Stock';
import {API, routes} from "../API";
import axios from "axios";

function Stocks() {

    const [stockData, setStockData] = useState([]);
    // Trial API call
    function getData(){
        console.log("LOL");
        //getData();
        return API.get(routes.stocks)
            .then(response => {
                console.log("API call", response);
                setStockData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        getData();
        console.log("All stocks component");
        console.log("Use state", stockData);
    }, [])

    return (
        <div className="stocks">
            <Header title="Stocks" />            
            <Stock stockData={stockData} />
        </div>
    )
}

export default Stocks
