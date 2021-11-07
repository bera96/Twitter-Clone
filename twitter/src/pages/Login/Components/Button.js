import React from "react";

function Button({ as, type, text, ...props }) {
  if (as === "login-button-with-google") {
    return (
      <div className="button-with-icon-container">
        <button className={as} {...props}>
          <img src="https://i.hizliresim.com/kxrtm50.png"></img>
          {text}
        </button>
      </div>
    );
  }
  if (as === "login-button-with-apple") {
    return (
      <div className="button-with-icon-container">
        <button className={as} {...props}>
          {" "}
          <i className="fab fa-apple"></i>
          {text}
        </button>
      </div>
    );
  }

  if (as === "login-button") {
    if (text.length > 30) {
      const newText = text.slice(0, 34) + "...";
     
      return (
        <button className={as} {...props}>
          {newText}
        </button>
      );
    }
  }
  if(as==="follow-button"){
    return(
      <button className={as}{...props}>
        <span>Follow</span>
      </button>
    )
  }
}

export default Button;
