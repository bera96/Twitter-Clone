
import React, { useState } from 'react';
import { Background, Buttons, Footer,Layout } from './Components';
import './Login.css'

function Login() {
    const [layout,setLayOut]=useState(false)
    const [clicked,setClicked]=useState(false)
    return (
        <div>
            
            <div className="login-flex" >
            <Layout clicked={clicked} layout={layout} />
            <Background/>
            <Buttons clicked={clicked} setClicked={setClicked} setLayOut={setLayOut} >
            </Buttons>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Login;



