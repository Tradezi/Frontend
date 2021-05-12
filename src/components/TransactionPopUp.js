import React, {useState} from 'react';
import "../styles/TransactionPopUp.css";
import Popup from 'reactjs-popup';

function TransactionPopUp({symbol, company, price, setPopUpState}){

    const [quantity, setQuantity] = useState(10);

    const closePopup = (event) => {
        setPopUpState(false);
    }

    const buyStock = () => {
        console.log("Buy");
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
                    <button className="btn-sell">Sell</button>
                    <button className="btn-close" onClick={closePopup}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default TransactionPopUp;
