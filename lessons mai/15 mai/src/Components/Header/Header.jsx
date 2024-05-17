import cls from "./Header.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Subheader from "./Subheader";
function Header() {
  return (
    <header className={cls.Header}>
      <nav>
        <ul className={cls.header__ul}>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
          <li>
            <Link to={`/`}>
              <img src={logo} alt="" />
            </Link>
          </li>
          <li>
            <Link to={`/shop`}>Shop</Link>
          </li>
          <li>
            <Link to={`/contacts`}>Contacts</Link>
          </li>
        </ul>
      </nav>
      <Subheader/>
    </header>
  );
}
export default Header;
