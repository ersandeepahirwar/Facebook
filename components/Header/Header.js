import Brand from "./components/Brand/Brand";
import Media from "./components/Media/Media";
import Account from "./components/Account/Account";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center bg-white shadow-md px-2 py-2 sm:px-3">
      <Brand />
      <Media />
      <Account />
    </div>
  );
};

export default Header;
