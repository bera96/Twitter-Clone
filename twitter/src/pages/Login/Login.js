
import React, { useState } from 'react';
import { Background, Buttons, Footer,Layout } from './Components';
import './Login.css'

function Login() {
    const [layout,setLayOut]=useState(false)
    return (
        <div>
            
            <div className="login-flex" >
            <Layout layout={layout} />
            <Background/>
            <Buttons setLayOut={setLayOut} >
            </Buttons>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Login;



