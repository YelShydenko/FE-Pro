function Header(props) {
  const arr = ["Burger", "Potato", "Eggs", "Bread"];

  return (
    <header>
      <h4>Need to buy:</h4>
      <ul>
        {arr.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
    </header>
  );
}
export default Header;
