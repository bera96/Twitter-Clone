import React from 'react';
import { Input } from '.';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BackGroundContext } from '../../../Context/BackGroundContext';
import { useState } from 'react';

function LoginForm({setLayOut,setRegister}) {
    const { bird } = useContext(BackGroundContext);
    const [state,setState]=useState({
        email:"",
        name:"",
        displayName:"",
        password:"",
        confirmPassword:""
    })
   
    const{email,name,password,confirmPassword,displayName}=state
    return (
        <div>
            <div className="signup-form" >
            <div className="signup-top-flex">
                <div className="top-f1">
                    <Link to="/">
                    <i className="fas fa-times signup-close"></i> 
                    </Link>
                </div>
                <div className="top-f2">
                    <img className="signup-bird" src={bird}></img>
                </div>
            </div>
            <div className="signup-bottom-container">
            <form >
                <div className="signup-title-container"><span className="signup-title">Giriş Yap</span></div>
                <div className="name-input"><Input  signUpName={name}  as="signup-input" type="text" name="İsim"  reqired/></div>
                <div className="password-input"><Input  signUpName={name}  as="signup-input" type="password" name="Şifre" reqired/></div>
                <div className="password-input"><Input  signUpName={name}  as="signup-input" type="password" name="Şifreyi Onayla"  reqired/></div>
                <div className="email-input"><Input  signUpEmail={name}  as="signup-input" type="email" name="E-posta" reqired/></div>
                <div className="birthday"><span className="signup-bd" >Doğum Tarihi</span></div>
                <div><span className="signup-bd-info" >Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme, evcil hayvan veya başka bir şey için olsa bile kendi yaşını doğrulaman gerekir.</span></div>
                <div className="select-box-group">
                    
                    <Input as="group-month" name="Ay"/>
                    <Input as="group-day" name="Gün"/>
                    <Input as="group-year" name="Yıl"/>
                    
                </div>
                <div className="signup-next-container" >
                    <Link to="/login">
                    <button  className="signup-next">Giriş Yap</button>
                    </Link>
                </div>
                </form>
                    
            </div>
            
        </div>
        </div>
    );
}

export default LoginForm;