import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { goodsCategories } from "../../config/GoodsCategories";
import cls from './CategoryPage.module.css'
function CategorySlugPageItem() {
    const {itemId} = useParams()
    const filteredCategories = goodsCategories.filter(categoryItem => {
        return categoryItem.category.filter(item => {
            return item.data.filter(dataItem => dataItem.cardName === itemId).length > 0;
        }).length > 0;
    });
    console.log(filteredCategories)
  return (
    <>
      <Header />
      <main>
        <section>
            <div className={cls.category__card}>
                <div className={cls.card__image}>
                    <img src={filteredCategories[0].category[0].img} alt="" />
                    <p>{itemId}</p>
                </div>
                <div>
                    <p>
                        Количество: <strong>1</strong>
                    </p>
                    <p>
                        Стоимость: <strong>5$</strong>
                    </p>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CategorySlugPageItem;
