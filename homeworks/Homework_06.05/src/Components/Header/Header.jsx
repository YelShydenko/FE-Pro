import logo from "../../assets/bobr.png";
import cls from "../Header/Header.module.css"

function Header() {
  const navList = ["Главная", "О компании", "Модалки", "Контакты", "Партнеры"];
  return (
    <header>
      <div className={cls.header__container}>
        <div className={cls.left__side}>
          <img src={logo} alt="logo bobr" />
          <h2>Pallas cat studio</h2>
        </div>
        <nav className={cls.right__side}>
          <ul>
            {navList.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
