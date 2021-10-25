import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export function BottomProfile() {
  return (
    <div className="bottom-profile">
      {" "}
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
      <div className="bottom-profile-text">
        <p>jane doe</p>
        <p>@jane_doe</p>
      </div>
      <div className="bottom-profile-icon">
        <BiDotsHorizontalRounded />
      </div>
    </div>
  );
}
