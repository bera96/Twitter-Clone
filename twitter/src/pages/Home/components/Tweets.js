import React, { useState,useEffect } from "react";
import { tweets } from "../../../Firebase/Firebase";


export function Tweets() {

  const [tweet,setTweet]=useState(null)
  
  const getTweets=()=>{
    tweets.onSnapshot((querySnapshot)=>{
      const items=[]
      querySnapshot.forEach((doc)=>{
        items.push(doc.data())
      })
      setTweet(items)
    })
  }
  useEffect(()=>{
    getTweets()
    
  },[])
  
  if(!tweet)
  {
    return <div className="loader"></div>
  }

  
  return (<div className="tweets">
            {tweet.map(tweet=>
                      <div>{tweet.twit}</div>)}
  </div>)
}
