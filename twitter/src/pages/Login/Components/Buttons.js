import React, { useContext } from 'react';
import { BackGroundContext } from '../../../Context/BackGroundContext';
import { Button } from './index';


function Buttons() {
    const {bird}=useContext(BackGroundContext)
    return (
        <div className="login-right" >
          
          <div className="login-right-container">
            <img  className="login-right-bird" src={bird} alt=""></img>
          
            <span className="login-right-span1">Şu anda olup <br/> bitenler</span>
            <span className="login-right-span2">Twitter'a bugün katıl.</span>
            
            <Button as="login-button-with-google" text="Google ile kaydolun"></Button>
                <Button as="login-button-with-apple" text="Apple ile kaydol"></Button>
                <Button as="login-button" text="Telefon numarası veya e-posta adresiyle kaydol"></Button>
                <div className="span-with-links1" ><span className="login-right-span3" >By signing up, you agree to the <a href="">Terms of Service</a> and <a href="">Privacy <br/> Policy</a>, including <a href="">Cookie Use</a></span></div>
                <div className="span-with-links2" ><span className="login-right-span4">Zaten hesabın var mı? <a href="">Giriş yap</a></span></div>
                </div>
        </div>
    );
}

export default Buttons;