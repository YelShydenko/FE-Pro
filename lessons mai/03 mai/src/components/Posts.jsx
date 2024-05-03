import { useState } from "react";
import PostItem from "./PostItem";
import CustomInput from "./UI/CustomInput";

function Posts(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
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

  function onTitleChange(e) {
    setTitle(e.target.value)
  }


  function onDescriptionChange(e) {
    setDescription(e.target.value)

  } 
  console.log(title, description)
  return (
    <div className="posts">
      <h3>POSTS</h3>

      <CustomInput value={title} onHandleChange={onTitleChange}/>
      <CustomInput value={description} onHandleChange={onDescriptionChange}/>
      <button onClick={() => console.log(title, description)}>create</button>
      {
        posts.map((item, index) => (
          <PostItem key={index} title={item.title} description={item.description}/>
        ))
      }
    </div>
  );
}

export default Posts;
