import cls from "./CustomInput.module.css";

function CustomInput(props) {
  const { inputValue, placeholder, size, onHandleChange } = props;
  return (
    <div className={cls.input__form}>
      <input
        type="text"
        placeholder={placeholder}
        className={`${cls.default__input} ${size}`}
        value={inputValue}
        onChange={onHandleChange}
      />
    </div>
  );
}

export default CustomInput;
