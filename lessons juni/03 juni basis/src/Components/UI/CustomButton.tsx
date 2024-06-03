interface ICustomButton{
   text: string
   onHandleClick: () => void
}


function CustomButton(props: ICustomButton) {
   const {text, onHandleClick} = props
   return (
      <>
         <button onClick={onHandleClick} >{text}</button>
      </>
   )
}
export default CustomButton