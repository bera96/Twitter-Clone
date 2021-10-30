import React from "react";

export function Search(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <div className="search">
      <input
        className="chat-search-text"
        type="text"
        name="name"
        placeholder="Search Twitter"
        onChange={handleChange}
        value={props.value}
      />
      <i className="fas fa-search"></i>
    </div>
  );
}
