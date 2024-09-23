import NavItems from "./navItems/NavItems";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import logoLight from '../../../assets/logos/demoshopnext_logo-light.png'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-4">
      {/* logobar  */}
      <div>
        <img src={logoLight} alt="demoshopnext logo" />
      </div>
      {/* navbar Items */}
      <div>
        <NavItems />
      </div>
      {/* search, login, and cart */}
      <div className="flex gap-9 items-center">
        <span className="cursor-pointer transition-colors duration-[250] hover:text-blue-500">
          <IoSearchOutline size={18} />
        </span>
        <span className="cursor-pointer transition-colors duration-[250] hover:text-blue-500">
          <IoPersonOutline size={18} />
        </span>
        <span className="cursor-pointer transition-colors duration-[250] hover:text-blue-500">
          <AiOutlineShoppingCart size={18} />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
