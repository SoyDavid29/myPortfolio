import HelloBtn from "./HelloBtn";
import HomeBtn from "./HomeBtn";


const NavBar: React.FC = () => {
  return (
    <nav className="
      flex items-start fixed top-10 z-50
      left-1/2 -translate-x-1/2 w-auto
      lg:w-full lg:justify-between lg:left-0 lg:translate-x-0 lg:px-30
    ">
      <HelloBtn />
      <HomeBtn />

    </nav>
  );
};

export default NavBar;