import React, { useState } from 'react';
import {ulid} from 'ulid'
import { db } from '../../../Firebase/Firebase';
import { Error } from '..';

export function TweetPopUp({tweet,setTweet,setClickedTweet}) {

    const [error,setError]=useState(false)

    const onChangeHandler=(e)=>{
        setTweet(e.target.value)
        setError(false)
    }

    const writeTweetData=(tweetFromState)=>{
        const date = new Date().toUTCString().slice(5,11)
        
        if(tweetFromState!=="")
        {
            db.collection("Tweets").doc(ulid()).set({
                twit:tweetFromState,
                image:"https://64.media.tumblr.com/5d9a72e483fb98245a4d7ecaffd9a0b1/tumblr_ozubknjTAM1sauh2no1_1280.jpg",
                name:"Jane",
                lastName:"Doe",
                nickName:"@janedoe",
                date:date
              }).then(() => {
                
                setClickedTweet(false)
                setTweet("")
      
            }).catch((error) => {
              console.error("Error writing document: ", error);
          });
        }
        else
        {
            setError(true)
            setTimeout(()=>{setError(false)},3000)
        }
        
        
     
      }


    return (
        <div className="tweet-popup">
            <div className="close-container">
                <i class="fas fa-times"></i>
            </div>
            <div className="tweet-popup-text">
                <img src="https://64.media.tumblr.com/5d9a72e483fb98245a4d7ecaffd9a0b1/tumblr_ozubknjTAM1sauh2no1_1280.jpg"></img>
                <textarea onChange={onChangeHandler} className="tweet-popup-textarea" placeholder="What's happening?"></textarea>
            </div>
            {error?(<Error as="empty-error"/>):(null)}
            <div className="tweet-popup-bottom">
                <div className="tweet-popup-icons">
                    <div className="icon-image"><i class="far fa-image"></i></div>
                    <div className="icon-photo"><i class="fas fa-photo-video"></i></div>
                    <div className="icon-smile"><i class="far fa-smile"></i></div>
                    <div className="icon-calendar"><i class="far fa-calendar"></i></div>
                </div>
                <div className="tweet-popup-send">
                    <button onClick={()=>writeTweetData(tweet)} className="tweet-send">Tweet</button>
                </div>

            </div>
        </div>
    );
}

