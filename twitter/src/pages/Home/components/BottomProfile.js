import React, { useState,useEffect, useContext } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { ref } from "../../../Firebase/Firebase";


export function BottomProfile() {


  
  const [user,setUser]=useState([])

  const getUser=()=>{
    ref.onSnapshot((querySnapshot)=>{
      const items=[]
      querySnapshot.forEach((doc)=>{
        items.push(doc.data())
      })
      setUser(items)
    })
  }
  useEffect(()=>{
    getUser()
    
  },[])  

  return (
    <div className="bottom-profile">
      {" "}
      {user.map((user,index)=>
            <>
            <div  className="image">
              <img className="user-bottom-image" src={user.image}></img>
            </div>
            <div className="bottom-profile-text">
              <p className="bottom-profile-user">{user.name+" "+user.lastName}</p>
              <p className="bottom-profile-user">{user.nickName}</p>
            </div>
            <div className="bottom-profile-icon">
              <BiDotsHorizontalRounded />
            </div>
          </>
      )}
  
    </div>
  );
}
