import React from "react";

export function ProfileTweets() {
  return (
    <div className="profile-tweets">
      <div>
        <div className="profile-tweets-small-picture"></div>
        <div className="tweet-column">
          <span>jane doe @jane_doe . Oct 17</span>
          <span>adADdADadad</span>
        </div>
      </div>
      <div className="profile-tweet-icons">
        <i class="fas fa-reply"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-share-square"></i>
        <i class="far fa-chart-bar"></i>
      </div>
    </div>
  );
}
