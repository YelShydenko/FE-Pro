import cls from './CustomButton.module.css'

function CustomButton(props) {
    const {text, onHandleClick} = props
    return (
        <button onClick={onHandleClick} className={cls.default__button}>{text}</button>
    )
}

export default CustomButton;