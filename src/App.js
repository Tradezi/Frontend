import React, {useState, useEffect} from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Routes from "./components/Routes";
import Login from "./components/Login";
import fire from "./Firebase";
import {API, routes} from "./API";
import axios from "axios";

function App() {
    //Firebase Login
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    }

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }

    const handleLogin = () => {
        //clearErrors();
        var data = {
            email: "lol@gmail.com",
            password: "lollol"
        }
        //axios.post("https://1847a123a2b6.ngrok.io/api/user/sign_in", data)
        //axios.post("http://backend.tradezi.co.in/api/user/sign_in", data)
        API.post(routes.sign_in, data)
            .then(res =>{
                console.log(res);
                if(res.status == 200){
                    setUser(true);
                }
            })
    };

    const handleSignup = () => {
        //clearErrors();
        var data = {
            username: "lol",
            name: "lol lol",
            email: "lol@gmail.com",
            password : "lollol"
        };
        //axios.post("https://1847a123a2b6.ngrok.io/api/user/sign_up", data)
        //axios.post("http://backend.tradezi.co.in/api/user/sign_up", data)
        API.post(routes.sign_up, data)
            .then(res =>{
                console.log("LOLOLOL");
                console.log(res);
                if(res.status == 200){
                    setUser(true);
                }
            })
    };

    const handleLogout = () => {
    };

    const authListener = () => {
    };

    useEffect(() => {
        authListener();
    }, [])




    



  //return (
    //<>
      //{user ? (
        //<Routes handleLogout={handleLogout}/>
      //) : (
        //<Login 
          //email={email}
          //setEmail={setEmail}
          //password={password}
          //setPassword={setPassword}
          //handleLogin={handleLogin}
          //handleSignup={handleSignup}
          //hasAccount={hasAccount}
          //setHasAccount={setHasAccount}
          //emailError={emailError}
          //passwordError={passwordError}
        ///>
      //)}
    //</>
  //);

    return (
        <Routes />
    );
}

export default App;
