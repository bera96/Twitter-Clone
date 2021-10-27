import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Input } from '.';
import { BackGroundContext } from '../../../Context/BackGroundContext';
import { registerInitiate } from '../../../redux/actions/user';
import { LoginForm } from '.';



function SignUpForm({setRegister,setLayOut}) {
    const { bird } = useContext(BackGroundContext);
    
   
    const [state,setState]=useState({
        email:"",
        name:"",
        displayName:"",
        password:"",
        confirmPassword:""
    })
    const {currentUser} = useSelector(state=>state.user)
    const history=useHistory()

    useEffect(()=>{
        
        if(currentUser){
            history.push("/")
        }

    },[currentUser,history])
    const dispatch=useDispatch()
    const{email,name,password,confirmPassword,displayName}=state
    const onClickHandler=()=>{
        setRegister(false)
        setLayOut(false)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(password!==confirmPassword){
            return
        }
        dispatch(registerInitiate(email,password,displayName))
        setState({email:"",displayName:"",password:"",confirmPassword:""})
    }
    

    return (
        
        <div className="signup-form" >
            <div className="signup-top-flex">
                <div className="top-f1">
                    <Link to="/">
                    <i onClick={onClickHandler} className="fas fa-times signup-close"></i> 
                    </Link>
                </div>
                <div className="top-f2">
                    <img className="signup-bird" src={bird}></img>
                </div>
            </div>
            <div className="signup-bottom-container">
            <form onSubmit={handleSubmit}>
                <div className="signup-title-container"><span className="signup-title">Hesabını oluştur</span></div>
                <div className="name-input"><Input  signUpName={name} onChange={(e)=>setState({...state,name:e.target.value})} as="signup-input" type="text" name="İsim" value={name} reqired/></div>
                <div className="password-input"><Input  signUpName={password} onChange={(e)=>{setState({...state,password:e.target.value})}} as="signup-input" type="password" name="Şifre" value={password} reqired/></div>
                <div className="password-input"><Input  signUpName={confirmPassword} onChange={(e)=>{setState({...state,confirmPassword:e.target.value})}} as="signup-input" type="password" name="Şifreyi Onayla" value={confirmPassword} reqired/></div>
                <div className="email-input"><Input  signUpEmail={email} onChange={(e)=>{setState({...state,email:e.target.value})}} as="signup-input" type="email" name="E-posta" value={email} reqired/></div>
                <div className="birthday"><span className="signup-bd" >Doğum Tarihi</span></div>
                <div><span className="signup-bd-info" >Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme, evcil hayvan veya başka bir şey için olsa bile kendi yaşını doğrulaman gerekir.</span></div>
                <div className="select-box-group">
                    
                    <Input as="group-month" name="Ay"/>
                    <Input as="group-day" name="Gün"/>
                    <Input as="group-year" name="Yıl"/>
                    
                </div>
                <div className="signup-next-container" >
                   
                    <button  className="signup-next">İleri</button>
                    
                </div>
                </form>
                    
            </div>
            
        </div>
    );
}

export default SignUpForm;