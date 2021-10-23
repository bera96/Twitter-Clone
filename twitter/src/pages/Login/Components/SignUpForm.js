import React, { useContext, useState } from 'react';
import { Input } from '.';
import { BackGroundContext } from '../../../Context/BackGroundContext';


function SignUpForm({setRegister,setLayOut}) {
    const { bird } = useContext(BackGroundContext);
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const onClickHandler=()=>{
        setRegister(false)
        setLayOut(false)
    }
    return (
        <div className="signup-form" >
            <div className="signup-top-flex">
                <div className="top-f1">
                    <i onClick={onClickHandler} className="fas fa-times signup-close"></i> 
                </div>
                <div className="top-f2">
                    <img className="signup-bird" src={bird}></img>
                </div>
            </div>
            <div className="signup-bottom-container">
                <div className="signup-title-container"><span className="signup-title">Hesabını oluştur</span></div>
                <div className="name-input"><Input  signUpName={name} onChange={(e)=>{setName(e.target.value)}} as="signup-input" type="text" name="İsim"/></div>
                <div className="email-input"><Input  signUpEmail={email} onChange={(e)=>{setEmail(e.target.value)}} as="signup-input" type="email" name="E-posta"/></div>
                <div className="birthday"><span className="signup-bd" >Doğum Tarihi</span></div>
                <div><span className="signup-bd-info" >Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme, evcil hayvan veya başka bir şey için olsa bile kendi yaşını doğrulaman gerekir.</span></div>
                <div className="select-box-group">
                    <Input as="group-month" name="Ay"/>
                    <Input as="group-day" name="Gün"/>
                    <Input as="group-year" name="Yıl"/>
                </div>
                <div className="signup-next-container" >
                    <button className="signup-next">İleri</button>
                </div>
            </div>
            
        </div>
    );
}

export default SignUpForm;