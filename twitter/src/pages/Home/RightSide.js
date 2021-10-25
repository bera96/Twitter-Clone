

import React from "react";
import { Search, Trends, WhoToFollow, HomeFooter } from "./index";

export default function RightSide() {
  return (
    <div className="ll">
      <Search />
      <Trends />
      <WhoToFollow />
      <HomeFooter />
    </div>
  );
}

