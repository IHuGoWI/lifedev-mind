import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-zinc-800">
        <ul className="px-36 py-2 flex gap-16 items-center justify-center">
          <NavLink
            to="/"
            className=""
          >
            <li className="text-blue-600 font-extrabold text-2xl">
              <span className="text-white">Life</span>Dev
            </li>
          </NavLink>
          <NavLink
            to="/login"
            className=""
          >
            <li className="text-white hover:text-blue-600 transition duration-300">Login</li>
          </NavLink>
          <NavLink
            to="/register"
            className=""
          >
            <li className="text-white hover:text-blue-600 transition duration-300">Register</li>
          </NavLink>
          <li>
            <button className="py-2 px-4 text-white rounded-lg cursor-pointer bg-blue-600 hover:text-black transition duration-300">Exit</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
