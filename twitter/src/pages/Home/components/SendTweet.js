import React , {useState,useEffect}from "react";
import { BiPoll } from "react-icons/bi";
import { MdGif } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { ref } from "../../../Firebase/Firebase";

export function SendTweet() {

  const [user,setUser]=useState(null)

  const getUser=()=>{
    ref.onSnapshot((querySnapshot)=>{
      const items=[]
      querySnapshot.forEach((doc)=>{
        items.push(doc.data())
      })
      setTimeout(setUser(items),10)
      
    })
  }
  useEffect(()=>{
    getUser()
    
  },[])

  if(!user)
  {
    return (
    <div className="send-tweet"><div className="loader"></div></div>)
  }
 
  return (
    <div className="send-tweet">
      {user.map(user=>   <><div className="middle-picture-what-happen">
        <div className="middle-image-container"><img src={user.image} className="middle-image"></img></div>
        <p style={{ margin: "1rem", color: "gray" }}>What's happening?</p>
      </div><div className="middle-icons-tweet-button">
          <div className="middle-icon">
            <i className="far fa-image"></i>
            <MdGif />
            <BiPoll />
            <BiSmile />
            <AiOutlineSchedule />
          </div>

          <div className="middle-tweet-button">Tweet</div>
        </div></>)}
     
   
    </div>
  );
}
