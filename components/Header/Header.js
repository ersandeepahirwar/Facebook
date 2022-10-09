import Brand from "./components/Brand/Brand";
import Media from "./components/Media/Media";
import Account from "./components/Account/Account";

const Header = () => {
  return (
    <div className="p-2 lg:px-5 sticky top-0 z-50 flex items-center bg-white shadow-md">
      <Brand />
      <Media />
      <Account />
    </div>
  );
};

export default Header;
