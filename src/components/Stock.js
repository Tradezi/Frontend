import React, {useState, useEffect, useRef} from 'react';
import CandleStick from './CandleStick';
import {API, routes} from "../API";

import "../styles/Stock.css";
import * as FaIcons from "react-icons/fa"

function Stock( {stockData} ) {

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

    const [stockHistory, setStockHistory] = useState([]);
    // Trial API call
    function getHistory(){
        console.log("LOL");
        return API.get(routes.stocks_history)
            .then(response => {
                console.log("API call", response);
                setStockHistory(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        //getHistory();
        console.log("Stock component", stockData);
        //console.log("Use state", stockHistory);
    }, [])
    //useEffect(() => {
        //console.log("Stock component");
        //console.log("Component prop", {stockData});
    //}, []);

    // Scrolling the component into view
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

    return (
        <div className="stock " ref={myRef}>
            <div className="stock-details">
                <p>AAPL</p>
                <p>Apple</p>
                <p>70.79</p>
                <button>Buy/Sell</button>
                { dropState ? (
                    <FaIcons.FaChevronUp className="drop-down" onClick={pullUp}/>
                ) : (
                    <FaIcons.FaChevronDown className="drop-down" onClick={dropDown}/>
                ) }
            </div>
            { dropState && <CandleStick /> }
            
            
        </div>
    );
}

export default Stock;
