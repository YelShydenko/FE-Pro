import './App.css'
import React from 'react'
import Posts from './Components/Posts'

function App() {

  function onHandleClick(str: string) {
    console.log(`${str} helheheh`)
  }
  

  return (
    <>
      <Posts title='Posts' postDescriprion='description of all my posts' onHandleClick={() => onHandleClick('string')}/>
    </>
  )
}

export default App
