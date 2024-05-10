function CustomButton(props) {
   const {text, onHandleClick, size} = props
   return (
      <button className={`btn ${size}`} onClick={onHandleClick}>{text}</button>
   )
}
export default CustomButton