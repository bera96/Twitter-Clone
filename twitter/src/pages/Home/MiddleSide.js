import React from "react";
import { MiddleHome, SendTweet, Tweets, Tweet } from "./index";

export default function MiddleSide() {
  return (
    <div className="bb">
      <div className="home-middle-top">
        <MiddleHome />
        <SendTweet />
      </div>
      <div className="home-middle-bottom">
        <Tweets />
        <Tweet />
      </div>
    </div>
  );
}
