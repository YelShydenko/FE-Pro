function Header(props) {
  const arrNav = ["БЛОГ", "О НАС", "МАГАЗИН", "СОЗДАТЕЛИ", "АВТОРИЗАЦИЯ"];

  return (
    <header>
      <div className="yellow__logo"></div>
      <ul>
        {arrNav.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
    </header>
  );
}
export default Header;
