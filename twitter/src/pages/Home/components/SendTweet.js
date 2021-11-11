import React , {useState,useEffect}from "react";
import { BiPoll } from "react-icons/bi";
import { MdGif } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { ref,db } from "../../../Firebase/Firebase";
import {ulid} from 'ulid'
export function SendTweet({setTweet,tweet}) {



  const [user,setUser]=useState(null)
  console.log(tweet)

  const onChangeHandler=(e)=>{
      setTweet(e.target.value)
  }

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
  const writeTweetData=(tweetFromState)=>{
    const date = new Date().toUTCString().slice(5,11)
    
    console.log(date)
    
    
    db.collection("Tweets").doc(ulid()).set({
      twit:tweetFromState,
      image:"https://64.media.tumblr.com/5d9a72e483fb98245a4d7ecaffd9a0b1/tumblr_ozubknjTAM1sauh2no1_1280.jpg",
      name:"Jane",
      lastName:"Doe",
      nickName:"@janedoe",
      date:date
    }).then(() => {
      console.log("Document successfully written!");
  }).catch((error) => {
    console.error("Error writing document: ", error);
});
  }

  if(!user)
  {
    return (
    <div className="send-tweet"><div className="loader"></div></div>)
  }
 
  return (
    <div className="send-tweet">
      {user.map(user=>   <><div className="middle-picture-what-happen">
        <div className="middle-image-container"><img src={user.image} className="middle-image"></img></div>
        <textarea onChange={onChangeHandler} className="tweet-input" placeholder="What's happening?"></textarea>
      </div><div className="middle-icons-tweet-button">
          <div className="middle-icon">
            <i className="far fa-image"></i>
            <MdGif />
            <BiPoll />
            <BiSmile />
            <AiOutlineSchedule />
          </div>

          <button onClick={()=>writeTweetData(tweet)} className="middle-tweet-button">Tweet</button>
        </div></>)}
     
   
    </div>
  );
}
