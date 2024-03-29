import React from 'react';
import "../styles/Login.css";

function Login(props) {
    
    const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props;

    return (
        <section className="login">
            <div className="landingPage">
                <h1>TRADEZI</h1>
                <p>An easier way to get into trading!</p>
            </div>
            <div className="loginContainer">
                <label>Username</label>
                <input 
                    type="text" 
                    autoFocus 
                    required
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input 
                    type="password" 
                    required
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Dont have an account?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>Already have an account?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>

                    )}
                </div>
            </div>
        </section>
    )
}

export default Login
