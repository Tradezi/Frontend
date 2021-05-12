import React, {useState} from 'react';
import "../styles/TransactionPopUp.css";
import Popup from 'reactjs-popup';
import {API, routes} from "../API";

function TransactionPopUp({symbol, company, price, setPopUpState}){

    const [quantity, setQuantity] = useState(10);
    const [errorMessage, setErrorMessage] = useState("");

    const closePopup = (event) => {
        setPopUpState(false);
    }

    const buyStock = () => {
        var data = {
            stockSymbol : symbol,
            stockPrice : parseFloat(price),
            //stockPrice : 100000,
            numOfStocks : parseInt(quantity),
            buy : 1
        }
        API.post(routes.transaction, data)
            .then(res =>{
                console.log(res);
                setPopUpState(false);
            })
            .catch(err =>{
                console.log(err);
                setErrorMessage(err);
            })
        console.log("Buy");
    }

    const sellStock = () => {
        var data = {
            stockSymbol : symbol,
            stockPrice : parseFloat(price),
            numOfStocks : parseInt(quantity),
            buy : 0
        }
        API.post(routes.transaction, data)
            .then(res =>{
                console.log(res);
                setPopUpState(false);
            })
            .catch(err =>{
                console.log(err);
                setErrorMessage(err);
            })
        console.log("Sell");
    }
    console.log(quantity);

    return(
        <div className="bg">
            <div className="transaction">
                <div className="stock-name">
                    <p>{symbol}</p>
                    <p>{company}</p>
                </div>
                <div className="stock-numbers">
                    <p>At price: {price}</p>
                    <label>Quantity -</label>
                    <input 
                        type="text" 
                        autoFocus 
                        required
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <div className="buttons">
                    <button className="btn-buy" onClick={buyStock}>Buy</button>
                    <button className="btn-sell" onClick={sellStock}>Sell</button>
                    <button className="btn-close" onClick={closePopup}>Close</button>
                </div>
                <p>{errorMessage}</p>
            </div>
        </div>
    )
}

export default TransactionPopUp;
