import React from "react";
import logo from "../assets/logo.png";

function PostItem(props) {
  const posts = [
    {
      id: 1,
      title: "first",
      description: "first",
    },
    {
      id: 2,
      title: "second",
      description: "first",
    },
    {
      id: 3,
      title: "third",
      description: "first",
    },
    {
      id: 4,
      title: "4th",
      description: "first",
    },
  ];

  return posts.map((elem) => (
    <div className="post__item">
      <div className="post__item-info">
        <p className="title">title: '{elem.title}'</p>
        <p className="desc">description: '{elem.description}'</p>
      </div>
      <img src={logo} alt="logo" />
    </div>
  ));
}
export default PostItem;
