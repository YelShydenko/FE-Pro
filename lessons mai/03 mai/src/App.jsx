import "./App.css";
import Header from "./components/Header";
import PostItem from "./components/PostItem";
import Posts from "./components/Posts";
import { useEffect, useState } from "react";

function App() {
  const [isRendered, setIsRendered] = useState(false)

  return (
    <>
      <Header />
      <Posts />
      <button onClick={() => setIsRendered(!isRendered)}>render</button>
      {
        isRendered && <PostItem title='render title' description='render description' />
      }
    </>
  );
}

export default App;
