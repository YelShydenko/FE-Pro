import cls from "../Modal/Modal.module.css";

function UserItem(props) {
  const { name, email, phone } = props;
  return (
    <div className={cls.user__item}>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}
export default UserItem;
