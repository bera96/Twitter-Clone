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
                      <div className="tweet-container">
                        <div className="tweet-image"><img src={tweet.image}></img></div>
                        <div className="tweet-right">
                        <div className="tweet-from">
                          <div className="tweet-user">{tweet.name+" "+tweet.lastName}</div>
                          <div className="tweet-nickname">{tweet.nickName}</div>
                          <div className="tweet-dot">.</div>
                          <div className="tweet-date">{tweet.date}</div>
                          <div className="tweet-more"><i className="fas fa-ellipsis-h"></i></div>
                        </div>
                        <div className="tweet-text">{tweet.twit}</div>
                        <div className="tweet-column">
                          <div><i className="far fa-comment"></i></div>
                          <div className="retweet"><i className="fas fa-retweet"></i></div>
                          <div className="heart"><i className="far fa-heart"></i></div>
                          <div className="upload"><i className="fas fa-upload"></i></div>
                        </div>
                        </div>
                      </div>)}
  </div>)
}
