import axios from 'axios';

var apivar = axios.create({
    //baseURL: "https://952ff94537e7fd.localhost.run/api",
    baseURL: "https://backend.tradezi.co.in/api",
    //baseURL: "https://1847a123a2b6.ngrok.io/api",
    // responseType: "json",
    withCredentials: true,
    validateStatus: function (status) {
    return status >= 200 && status < 300; // default
    }
});

apivar.defaults.headers.common = {
    "Content-Type": "application/json"
}

var routes = {
    sign_in: "/user/sign_in",
    sign_up: "/user/sign_up",
    user_details: "/user/details",
    user_stock_details: "user/stock_details",
    stocks: "/stocks/all?page=",
    current: "/stocks/current?symbol=",
    //stocks_history: "/stocks/history?symbol=aapl&years=1"
    stocks_history: "/stocks/history?",
    transaction: "/stocks/transaction" 
};

export {apivar as API, routes}
