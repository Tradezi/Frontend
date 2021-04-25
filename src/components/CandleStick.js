import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

import "../styles/CandleStick.css";

function CandleStick( {stockData} ) {

    const data = {stockData};
    const rawData = data.stockData;
    console.log("Raw data", rawData[0]);

    const convertToOHLC = (data) => {
        const converted = []
        var myDate = data.date;
        myDate = myDate.split("-");
        var newDate = new Date(myDate[2], myDate[0], myDate[1]);
        console.log(newDate);
        converted.push(newDate.getTime())
        const ohlc = []

        ohlc.push(data.open.toFixed(2));
        ohlc.push(data.high.toFixed(2));
        ohlc.push(data.low.toFixed(2));
        ohlc.push(data.close.toFixed(2));
        
        converted.push(ohlc)
        console.log("Converted to OHLC", converted)
        
        return converted;
    }

    const ohlcData = [];
    for(let i = 0; i < rawData.length; i++){
        var temp = convertToOHLC(rawData[i]);
        ohlcData.push(temp);
        console.log(temp);
    }

    //convertToOHLC(rawData[0]);


    const state = {

            series: [{
              // Data has to be in OHLC format
                data: ohlcData
                //data: [
                    //[1538856000000, [70.44999694824219, 71.13500213623047, 69.98750305175781, 70.7925033569336]]
                //]
              //data: [{
                  //x: new Date(1538778600000),
                  //y: [6629.81, 6650.5, 6623.04, 6633.33]
                //},
                //{
                  //x: new Date(1538780400000),
                  //y: [6632.01, 6643.59, 6620, 6630.11]
                //},
                //{
                  //x: new Date(1538782200000),
                  //y: [6630.71, 6648.95, 6623.34, 6635.65]
                //},
                //{
                  //x: new Date(1538784000000),
                  //y: [6635.65, 6651, 6629.67, 6638.24]
                //},
                //{
                  //x: new Date(1538785800000),
                  //y: [6638.24, 6640, 6620, 6624.47]
                //},
              //]
            }],
            options: {
              chart: {
                type: 'candlestick',
                height: 350
              },
              title: {
                text: 'AAPL',
                  align: 'left',
                  style: {
                      color: "white",
                      fontWeight: 400,
                      fontFamily: "Lato"
                  },
              },
              xaxis: {
                type: 'datetime',
              },
              yaxis: {
                tooltip: {
                  enabled: true,
                }
              },
              tooltip: {
                  theme: "dark"
              }
            },


          };

    useEffect(() => {
        console.log("CandleStick component");
        console.log("Candle prop", {stockData});
    }, [])

    return(
        <Chart
            className="candle-stick"
            options={state.options}
            series={state.series} 
            type="candlestick"
            height={350}
        />
    );
}

export default CandleStick;
