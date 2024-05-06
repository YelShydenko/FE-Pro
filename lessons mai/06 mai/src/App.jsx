import { useState } from "react";
import "./App.css";
import CustomButton from "./components/UI/CustomButton";
import CustomInput from "./components/UI/CustomInput";
import Counter from "./components/Counter";

function App() {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const onLoginChange = (e) => {
    setLoginValue(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  return (
    <>
      {/* <CustomButton
        text="Click1"
        onHandleClick={() => console.log("first Button1")}
        size="L"
      /> */}

      <input type="text" value={loginValue} onChange={onLoginChange} />
      <input type="text" value={passwordValue} onChange={onPasswordChange} />
      <button
        onClick={() =>
          console.log({ name: loginValue, password: passwordValue })
        }
      >
        click
      </button>
    </>
  );
}

export default App;
