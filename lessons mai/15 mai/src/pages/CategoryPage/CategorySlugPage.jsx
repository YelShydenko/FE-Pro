import { Link, useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { goodsCategories } from "../../config/GoodsCategories";
import CategoryPageItem from "./CategoryItem";
import cls from "./CategoryPage.module.css";
function CategorySlugPage() {
  const { categoriesId } = useParams();
  const filteredData = goodsCategories.filter(
    (item) => parseInt(categoriesId) === item.id
  );
  const categoryName = filteredData[0].category[0].categoryName;
  const categoryItemName = filteredData[0].category[0].data
  return (
    <>
      <Header />
      <main>
        <section className={cls.category__page}>
          <div className={cls.category__breadcrumbs}>
            <span>
              <Link to={`/categories`}>Категории</Link>
            </span>
            <span>
              <Link to={`/categories/${categoriesId}`}>{categoryName}</Link>
            </span>
          </div>
          <div className={cls.category__list}>
            {filteredData[0].category[0].data.map((item, index) => (
              <Link key={index} to={`/categories/${categoriesId}/${categoryItemName[index].cardName}`}>
                <CategoryPageItem
                  title={item.cardName}
                  image={item.cardImg}
                />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CategorySlugPage;
