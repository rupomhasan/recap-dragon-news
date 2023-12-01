import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../Firebase/firebaseConfig";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));

    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((error) => console.log(error));
  }, []);

  const authentication = { news, userRegister, userLogin, categories };
  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
