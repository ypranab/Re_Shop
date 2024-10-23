import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FaUser, FaUsers, FaSignOutAlt, FaCartPlus } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
//import useIsAdmin from "../../hooks/useIsAdmin";

const DashboardSidebarContent = () => {
  const { user, logOut } = useContext(AuthContext);
  //const [isAdmin, dbUser] = useIsAdmin(user?.uid);
  //console.log({ user });
  const navigate = useNavigate();
  //console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate(`/login`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="p-4">
      {/* User Profile Info */}
      <div className="flex flex-row lg:flex-col items-start gap-2">
        <img
          src={user?.photoUrl}
          alt="User Profile"
          className="w-16 h-16 rounded-full"
        />
        <span>{user?.name}</span>
        <span className="text-xs">{user?.email}</span>
      </div>
      <hr className="my-4" />

      {/* Sidebar Links */}
      <nav className="flex flex-col gap-4">
        {/* Profile Link */}
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
          }
        >
          <FaUser className="inline mr-2" />
          Profile
        </NavLink>

        {user?.isAdmin && (
          <NavLink
            to="/dashboard/products"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
            }
          >
            <FaCartPlus className="inline mr-2" />
            Add phone
          </NavLink>
        )}
        {user?.email && (
          <NavLink
            to={`/dashboard/bookings/${user.email}`}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
            }
          >
            <FaCartPlus className="inline mr-2" />
            Bookings
          </NavLink>
        )}

        {user?.isAdmin && (
          <NavLink
            to="/dashboard/allUsers"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
            }
          >
            <FaUsers className="inline mr-2" />
            All Users
          </NavLink>
        )}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="text-red-600 text-sm hover:underline flex items-center"
        >
          <FaSignOutAlt className="inline mr-2" />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default DashboardSidebarContent;
