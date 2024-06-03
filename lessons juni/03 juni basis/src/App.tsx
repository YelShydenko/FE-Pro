import { useState } from 'react'
import './App.css'
import Conditional from './Components/Conditional'
import CustomButton from './Components/UI/CustomButton'
import { list } from './config/list'
import Posts from './Components/Posts'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <CustomButton text='Click' onHandleClick={()=>console.log('Hello')
      } />
      
      <Conditional text='Conditional Text' title='Conditional Title' list={list} isOpen={isOpen} conditionalRender={() => setIsOpen(!isOpen)} />
      <Posts text='Post text' title='Post Title' list={list}/>
    </>
  )
}

export default App
