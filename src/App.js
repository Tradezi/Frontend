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
        clearErrors();
        var data = {
            email: "lol@gmail.com",
            password: "lollol"
        }
        //axios.post("https://952ff94537e7fd.localhost.run/api/user/sign_in", data)
        axios.post("https://tradezi-backend.herokuapp.com/api/user/sign_in", data)
            .then(res =>{
                console.log("LOLOLOL");
                console.log(res);
                if(res.status == 200){
                    setUser(true);
                }
            })
        //fire
            //.auth()
            //.signInWithEmailAndPassword(email, password)
            //.then((res) => {
                //res.user.getIdToken()
                    //.then((re) => {
                        //console.log(re);
                    //});
            //})
            //.catch((err) => {
                //switch(err.code){
                    //case "auth/invalid-email":
                    //case "auth/user-disabled":
                    //case "auth/user-not-found":
                        //setEmailError(err.message);
                        //break;
                    //case "auth/wrong-password":
                        //setPasswordError(err.message);
                        //break;
                //}
            //});
    };

    const handleSignup = () => {
        clearErrors();
        var data = {
            username: "lol",
            name: "lol lol",
            email: "lol@gmail.com",
            password : "lollol"
        };
        //axios.post("https://952ff94537e7fd.localhost.run/api/user/sign_up", data)
        axios.post("https://tradezi-backend.herokuapp.com/api/user/sign_up", data)
            .then(res =>{
                console.log("LOLOLOL");
                console.log(res);
                if(res.status == 200){
                    setUser(true);
                }
            })
        //fire
            //.auth()
            //.createUserWithEmailAndPassword(email, password)
            //.catch((err) => {
                //switch(err.code){
                    //case "auth/email-already-in-use":
                    //case "auth/invalid-email":
                        //setEmailError(err.message);
                        //break;
                    //case "auth/weak-password":
                        //setPasswordError(err.message);
                        //break;
                //}
            //});
    };

    const handleLogout = () => {
        //fire.auth().signOut();
    };

    const authListener = () => {
        //fire.auth().onAuthStateChanged(user => {
            //if(user){
                //clearInputs();
                //setUser(user);
            //} else{
                //setUser("");
            //}
        //})
    };

    useEffect(() => {
        authListener();
    }, [])

    // Trial API call
    function getData(){
        console.log("LOL");
        //getData();
        API.get(routes.stocks)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    

    //useEffect(() => {
        //console.log("Hello");
        //getData();
    //}, [])


  /*
   *return (
   *  <>
   *    {user ? (
   *      <Routes handleLogout={handleLogout}/>
   *    ) : (
   *      <Login 
   *        email={email}
   *        setEmail={setEmail}
   *        password={password}
   *        setPassword={setPassword}
   *        handleLogin={handleLogin}
   *        handleSignup={handleSignup}
   *        hasAccount={hasAccount}
   *        setHasAccount={setHasAccount}
   *        emailError={emailError}
   *        passwordError={passwordError}
   *      />
   *    )}
   *  </>
   *);
   */
    return (
        <Routes />
    );
}

export default App;
