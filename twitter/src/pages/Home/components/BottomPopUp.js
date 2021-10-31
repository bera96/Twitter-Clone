import React,{useState,useEffect} from 'react';
import { ref } from '../../../Firebase/Firebase';


export function BottomPopUp({handleAuth}) {


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
        user.map(user=>
            <div>
         
        
            <div className="bottom-profile-popup">
              <div className="bottom-profile-user">
                <div className="popup-top-flex">
                  <img className="popup-image" src={user.image}></img>
               
                <div className="popup-names">
                  <span>{user.name+" "+user.lastName}</span>
                  <span>{user.nickName}</span>
                </div>
                <div className="verify"><i class="fas fa-check"></i></div>
                </div>
                
              </div>
              <div className="bottom-profile-settings">
              <div className="bottom-profile-add">
                <span>Add an existing account</span>
              </div>
              <div onClick={handleAuth} className="bottom-profile-logout">
                <span>Log out {user.nickName}</span>
              </div>
              </div>
            </div>
         
            </div>
        )
      
    );
}

