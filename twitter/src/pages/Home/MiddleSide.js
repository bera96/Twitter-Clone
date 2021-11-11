import React from "react";
import { MiddleHome, SendTweet, Tweets } from "./index";
import {Link} from "react-router-dom"

export default function MiddleSide({tweet,setTweet}) {
  return (
    <div className="bb">
      <div className="home-middle-top">
        <Link className="middle-home-anchor" to="/home">
        <MiddleHome />
        </Link>
        
        <SendTweet tweet={tweet} setTweet={setTweet} />
      </div>
      <div className="home-middle-bottom">
        <Tweets />
       
      </div>
    </div>
  );
}
