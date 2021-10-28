import React from "react";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import { ProfileCard, ProfileTweet, ProfileTweets } from "./index";

export default function PProfile() {
  return (
    <div className="home-page">
      <LeftSide />
      <ProfileCard />
      <ProfileTweet />
      <ProfileTweets />
      <RightSide />
    </div>
  );
}
