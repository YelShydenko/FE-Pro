import { useState } from "react"
import CustomButton from "./UI/CustomButton"

interface IConditional{
   text: string
   title: string
   conditionalRender: () => void 
   list: string[]
   isOpen: boolean
}

const Conditional = (props: IConditional) => {
   const { text, title, conditionalRender, list, isOpen} = props

  return (
    <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <CustomButton text="Get lorem" onHandleClick={conditionalRender}/>
        {
          isOpen && list.map((item, index) => (
              <p key={index}>{item}</p>
           ))
        }
    </div>
  )
}

export default Conditional
