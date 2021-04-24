import axios from 'axios';

var apivar = axios.create({
    //baseURL: "https://952ff94537e7fd.localhost.run/api",
    //baseURL: "https://tradezi-backend.herokuapp.com/api",
    baseURL: "https://1847a123a2b6.ngrok.io/api",
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
    user_details: "/user/details",
    stocks: "/stocks/history?symbol=aapl&years=1"
};

export {apivar as API, routes}
