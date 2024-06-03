import { useState } from "react"
import CustomButton from "./UI/CustomButton"

interface IPosts{
   text: string
   title: string
   list: string[]
}

const Posts = (props: IPosts) => {
   const { text, title, list } = props
   const [isOpen, setIsOpen] =useState(false)
  return (
    <div>
        <CustomButton text="Click to load" onHandleClick={() => setIsOpen(!isOpen)} />
        <h2>{title}</h2>
        <p>{text}</p>
        {
           isOpen && list.map((item, index) => (
              <p key={index}>{item}</p>
           ))
        }
    </div>
  )
}

export default Posts
