import React from 'react';
import Sidebar from './Sidebar'
//import '../App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Portfolio from "../pages/Portfolio"
import Stocks from "../pages/Stocks"

function Routes({ handleLogout }) {
    return (
    <>
    <Router>
        <Sidebar handleLogout={handleLogout}/>
        <Switch>
            <Route path="/portfolio"  exact component={Portfolio} />
            <Route path="/stocks" component={Stocks} />
        </Switch>
    </Router>
    </>
    );
}

export default Routes;
