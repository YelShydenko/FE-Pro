import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  // Хук useState - это функция, которая используется для хранения состояния в функциональном компоненте. 
//   Он принимает аргумент как начальное значение состояния и возвращает массив с 2 элементами.
// Первый элемент - это текущее значение состояния.Второй элемент - это функция обновления состояния.

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <strong>{counter}</strong>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;
