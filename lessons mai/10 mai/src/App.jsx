import { useState } from "react";
import Counter from "../components/Counter";
import "./App.css";
import CustomButton from "../components/Ui/CustomButton";
import Modal from "../components/Modal/Modal";
import TextBlock from "../components/TextBlock";
import Posts from "../components/Posts";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isTextOpened, setTextIsOpened] = useState(false);
  const [listIsOpened, setOpenedList] = useState(false);
  return (
    <>
      <Counter />
      <CustomButton text="Click" onHandleClick={() => setIsOpened(!isOpened)} />
      {isOpened && <Modal onHandleClick={() => setIsOpened(!isOpened)} />}

      <CustomButton
        text="Open text"
        onHandleClick={() => setTextIsOpened(!isTextOpened)}
      />
      {isTextOpened && <TextBlock title="title" description="description" />}

      <CustomButton
        text="Open list"
        onHandleClick={() => setOpenedList(!listIsOpened)}
      />
      {listIsOpened && <Posts />}

      
    </>
  );
}

export default App;
