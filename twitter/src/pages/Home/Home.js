import React, { useState } from 'react';
import LeftSide from './LeftSide';
import MiddleSide from './MiddleSide';
import RightSide from './RightSide';
import { useDispatch,useSelector } from "react-redux";
import { logoutInitiate } from '../../redux/actions/user';
import { useHistory } from 'react-router';

function Home() {
    const [clicked,setClicked]=useState(false)
    const {currentUser}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const history=useHistory()
    const handleAuth=()=>{
        if(currentUser){
            dispatch(logoutInitiate())
            localStorage.removeItem("uid")
            history.push("/")

        }


    }
    const onClickHandler=(e)=>{
        
        if(e.target.className==="bottom-profile" || e.target.className==="bottom-profile-icon" || e.target.className==="bottom-profile-user"){


            setClicked(true)
            
        }
        else{
            setClicked(false)
        }
     
  
    }
    return (
        <div onClick={onClickHandler} className="home-page">
            {clicked?(<div className="bottom-profile-popup">
                <div className="bottom-profile-user">
                    <div><img></img></div>
                    <div><span>Username</span><span>@Username</span></div>
                    <div>Tik</div>
                </div>
                <div className="bottom-profile-add"><span>Add an existing account</span></div>
                <div onClick={handleAuth}  className="bottom-profile-logout"><span>Logout @Username</span></div>
            </div>):(null)}
            <LeftSide clicked={clicked} setClicked={setClicked}/>
            <MiddleSide/>
            <RightSide/>

        </div>
    );
}


export default Home;