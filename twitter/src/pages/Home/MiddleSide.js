import React from "react";
import { MiddleHome, SendTweet, Tweets, Tweet } from "./index";
import {Link} from "react-router-dom"

export default function MiddleSide() {
  return (
    <div className="bb">
      <div className="home-middle-top">
        <Link className="middle-home-anchor" to="/home">
        <MiddleHome />
        </Link>
        
        <SendTweet />
      </div>
      <div className="home-middle-bottom">
        <Tweets />
        <Tweet />
      </div>
    </div>
  );
}
