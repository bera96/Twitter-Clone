import React from "react";
import { Search, Trends, WhoToFollow, HomeFooter } from "./index";

export function RightSide() {
  return (
    <div className="ll">
      <Search />
      <Trends />
      <WhoToFollow />
      <HomeFooter />
    </div>
  );
}
