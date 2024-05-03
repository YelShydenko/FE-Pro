import React from "react";
import logo from "../assets/logo.png";

function PostItem(props) {
  const {title, description} = props
  return (
    <div className="post__item">
      <div className="post__item-info">
        <p className="title">title: '{title}'</p>
        <p className="desc">description: '{description}'</p>
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
}
export default PostItem;
