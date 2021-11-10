import React, { lazy } from "react";
import { Search, Trends, HomeFooter, WhoToFollow } from "./index";



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
