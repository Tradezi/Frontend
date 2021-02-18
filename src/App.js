import React from 'react';
import Sidebar from './components/Sidebar'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Portfolio from "./pages/Portfolio"
import Stocks from "./pages/Stocks"

function App() {
  return (
    <>
    <Router>
        <Sidebar />
        <Switch>
            <Route path="/"  exact component={Portfolio} />
            <Route path="/stocks" component={Stocks} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
