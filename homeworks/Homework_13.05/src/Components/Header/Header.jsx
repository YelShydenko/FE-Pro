import { Link } from "react-router-dom";
import logo from "../../assets/bobr.png";
import cls from "../Header/Header.module.css";

function Header() {
  return (
    <header>
      <div className={cls.header__container}>
        <div className={cls.left__side}>
          <img src={logo} alt="logo bobr" />
          <h2>Pallas cat studio</h2>
        </div>
        <nav className={cls.right__side}>
          <ul>
            <li>
              <Link to={"/"}>Главная</Link>
            </li>
            <li>
              <Link to={"/about"}>О компании</Link>
            </li>
            <li>
              <Link to={"/modal"}>Модалки</Link>
            </li>
            <li>
              <Link to={"/contacts"}>Контакты</Link>
            </li>
            <li>
              <Link to={"/partners"}>Партнеры</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
