import React, {useState, useEffect, useRef} from 'react';
import CandleStick from './CandleStick';

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

    useEffect(() => {
        console.log("Stock component");
        console.log("Component prop", {stockData});
    }, []);

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
            { dropState && <CandleStick stockData={stockData} /> }
            
            
        </div>
    );
}

export default Stock;
