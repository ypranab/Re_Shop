import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { ROUTES } from "../Routes/baseRoutes";

export const AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogIn = (provider) => {
    setLoading(false);
    return signInWithPopup(auth, provider);
  };

  const githubLogIn = (provider) => {
    setLoading(false);
    return signInWithPopup(auth, provider);
  };

  const updateUser = (profile) => {
    setLoading(false);
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser + "USER");
      if (currentUser?.email) {
        fetch(`${ROUTES.SERVER}/user/${currentUser?.uid}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch user data.");
            }
            return response.json();
          })
          .then((data) => {
            //console.log(data);
            setUser(data);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error.message);
          });
      } else {
        setUser(null);
      }
      //setUser(currentUser);
      setLoading(false);
      //console.log(user);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  const authInfo = {
    loading,
    user,
    createNewUser,
    logIn,
    googleLogIn,
    githubLogIn,
    updateUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
