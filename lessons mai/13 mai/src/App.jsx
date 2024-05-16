import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      helllo
      <Link to={'/about'}>About page</Link>
      <Outlet/>
    </>
  )
}

export default App
