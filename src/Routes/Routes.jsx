import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";
import Products from "../Pages/Products";
import Profile from "../Pages/dashboardPages/Profile";
import AllUsers from "../Pages/dashboardPages/AllUsers";
import DashboardLayout from "../Layout/DashboardLayout";
import { ROUTES } from "./baseRoutes";
import AddPhones from "../Pages/dashboardPages/AddPhones";
import Bookings from "../Pages/dashboardPages/Bookings";
import Phones from "../Pages/Phones";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`${ROUTES.SERVER}/brands`),
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
        loader: () => fetch(`${ROUTES.SERVER}/products`),
      },
      {
        path: "/category/:brand",
        element: (
          <PrivateRoute>
            <Phones></Phones>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${ROUTES.SERVER}/category/${params.brand}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
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
        path: "products",
        element: <AddPhones></AddPhones>,
      },
      {
        path: "bookings/:email",
        element: <Bookings></Bookings>,
        loader: ({ params }) =>
          fetch(`${ROUTES.SERVER}/bookings/${params.email}`),
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
