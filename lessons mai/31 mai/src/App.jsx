import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true),
      console.log('Use Effect');
  }, [])

  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>Open</button> */}
      {/* <button onClick={() => setIsOpen(false)}>Close</button> */}
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt facere
          fugiat magnam beatae dignissimos similique maiores excepturi sapiente
          magni ea.
        </p>
      )}
    </>
  );
}

export default App;
