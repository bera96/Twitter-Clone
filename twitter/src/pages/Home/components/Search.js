import React from "react";

export function Search() {
 
  return (
    <div className="search">
      <i class="fas fa-search"></i>
      <input
        className="chat-search-text"
        type="text"
        name="name"
        placeholder="Search Twitter"
       
      />
    </div>
  );
}
