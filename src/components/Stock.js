import React, {useState, useEffect, useRef} from 'react';
import CandleStick from './CandleStick';
import {API, routes} from "../API";

import "../styles/Stock.css";
import * as FaIcons from "react-icons/fa"

function Stock( {stockData} ) {

    // Stock details
    const symbol = stockData.symbol;
    const company = stockData.company;
    const price = parseFloat(stockData.price).toFixed(2);

    const [dropState, setDropState] = useState(false);
    const dropDown = () => {
        console.log("Dropdown"); 
        setDropState(true);
        executeScroll();
    }
    const pullUp = () => {
        setDropState(false);
        executeScroll();
    }

    console.log(routes.stocks_history + "symbol=" + symbol + "&years=1");

    // Stock history API call
    const [stockHistory, setStockHistory] = useState([]);
    function getHistory(){
        return API.get(routes.stocks_history + "symbol=" + symbol + "&years=1")
            .then(response => {
                console.log("Get history API call", response);
                setStockHistory(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        getHistory();
        console.log("Stock component", stockData);
        console.log("Use state", stockHistory);
    }, [])

    // Scrolling the component into view
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

    return (
        <div className="stock " ref={myRef}>
            <div className="stock-details">
                <div className="stock-text">
                    <p>{symbol}</p>
                    <p>{company}</p>
                    <p>{price}</p>
                </div>
                <div className="stock-control">
                    <button>Buy/Sell</button>
                    { dropState ? (
                        <FaIcons.FaChevronUp className="drop-down" onClick={pullUp}/>
                    ) : (
                        <FaIcons.FaChevronDown className="drop-down" onClick={dropDown}/>
                    ) }
                </div>
            </div>
            { dropState && <CandleStick stockHistory={stockHistory}/> }
            
            
        </div>
    );
}

export default Stock;
