import React, { useState,useEffect } from "react";
import LeftSide from "./LeftSide";
import MiddleSide from "./MiddleSide";
import RightSide from "./RightSide";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../redux/actions/user";
import { Redirect, useHistory } from "react-router";
import { BottomAnchorPopUp, BottomPopUp, HomeLayout, TweetPopUp } from ".";



function Home() {
  const [clicked, setClicked] = useState(false);
  const [clickedAnchor,setClickedAnchor]=useState(false)
  const [clickedTweet,setClickedTweet]=useState(false)
  const [tweet,setTweet]=useState("")


  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleAuth = () => {
    if (!currentUser) {
      console.log(currentUser)
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
    if(e.target.className==="tweet-button")
    {
      setClickedTweet(true)
    }
   else if(e.target.className==="fas fa-times")
   {
     setClickedTweet(false)
   }
  };
  
  
  if(localStorage.getItem("uid")!=null)
  
  {
    return (
      <>
      {clickedTweet?(<HomeLayout setClickedTweet={setClickedTweet}/>):(null)}
      <div onClick={onClickHandler} className="home-page">
        
          {clicked?( <BottomPopUp handleAuth={handleAuth} />  ):(null)}
         
          <LeftSide/>
          {clickedTweet?(<TweetPopUp tweet={tweet} setTweet={setTweet} setClickedTweet={setClickedTweet}/>):(null)}
          

          <MiddleSide tweet={tweet} setTweet={setTweet} />
          <RightSide />
          {clickedAnchor?(<BottomAnchorPopUp />):(null)}
          
      </div>
      </>
    );
  }
  else
  {
    return <Redirect to="/login"/>
  }

  
  
}

export default Home;
