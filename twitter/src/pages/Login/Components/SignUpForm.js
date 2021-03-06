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
        setRegister(false)
        setLayOut(false)
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
                <div className="signup-title-container"><span className="signup-title">Hesab??n?? olu??tur</span></div>
                <div className="name-input"><Input  signUpName={name} onChange={(e)=>setState({...state,name:e.target.value})} as="signup-input" type="text" name="??sim" value={name} reqired/></div>
                <div className="password-input"><Input  signUpName={password} onChange={(e)=>{setState({...state,password:e.target.value})}} as="signup-input" type="password" name="??ifre" value={password} reqired/></div>
                <div className="password-input"><Input  signUpName={confirmPassword} onChange={(e)=>{setState({...state,confirmPassword:e.target.value})}} as="signup-input" type="password" name="??ifreyi Onayla" value={confirmPassword} reqired/></div>
                <div className="email-input"><Input  signUpEmail={email} onChange={(e)=>{setState({...state,email:e.target.value})}} as="signup-input" type="email" name="E-posta" value={email} reqired/></div>
                <div className="birthday"><span className="signup-bd" >Do??um Tarihi</span></div>
                <div><span className="signup-bd-info" >Bu, herkese a????k olarak g??sterilmeyecek. Bu hesap bir i??letme, evcil hayvan veya ba??ka bir ??ey i??in olsa bile kendi ya????n?? do??rulaman gerekir.</span></div>
                <div className="select-box-group">
                    
                    <Input as="group-month" name="Ay"/>
                    <Input as="group-day" name="G??n"/>
                    <Input as="group-year" name="Y??l"/>
                    
                </div>
                <div className="signup-next-container" >
                   
                    <button  className="signup-next">??leri</button>
                    
                </div>
                </form>
                    
            </div>
            
        </div>
    );
}

export default SignUpForm;