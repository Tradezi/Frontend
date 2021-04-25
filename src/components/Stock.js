import React, {useState, useEffect} from 'react';
import CandleStick from './CandleStick';

import "../styles/Stock.css";
import * as FaIcons from "react-icons/fa"

function Stock( {stockData} ) {

    const [dropState, setDropState] = useState(false);

    const dropDown = () => {
        console.log("Dropdown"); 
        setDropState(true);
    }

    const pullUp = () => {
        setDropState(false);
    }

    useEffect(() => {
        console.log("Stock component");
        console.log("Component prop", {stockData});
    }, [])

    return (
        <div className="stock ">
            <div className="stock-details">
                <p>AAPL</p>
                <p>Apple</p>
                <p>70.79</p>
                <button>Buy or Sell</button>
                { dropState ? (
                    <FaIcons.FaChevronUp className="drop-down" onClick={pullUp}/>
                ) : (
                    <FaIcons.FaChevronDown className="drop-down" onClick={dropDown}/>
                ) }
            </div>
            { dropState && <CandleStick stockData={stockData} /> }
            
            
        </div>
    );
}

export default Stock;
