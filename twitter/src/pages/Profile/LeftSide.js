import React from "react";
import {Link} from 'react-router-dom'
import {
  BirdIcon,
  LeftHome,
  Explore,
  Notification,
  Messages,
  Bookmarks,
  Lists,
  Profile,
  More,
  TweetButton,
  BottomProfile,
} from "./index";

export function LeftSide() {
  return (
    <div className="left-outside">
      <div className="aa">
        <div className="home-left-top">
          <Link className="left-bird-anchor" to="/home">
            <BirdIcon />
          </Link>
          
        </div>
        <div className="home-left-middle">
        <Link className="left-home-anchor" to="/home">
          <LeftHome />
        </Link>
          <Explore />
          <Notification />
          <Messages />
          <Bookmarks />
          <Lists />
          <Link className="left-profile-anchor" to="/profile">
            <Profile />
          </Link>
          <More />
          <TweetButton />
        </div>
        <div className="home-left-bottom-profile">
          <BottomProfile />
        </div>
      </div>
    </div>
  );
}
