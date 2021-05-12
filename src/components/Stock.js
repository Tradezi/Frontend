import React, {useState, useEffect, useRef} from 'react';
import CandleStick from './CandleStick';
import {API, routes} from "../API";
import TransactionPopUp from './TransactionPopUp'

import "../styles/Stock.css";
import * as FaIcons from "react-icons/fa"

function Stock( {stockData} ) {

    // Stock details
    const symbol = stockData.symbol;
    const company = stockData.company;
    const price = parseFloat(stockData.price).toFixed(2);

    // Drop down for showing candlestick chart
    const [dropState, setDropState] = useState(false);
    const dropDown = () => {
        console.log("Dropdown"); 
        getHistory();
        setDropState(true);
        executeScroll();
    }
    const pullUp = () => {
        setDropState(false);
        executeScroll();
    }

    // Pop up for making a transaction
    const [popUpState, setPopUpState] = useState(false);
    const popUp = () => {
        console.log("POPUP!");
        setPopUpState(true);
    }


    //console.log(routes.stocks_history + "symbol=" + symbol + "&years=1");

    // Stock history API call
    const [stockHistory, setStockHistory] = useState([]);
    const getHistory = () => {
        return API.get(routes.stocks_history + "symbol=" + symbol + "&years=1")
            .then(response => {
                setStockHistory(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
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
                    <p>$ {price}</p>
                </div>
                <div className="stock-control">
                    <button onClick={popUp}>Buy</button>
                    { popUpState && <TransactionPopUp symbol={symbol} company={company} price={price} setPopUpState={setPopUpState}/> }
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

export default Stock;
