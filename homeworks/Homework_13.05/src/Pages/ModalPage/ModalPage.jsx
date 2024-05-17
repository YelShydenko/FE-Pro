import React, { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import CustomButton from "../../Components/UI/CustomButton";
import cls from "./ModalPage.module.css";

const ModalPage = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <section className={cls.modal__window}>
        <h3>Модальные окна</h3>
        <div className={cls.button__container}>
          <CustomButton
            text="fetch"
            onHandleClick={() => setIsOpened(!isOpened)}
          />
          {isOpened && <Modal onClick={() => setIsOpened(!isOpened)} />}
        </div>
      </section>
    </>
  );
};

export default ModalPage;
