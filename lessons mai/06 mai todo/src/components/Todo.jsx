import CustomInput from "./UI/CustomInput/CustomInput";
import cls from "./Todo.module.css";
import CustomButton from "./UI/CustomButton/CustomButton";
import { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import { todoList } from "../config/todo-list";
function Todo() {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [todo, setTodo] = useState(todoList);
  const [isError, setIsError] = useState(false);

  const createNewPost = () => {
    const newPost = {
      id: Date.now(),
      title: titleValue,
      description: descriptionValue,
    };
    if (titleValue && descriptionValue) {
      setTodo([...todo, newPost]);
      setTitleValue("");
      setDescriptionValue("");
    }

    if (!titleValue || !descriptionValue) {
      setIsError(!isError);
    }
  };

  const removeItem = (itemId) => 
    setTodo(todo.filter(item => item.id !== itemId))
  

  return (
    <div className={cls.todo}>
      <CustomInput
        placeholder="Title"
        size="M"
        error={isError}
        value={titleValue}
        onHandleChange={(event) => setTitleValue(event.target.value)}
      />
      {isError ? <div>insert title</div> : null}
      <CustomInput
        placeholder="Description"
        size="L"
        error={isError}
        value={descriptionValue}
        onHandleChange={(event) => setDescriptionValue(event.target.value)}
      />
      {isError ? <div>insert description</div> : null}
      <CustomButton text="Create todo" onHandleClick={createNewPost} />

      {todo &&
        todo.map((item) => (
          <TodoItem
            title={item.title}
            description={item.description}
            onHandleClick={() => removeItem(item.id)}
            key={item.id}
          />
        ))}
    </div>
  );
}

export default Todo;
