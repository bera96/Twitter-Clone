

import React from "react";
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

export default function LeftSide() {
  return (
    <div className="left-outside">
      <div className="left-empty"></div>
      <div className="aa">
        <div className="home-left-top">
          <BirdIcon />
        </div>
        <div className="home-left-middle">
          <LeftHome />
          <Explore />
          <Notification />
          <Messages />
          <Bookmarks />
          <Lists />
          <Profile />
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

