import React from "react";
import cls from "./Comments.module.css";
import user from '../../assets/user.svg'

const CommentItem = (props) => {
  const { author, commentBody, onHandleClick } = props;
  return (
    <div className={cls.comment}>
      <div className={cls.delete} onClick={onHandleClick}>X</div>
      <div className={cls.comment__top}>
        <img src={user} alt="user image" />
        <strong>Author: {author} </strong>
      </div>

      <p>{commentBody}</p>
    </div>
  );
};

export default CommentItem;
