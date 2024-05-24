import React from "react";
import cls from "./CustomElem.module.css";

const CustomInput = (props) => {
  const { value, onHandleChange, placeholder } = props;
  return (
    <div className={cls.inputForm}>
      <input
        type="text"
        value={value}
        onChange={onHandleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
