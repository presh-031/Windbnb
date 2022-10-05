import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="border px-[1rem] py-[1rem]">
      <div>
        <img src={logo} alt="windbnb-logo" />
      </div>
    </header>
  );
};

export default Header;
