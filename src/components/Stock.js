import React from 'react'
import "../styles/Stock.css";
import * as FaIcons from "react-icons/fa"

function Stock() {
    return (
        <div className="stock">
            <div className="stock-details">
                <p>Stock Symbol</p>
                <p>Stock Name</p>
                <p>Current price</p>
                <button>Buy or Sell</button>
                <FaIcons.FaChevronDown className="drop-down"/>               
            </div>
        </div>
    );
}

export default Stock;
