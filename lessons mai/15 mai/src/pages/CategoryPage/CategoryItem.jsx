import cls from './CategoryPage.module.css'

function CategoryPageItem(props) {
    const {title, image} = props

    return (
        <div className={cls.category__item} style={{backgroundImage: `url(${image})`}}>
            <h5>{title}</h5>
        </div>
    )
}

export default CategoryPageItem;