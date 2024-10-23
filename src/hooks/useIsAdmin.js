import { useEffect, useState } from "react";
import { ROUTES } from "../Routes/baseRoutes";

const useIsAdmin = (uid) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  const [dbUser, setDbUser] = useState([]);

  useEffect(() => {
    fetch(`${ROUTES.SERVER}/user/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data.isAdmin);
        setAdminLoading(false);
        setDbUser(data);
      });
  }, [uid]);

  return [isAdmin, dbUser, adminLoading];
};

export default useIsAdmin;
