function CustomInput (props) {
    const {value, onHandleChange} = props

    return <input type="text" value={value} onChange={onHandleChange}/>
}

export default CustomInput