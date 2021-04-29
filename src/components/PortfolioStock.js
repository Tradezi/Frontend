import React, {useState, useEffect, useRef} from 'react';
import CandleStick from './CandleStick';
import {API, routes} from "../API";

import "../styles/PortfolioStock.css";
import * as FaIcons from "react-icons/fa"

function PortfolioStock( {stockData} ) {

    const symbol = stockData.symbol;
    const company = stockData.company;
    const price = parseFloat(stockData.price).toFixed(2);
    const number = stockData.num_purchased;
    const profit = parseFloat(stockData.profit).toFixed(2);
    
    // Stock history API call
    const [stockHistory, setStockHistory] = useState([]);
    function getHistory(){
        return API.get(routes.stocks_history + "symbol=" + symbol + "&years=1")
            .then(response => {
                setStockHistory(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const [dropState, setDropState] = useState(false);
    const dropDown = () => {
        console.log("Dropdown"); 
        getHistory();
        setDropState(true);
        //executeScroll();
    }
    const pullUp = () => {
        setDropState(false);
        //executeScroll();
    }

    return(
        <div className="portfolio-stock">
            <div className="portfolio-stock-details">
                <div className="portfolio-text">
                    <p>{symbol}</p>
                    <p>{company}</p>
                </div>
                <div className="portfolio-numbers">
                    <p>$ {price}</p>
                    <p>{number}</p>
                    <p>$ {profit}</p>
                </div>
                <div className="portfolio-control">
                    <button>Buy/Sell</button>
                    { dropState ? (
                        <FaIcons.FaChevronUp className="drop-down" onClick={pullUp}/>
                    ) : (
                        <FaIcons.FaChevronDown className="drop-down" onClick={dropDown}/>
                    ) }
                </div>
            </div>
            { dropState && <CandleStick symbol={symbol} stockHistory={stockHistory}/> }
        </div>
    );
}

export default PortfolioStock;
