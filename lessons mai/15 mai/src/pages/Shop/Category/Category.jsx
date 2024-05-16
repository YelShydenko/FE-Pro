import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import { shopList } from "../../../config/categories";
import { Link, useParams } from "react-router-dom";
import cls from './Category.module.css'
function Category() {

    const {pageId} = useParams()
    const formattedData = shopList.filter(item => parseInt(pageId) === item.id)

  return (
    <>
      <Header />
      <main>
        <section>
          <h3>Категории</h3>
          <div className={cls.categories}>
            {formattedData[0].data.map((item, index) => (
              <Link to={`${index}`} key={index}>
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
export default Category;
