function CustomButton(props) {
    const {text, onHandleClick} = props
    return (
        <button onClick={onHandleClick}>{text}</button>
    )
}

export default CustomButton;