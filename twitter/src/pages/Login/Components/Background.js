import React, { useContext } from "react";
import { BackGroundContext } from "../../../Context/BackGroundContext";

function Background() {
  const { src, bird } = useContext(BackGroundContext);

  return (
    <div className="login-left">
     
        <img className="background" alt="" src={src}></img>
        <img className="bird" alt="" src={bird}></img>
     
    </div>
  );
}

export default Background;
