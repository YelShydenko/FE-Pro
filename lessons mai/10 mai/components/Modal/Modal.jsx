import CustomButton from "../Ui/CustomButton";
import cls from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={cls.modal}>
      <div className={cls.modal__content}>
        <h3>Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          libero.
        </p>
        <CustomButton text="close" onHandleClick={props.onHandleClick} />
      </div>
    </div>
  );
}
export default Modal;
