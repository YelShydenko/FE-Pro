import cls from "./Subheader.module.css";
import { Link } from "react-router-dom";

const Subheader = () => {
  return (
    <div>
      <nav className={cls.navbar}>
        <ul>
          <li>
            <Link to={"posts"}>Posts</Link>
          </li>
          <li>
            <Link to={"/faq"}>FAQ</Link>
          </li>
          <li>
            <Link to={"/categories"}>Categories</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Subheader;
