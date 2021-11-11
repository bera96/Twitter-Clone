import React from "react";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import { ProfileCard, ProfileTweets } from "./index";
import { Redirect } from "react-router";

export default function PProfile() {

  if(localStorage.getItem("uid")!=null)
  {
    return (
      <div className="home-page">
        <LeftSide />
        <div className="profile-middle">
          <ProfileCard />
          <ProfileTweets />
  
          <ProfileTweets />
  
          <ProfileTweets />
  
          <ProfileTweets />
  
          <ProfileTweets />
  
          <ProfileTweets />
  
          <ProfileTweets />
        </div>
        <RightSide />
      </div>
    )
  }
  else
  {
    return <Redirect to="/login"/>
  }
  
}
