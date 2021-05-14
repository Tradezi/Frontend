import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Stock from '../components/Stock';
import {API, routes} from "../API";
import axios from "axios";
import * as FaIcons from "react-icons/fa"

function Stocks() {

    const [pageNumber, setPageNumber] = useState(0);
    function nextPage() {
        setPageNumber(pageNumber + 1);
        getStocks();
    }

    function prevPage() {
        setPageNumber(pageNumber - 1);
        getStocks();
    }

    const [stockData, setStockData] = useState([]);
    function getStocks(){
        //console.log("LOL");
        return API.get(routes.stocks + pageNumber)
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
                <div className="title-text">
                    <p>Symbol</p>
                    <p>Company</p>
                    <p>Current Price</p>
                </div>
                <FaIcons.FaChevronLeft onClick={prevPage}/>
                <p>Page {pageNumber + 1}</p>
                <FaIcons.FaChevronRight onClick={nextPage}/>
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
