import cls from "./CustomInput.module.css";

function CustomInput(props) {
  const { value, onHandleChange, placeholder, size } = props;
  return (
    <div className={cls.input__form}>
      <input
        type="text"
        className={`${cls.default__input} ${size ? size : ""}`}
        value={value}
        onChange={onHandleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomInput;
