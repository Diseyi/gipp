import React from 'react';
import Header from '../../../reusable/Header';
import Bitmap from '../../../reusable/Bitmap';
import "./Auth.css";

const Login = () => {
    return (
        <div className="Login" >
            <Header />
            <main className="Main-Login" >
                <div className="Login-Flex" >
                    <div className="Login-Bitmap Login-Fifty" >
                        <Bitmap value="Welcome" value2="Login to continue" />
                        
                    </div>
                    <div className="Login-Div Login-Fifty" ></div>
                </div>
            </main>
        </div>
    )
}

export default Login
