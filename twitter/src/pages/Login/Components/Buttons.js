import React, { useContext, useEffect, useState } from 'react';
import { BackGroundContext } from '../../../Context/BackGroundContext';
import { Button } from './index';
import SignUpForm from './SignUpForm';



function Buttons({setLayOut}) {
    const [clicked,setClicked]=useState(false)
    const[register,setRegister]=useState(false)
    const {bird}=useContext(BackGroundContext)

    const onClickHandler = ()=>{
        setRegister(true)
        setLayOut(true)
    }


    
    return (
        <>
        
        {register && clicked===false?( <SignUpForm setLayOut={setLayOut}  setRegister={setRegister} />):(null)}
        <div className="login-right" >
            <div className="login-right-container">
            <img  className="login-right-bird" src={bird} alt=""></img> 
            <span className="login-right-span1">Şu anda olup <br/> bitenler</span>
            <span className="login-right-span2">{clicked?"Twitter'a giriş yap":"Twitter'a bugün katıl."}</span>
            <div className="buttons">
            <Button as="login-button-with-google" text={clicked?"Google ile oturum açın":"Google ile kaydolun"}></Button>
                <Button as="login-button-with-apple" text={clicked?"Apple ile giriş yap":"Apple ile kaydol"}></Button>
                <Button as="login-button" onClick={onClickHandler} text={clicked?"Telefon numarası, e-posta veya kullanıcı adı":"Telefon numarası veya e-posta adresiyle kaydol"}></Button>
                {clicked?(<div className="span-with-links2" ><span className="login-right-span4">Henüz bir hesabın yok mu ? <a onClick={(e)=>{e.preventDefault() 
                    setClicked(false) }} href="">Hemen kaydol</a></span></div>):(  <>
                <div className="span-with-links1" ><span className="login-right-span3" >By signing up, you agree to the <a  target="_blank"rel="noopener noreferrer"href="https://twitter.com/en/tos">Terms of Service</a> and <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/en/privacy">Privacy <br/> Policy</a>, including <a target="_blank" rel="noopener noreferrer"  href="https://help.twitter.com/tr/rules-and-policies/twitter-cookies">Cookie Use</a></span></div>
                <div className="span-with-links2" ><span className="login-right-span4">Zaten hesabın var mı? <a onClick={(e)=>{e.preventDefault() 
                    setClicked(true)}} href="">Giriş yap</a></span></div>
                    </>)}
                </div>
                </div>
        </div>
        </>
    );
}

export default Buttons;