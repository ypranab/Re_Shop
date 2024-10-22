import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import userPic from "../../assests/user.png";
import logo from "../../assests/logo.ico";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navLink = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/products"}>Products</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-zinc-200 mb-4 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <Link to="/">
          <img className="w-8" src={logo} alt="" />
        </Link>
        <Link to={`/`} className="btn btn-ghost text-xl">
          Re Shop
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {user && user.displayName}
        {user?.email &&
          (user?.photoURL ? (
            <div className="w-8">
              <img className="rounded-full" alt="User" src={user?.photoURL} />
            </div>
          ) : (
            <div className="w-8">
              <img className="rounded-full" alt="User" src={userPic} />
            </div>
          ))}

        {user?.email ? (
          <Link to="/dashboard">
            <button className="btn ml-2">Dashboard</button>
          </Link>
        ) : (
          <Link to={`/login`} className="btn">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
