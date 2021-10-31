import React from "react";

export function ProfileTweets() {
  return (
    <div className="profile-tweets">
      <div className="ee">
        <div className="profile-tweets-small-picture"></div>
        <div className="tweet-column">
          <span>jane doe @jane_doe . Oct 17</span>
          <span>adADdADadad</span>
        </div>
        <div className="ellipses">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div className="profile-tweet-icons">
        <div className="first">
          <i class="fas fa-reply"></i>
        </div>
        <div className="second">
          <i class="fas fa-retweet"></i>
        </div>
        <div className="third">
          <i class="far fa-heart"></i>
        </div>
        <div className="forth">
          <i class="far fa-share-square"></i>
        </div>
        <div className="fifth">
          <i class="far fa-chart-bar"></i>
        </div>
      </div>
    </div>
  );
}
