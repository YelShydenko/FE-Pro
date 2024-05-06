import cls from './TodoItem.module.css'
import imgItem from '../../assets/logo.png'

function TodoItem (props) {

    const {title, description, onHandleClick} = props
    return (
        <div className={cls.todo__item}>
            <div className={cls.todo__item_left}>
                <h4>{title? title : 'There is no title ('}</h4>
                <p>{description ? description : 'There is no description ('}</p>
            </div>
            <div>
                <img src={imgItem} alt='todo logo' />
            </div>
            <div onClick={onHandleClick} className={cls.delete__todo}>X</div>
        </div>
    )
}

export default TodoItem