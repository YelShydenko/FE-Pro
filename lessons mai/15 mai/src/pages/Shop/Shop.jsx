import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { categories } from "../../config/categories";
import cls from "./Shop.module.css";
import { Link, Outlet } from "react-router-dom";

function Shop() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h3>Категории</h3>
          <div className={cls.categories}>
            {categories.map((item, index) => (
              <Link to={`${item.id}`} key={index}>
                <div className={cls.categories__item}>
                  <h5>{item.name}</h5>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Shop;
