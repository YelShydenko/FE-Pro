import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import CustomButton from "./Components/UI/CustomButton";
import Modal from "./Components/Modal/Modal";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <Header />
      <section className="modal__window">
        <h3>Модальные окна</h3>
        <div className="button__container">
          <CustomButton
            text="fetch"
            onHandleClick={() => setIsOpened(!isOpened)}
          />
          {isOpened && <Modal onClick={() => setIsOpened(!isOpened)} />}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
