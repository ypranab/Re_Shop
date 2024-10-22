import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";
import Products from "../Pages/Products";
import PhoneDetails from "../Pages/PhoneDetails";
import Profile from "../Pages/dashboardPages/Profile";
import AllUsers from "../Pages/dashboardPages/AllUsers";
import DashboardLayout from "../Layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/category/:brand",
        element: (
          <PrivateRoute>
            <PhoneDetails></PhoneDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.brand}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
