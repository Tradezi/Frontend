import React from 'react';
import Sidebar from './Sidebar'
//import '../App.css'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom' 
import Portfolio from "../pages/Portfolio"
import Stocks from "../pages/Stocks"
import "../styles/Routes.css"

function Routes({ handleLogout }) {
    return (
    <>
    <Router>
        <Sidebar handleLogout={handleLogout}/>
        <Switch>
            <Route exact path="/" render={() => (<Redirect to="/portfolio" />)} />
            <Route path="/portfolio"  exact component={Portfolio} />
            <Route path="/stocks" component={Stocks} />
        </Switch>
    </Router>
    </>
    );
}

export default Routes;
