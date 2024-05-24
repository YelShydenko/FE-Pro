import React, { useState } from "react";
import cls from "./Comments.module.css";
import CommentItem from "./CommentItem";
import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";

const Comments = () => {
  const [comment, setComment] = useState([]);
  const [commentValue, setCommentValue] = useState("");

  const handleChange = (event) => {
    const target = event.target;
    setCommentValue(target.value);
    console.log(event);
  };

  const createComment = () => {
    const newComment = {
      id: Date.now(),
      author: "Betty Brown",
      commentBody: commentValue,
    };
    if (commentValue.length > 0) {
      //  localStorage.setItem('comment', JSON.stringify(comment))
      setComment([...comment, newComment]);
    }
    setCommentValue("");
  };

  const removeItem = (commentId) => {
    setComment(comment.filter((item) => item.id !== commentId));
  };
  return (
    <div className={cls.comments}>
      <CustomInput value={commentValue} onHandleChange={handleChange} />
      <CustomButton text="Send" onHandleClick={createComment} />
      {comment &&
        comment.map((item) => (
          <CommentItem author={item.author} commentBody={item.commentBody} onHandleClick={()=>removeItem(item.id)} />
        ))}
    </div>
  );
};

export default Comments;
