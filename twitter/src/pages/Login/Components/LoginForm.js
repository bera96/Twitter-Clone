import React, { useEffect } from 'react';
import { Input } from '.';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BackGroundContext } from '../../../Context/BackGroundContext';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginInitiate } from '../../../redux/actions/user';

function LoginForm({setLogin,setLayOut}) {
    const { bird } = useContext(BackGroundContext);
    const [state,setState]=useState({
        email:"",
        name:"",
        password:"",
      
    })
    const {currentUser} = useSelector(state=>state.user)
    const history=useHistory()
    useEffect(()=>{
        
        if(currentUser){
            history.push("/")
        }

    },[currentUser,history])
    const dispatch=useDispatch()
    const{email,name,password}=state
    const onClickHandler=()=>{
        setLogin(false)
        setLayOut(false)
    }
   const handleSubmit=(e)=>{
    e.preventDefault()
    if(!email || !password){
       return    console.log(email,password)
    }
    dispatch(loginInitiate(email,password))
    setState({email:"",password:""})
    console.log(email,password)
   }
   

    
    
    
    
    
    return (
        <div>
            <div className="signup-form login-form" >
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
            <form onSubmit={handleSubmit} >
                <div className="signup-title-container"><span className="signup-title">Giriş Yap</span></div>

                <div className="email-input"><Input onChange={(e)=>{setState({...state,email:e.target.value})}} signUpEmail={name}  as="signup-input" type="email" name="E-posta" reqired/></div>
                
                <div className="password-input"><Input onChange={(e)=>{setState({...state,password:e.target.value})}} signUpName={name}  as="signup-input" type="password" name="Şifre" reqired/></div>
                
               
                <div className="signup-next-container" >
                    
                    <button className="signup-next">Giriş Yap</button>
                   
                </div>
                </form>
                    
            </div>
            
        </div>
        </div>
    );
}

export default LoginForm;