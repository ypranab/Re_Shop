import { useEffect, useState } from "react";

const useIsAdmin = (email) => {
  console.log(email);
  const [isAdmin, setIsAmdin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.role == "admin") {
          setIsAmdin(true);
        }
        setAdminLoading(false);
      });
  }, [email]);
  return [isAdmin, adminLoading];
};

export default useIsAdmin;
