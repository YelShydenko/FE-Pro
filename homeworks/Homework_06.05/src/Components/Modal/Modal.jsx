import cls from "../Modal/Modal.module.css";
import { userList } from "../../config/user";
import UserItem from "./UserItem";

function Modal(props) {
  return (
    <div className={cls.modal__background}>
      <div className={cls.modal_window}>
        <h4>User data</h4>
        <div className={cls.close__modal} onClick={props.onClick}></div>
        <div className={cls.item__container}>
          {userList.map((elem) => (
            <UserItem
              name={elem.fullname}
              email={elem.email}
              phone={elem.phone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Modal;
