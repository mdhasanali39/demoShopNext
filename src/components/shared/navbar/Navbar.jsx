import NavItems from "./navItems/NavItems";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  IoPersonOutline,
  IoSearchOutline,
  IoPersonCircleOutline,
  IoMenu, IoClose
} from "react-icons/io5";
import logoLight from "../../../assets/logos/demoshopnext_logo-light.png";
import { useState } from "react";

const Navbar = () => {
  const [isUserIconClicked, setIsUserIconClicked] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isMenuIconClicked, setIsMenuIconClicked] = useState(false);

  return (
    <nav className="flex justify-between items-center py-5 px-4 relative">
      {/* logobar  */}
      <div>
        <img src={logoLight} alt="demoshopnext logo" />
      </div>
      <div
        onClick={() => setIsMenuIconClicked(!isMenuIconClicked)}
        className={`absolute right-2 lg:hidden ${isMenuIconClicked && "hidden"} hover:text-blue-500 transition-colors duration-[250]`}
      >
        <span>
          <IoMenu size={30} />
        </span>
      </div>
      {/* navbar items and search, login, and cart icons  */}
      <div className={`flex gap-12 max-lg:items-center flex-col lg:flex-row max-[425px]:w-[60%] max-lg:w-1/2 absolute lg:static right-0 top-5 max-lg:border max-lg:shadow-lg px-5 max-lg:py-10 transition-all duration-500 ${!isMenuIconClicked && "max-lg:hidden"}`}>
        {/* menu open or close button */}

        <div
          onClick={() => setIsMenuIconClicked(false)}
          className="absolute right-2 top-2 lg:hidden hover:text-red-500 transition-colors duration-[250]"
        >
          <span>
            <IoClose size={30} />
          </span>
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
          {/* login or register  */}
          <div className="relative">
            <span
              onClick={() => setIsUserIconClicked(!isUserIconClicked)}
              className="cursor-pointer transition-colors duration-[250] hover:text-blue-500"
            >
              <IoPersonOutline size={18} />
            </span>
            {/* )} */}
            {/* popup - after click the User icon  */}
            <>
              {isUserIconClicked ? (
                isUserLoggedIn ? (
                  <div className="border px-3 py-5 flex flex-col items-center gap-3 absolute min-w-[200px] right-0 top-6 transition-all duration-[250]">
                    {/* <h2>Already have an account?</h2> */}
                    <span
                      // onClick={() => setIsUserLoggedIn(!isUserLoggedIn)}
                      className="cursor-pointer transition-colors duration-[250] hover:text-blue-500"
                    >
                      <IoPersonCircleOutline size={22} />
                    </span>
                    <h2 className="font-semibold">Md Hasan Ali</h2>
                    <button className="font-bold text-white bg-blue-400 px-3 py-1 rounded-lg border border-white hover:text-blue-500 hover:border-blue-500 hover:bg-white transition-all duration-[250]">
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div className="border px-3 py-5 flex flex-col items-center gap-3 absolute min-w-[210px] right-0 top-5 transition-all duration-[250]">
                    {/* <h2>Already have an account?</h2> */}
                    <button className="font-bold text-white bg-blue-400 px-2 py-1 rounded-lg border border-white hover:text-blue-500 hover:border-blue-500 hover:bg-white transition-all duration-[250]">
                      Login Now
                    </button>
                    <h2 className="font-semibold">Don't have an account?</h2>
                    <button className="font-bold text-white bg-blue-400 px-2 py-1 rounded-lg border border-white hover:text-blue-500 hover:border-blue-500 hover:bg-white transition-all duration-[250]">
                      Create Account Now
                    </button>
                  </div>
                )
              ) : (
                ""
              )}
            </>
          </div>
          <span className="cursor-pointer transition-colors duration-[250] hover:text-blue-500">
            <AiOutlineShoppingCart size={18} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
