import React from "react";

const CustomInput = (props) => {
  const { inputValue, placeholder, size, onHandleChange } = props;

  return (
    <input
      type="text"
      placeholder="hello"
      className={`${classes.default__input} ${size}`}
      value={inputValue}
      onChange={onHandleChange}
    />
  );
};

export default CustomInput;
