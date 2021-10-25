import React from "react";
import { BiPoll } from "react-icons/bi";
import { MdGif } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";

export function SendTweet() {
  return (
    <div className="send-tweet">
      {" "}
      <div className="middle-picture-what-happen">
        <div
          className="image"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50px",
            backgroundColor: "#C4C4C4",
            margin: "1rem",
          }}
        ></div>
        <p style={{ margin: "1rem" }}>What's happening?</p>
      </div>
      <div className="middle-icons-tweet-button">
        <div className="middle-icon">
          <i class="far fa-image"></i>
          <MdGif />
          <BiPoll />
          <BiSmile />
          <AiOutlineSchedule />
        </div>

        <div className="middle-tweet-button">Tweet</div>
      </div>
    </div>
  );
}
