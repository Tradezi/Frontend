import React from 'react';
import Header from '../components/Header';
import Stock from '../components/Stock';

function Stocks() {
    return (
        <div className="stocks">
            <Header title="Stocks" />            
            <Stock />
        </div>
    )
}

export default Stocks
