import { NavLink } from "react-router-dom";

const NavItems = () => {
  const isLg = true;
  return (
    <>
      {isLg ? (
        <ul className="flex gap-12 items-center flex-col lg:flex-row">
          <li className="text-lg font-semibold transition duration-[250] ease-linear list-none hover:text-blue-500">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-500" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-lg font-semibold transition duration-[250] ease-linear list-none hover:text-blue-500">
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-500" : ""
              }
            >
              Products
            </NavLink>
          </li>
          <li className="text-lg font-semibold transition duration-200 ease-linear list-none hover:text-blue-500">
            <NavLink
              to="/aboutus"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-500" : ""
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="text-lg font-semibold transition duration-200 ease-linear list-none hover:text-blue-500">
            <NavLink
              to="/contactus"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-500" : ""
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      ) : (
        <div>{/* for small devices  */}</div>
      )}
    </>
  );
};

export default NavItems;
