import React from 'react';
import CandleStick from './CandleStick';

import "../styles/Stock.css";
import * as FaIcons from "react-icons/fa"

function Stock() {

    const dropDown = () => {
        console.log("Dropdown"); 
        const chart = document.querySelector(".candle-stick");
        console.log(chart);
        chart.classList.toggle("hidden")
    }

    return (
        <div className="stock ">
            <div className="stock-details">
                <p>Stock Symbol</p>
                <p>Stock Name</p>
                <p>Current price</p>
                <button>Buy or Sell</button>
                <FaIcons.FaChevronDown className="drop-down" onClick={dropDown}/>            
            </div>
            <CandleStick />
            
        </div>
    );
}

export default Stock;
