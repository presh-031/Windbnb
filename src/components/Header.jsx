import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className=" px-[0.8125rem] py-[1.1875rem]">
      <div>
        <img src={logo} alt="windbnb-logo" />
      </div>
    </header>
  );
};

export default Header;
