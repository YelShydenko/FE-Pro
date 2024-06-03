
interface ICustomButton {
    text: string;
    //знак вопроса в JS и TS - обозначение необязательного параметра
    size?: string;
    onHandleClick: (str: string) => void
}

function CustomButton(props: ICustomButton) {

    const {text, size, onHandleClick} = props

    return (
        <div>
            <button onClick={() => onHandleClick('scs')} className={`btn ${size}`}>{text}</button>
        </div>
    )
}

export default CustomButton;