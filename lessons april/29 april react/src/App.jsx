import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";

function App() {
  const posts = [
    {
      id: 1,
      title: "title",
      description: "description",
    },
    {
      id: 2,
      title: "title2",
      description: "description2",
    },
    {
      id: 3,
      title: "title3",
      description: "description3",
    },
    {
      id: 4,
      title: "title4",
      description: "description4",
    },
    {
      id: 5,
      title: "title5",
      description: "description5",
    },
    {
      id: 6,
      title: "title6",
      description: "description6",
    },
    {
      id: 7,
      title: "title",
      description: "description6",
    },
  ];
  return (
    <>
      <Header />
      {
        posts.map((elem, index) => (
          <Posts title={elem.title} description = {elem.description} key = {elem.id} />
        ))
      }
    </>
  );
}

export default App;
