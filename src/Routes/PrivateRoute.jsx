import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  //console.log(location);

  if (loading) {
    return <div>Loading.......</div>;
  }

  if (user) {
    return children;
  }

  if (!user) {
    return <Navigate state={{ from: location }} to={`/login`}></Navigate>;
  }
};

export default PrivateRoute;
