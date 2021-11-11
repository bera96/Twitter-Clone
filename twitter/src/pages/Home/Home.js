import React, { useState,useEffect } from "react";
import LeftSide from "./LeftSide";
import MiddleSide from "./MiddleSide";
import RightSide from "./RightSide";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../redux/actions/user";
import { useHistory } from "react-router";
import { BottomAnchorPopUp, BottomPopUp } from ".";


function Home() {
  const [clicked, setClicked] = useState(false);
  const [clickedAnchor,setClickedAnchor]=useState(false)
  const [tweet,setTweet]=useState(null)


  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
      localStorage.removeItem("uid");
      history.push("/");
    }
  };
  const onClickHandler=(e)=>{
    if (
      e.target.className === "bottom-profile" ||
      e.target.className === "bottom-profile-icon" ||
      e.target.className === "bottom-profile-user"
    ) {
      setClicked(true);
      
    } else {
      setClicked(false);
    }
    if(e.target.innerHTML==="More ...")
    {
      setClickedAnchor(true)
    }
    else
    {
      setClickedAnchor(false)
    }
  };
  



  
  return (
    <div onClick={onClickHandler} className="home-page">
        {clicked?( <BottomPopUp handleAuth={handleAuth} />  ):(null)}
       
        <LeftSide/>
        <MiddleSide tweet={tweet} setTweet={setTweet} />
        <RightSide />
        {clickedAnchor?(<BottomAnchorPopUp />):(null)}
        
    </div>
  );
}

export default Home;
