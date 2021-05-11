import React from 'react';
import "../styles/TransactionPopUp.css";
import Popup from 'reactjs-popup';

function TransactionPopUp({symbol, company, price}){
    return(
        <div className="popup-bg">
            <div className="popup">
                <p>{symbol}</p>
                <p>{company}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default TransactionPopUp;
