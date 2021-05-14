import React, {useState, useEffect, useRef} from 'react';
import CandleStick from './CandleStick';
import {API, routes} from "../API";
import TransactionPopUp from './TransactionPopUp'

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

    const [currentPrice, setCurrentPrice] = useState(0);
    function getCurrentPrice(){
        return API.get(routes.current + symbol)
            .then(response => {
                console.log("current", response.data.price);
                setCurrentPrice(parseFloat(response.data.price).toFixed(2))
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
        executeScroll();
    }
    const pullUp = () => {
        setDropState(false);
        executeScroll();
    }

    // Pop up for making a transaction
    const [popUpState, setPopUpState] = useState(false);
    const popUp = () => {
        setPopUpState(true);
    }

    // Scrolling the component into view
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

    useEffect(() => {
        getCurrentPrice();
    }, [])
    
    return(
        <div className="portfolio-stock" ref={myRef}>
            <div className="portfolio-stock-details">
                <div className="portfolio-text">
                    <p>{symbol}</p>
                    <p>{company}</p>
                    <p>$ {currentPrice}</p>
                </div>
                <div className="portfolio-numbers">
                    <p>{number}</p>
                    <p>$ {profit}</p>
                </div>
                <div className="portfolio-control">
                    <button onClick={popUp}>Buy/Sell</button>
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

export default PortfolioStock;
