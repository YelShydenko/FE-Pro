import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { goodsCategories } from "../../config/GoodsCategories";
import cls from "./CategoryPage.module.css";
import CategoryPageItem from "./CategoryItem";
function CategoryPage() {

  return (
    <>
      <Header />
      <main>
        <section className={cls.category__page}>
          <h3>Категории</h3>
          <div className={cls.category__list}>
            {goodsCategories.map((item, index) => (
              <Link to={`/categories/${index}`} key={index}>
                <CategoryPageItem
                  title={item.category[0].categoryName}
                  image={item.category[0].img}
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

export default CategoryPage;
