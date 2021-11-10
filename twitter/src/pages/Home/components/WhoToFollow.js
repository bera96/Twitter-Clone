import React, { useState,useEffect } from "react";
import { toFollowRef } from "../../../Firebase/Firebase";
import { Button } from "../../Login/Components";



export function WhoToFollow() {

  const [toFollow,setToFollow]=useState(null)

  const getToFollow=()=>{
    toFollowRef.onSnapshot((querySnapshot)=>{
      const items=[]
      querySnapshot.forEach((doc)=>{
        items.push(doc.data())
      })
      setTimeout(()=> setToFollow(items),10)
     
    })
  }
  useEffect(()=>{
    getToFollow()
    
  },[])

  if(!toFollow)
  {
    
    return (<div className="who-to-follow">
    <div className="loader"></div>
    </div>)
  }
 
  
  return <div className="who-to-follow">
              <span className="who-to-follow-header">Who to follow</span>
            {toFollow.map(user=>
              <div className="who-to-follow-person">
                <div className="who-to-follow-image-container"><img className="who-to-follow-image" src={user.image} ></img></div>
                <div className="who-to-follow-nick-container">
                  <span className="who-to-follow-name">{user.name}</span>
                  <span className="who-to-follow-nick-name">{user.nick}</span>
                </div>
                <div className="who-to-follow-button">
                  <Button as="follow-button"></Button>
                </div>
                
              </div>)}


  </div>;
}
