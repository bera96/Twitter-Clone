import React from "react";

export function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-middle-top">
        <div className="cc">
          <div className="arrow">
            {" "}
            <i class="fas fa-arrow-left"></i>
          </div>
          <div className="dd">
            <span className="profile-middle-top-name">Jane Doe</span>
            <span className="profile-middle-top-tweet-number">1 tweet</span>
          </div>
        </div>
      </div>
      <div className="profile-middle-gray-area"></div>
      <div className="profile-middle-remain">
        <div className="setup-profile-button">Set up Profile</div>
        <div className="profile-clickable">
          <div className="profile-middle-column">
            <span>jane doe</span>
            <span>@jane_doe</span>
            <span>Joined October 2021</span>
            <span>1 follower 1 follow</span>
          </div>

          <a>Tweets</a>
          <a>Tweets & replies</a>
          <a>Media</a>
          <a>Reactions</a>
        </div>
      </div>
    </div>
  );
}
