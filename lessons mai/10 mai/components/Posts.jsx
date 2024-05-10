import { useState } from "react";
import { postList } from "../src/config/posts";
import TextBlock from "./TextBlock";
import CustomButton from "./Ui/CustomButton";
import CustomInput from "./Ui/CustomInput";

function Posts() {
  const [titleValue, setTitleValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [posts, setPosts] = useState('');

  function onTitleChange(event) {
    setTitleValue(event.target.value);
  }

  function onDescChange(event) {
    setDescValue(event.target.value);
  }

  function createPost() {
    const newPost = {
      id: Date.now(),
      title: titleValue,
      description: descValue,
    };
    setPosts([...posts, newPost]);
    setTitleValue("");
    setDescValue("");
  }

  function removePost(postId) {
    setPosts(posts.filter((post) => post.id !== postId));
  }

  return (
    <div>
      <CustomInput
        inputValue={titleValue}
        placeholder="title"
        onHandleClick={onTitleChange}
      />
      <CustomInput
        inputValue={descValue}
        placeholder="description"
        onHandleClick={onDescChange}
      />
      <CustomButton text="create post" onHandleClick={createPost} />

      {postList.map((elem) => (
        <TextBlock
          title={elem.title}
          description={elem.description}
          key={elem.id}
          onHandleClick={() => removePost(item.postId)}
        />
      ))}
    </div>
  );
}
export default Posts;
