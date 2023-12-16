import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import PropTypes from "prop-types";
export const userContext = createContext(null);
const AuthContext = ({ children }) => {
  const [user, SetUser] = useState(null);

  const get_User = (Email, Password) => {
    return signInWithEmailAndPassword(auth, Email, Password);
  };
  const set_User = (Email, Password) => {
    return createUserWithEmailAndPassword(auth, Email, Password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      SetUser(currentuser);
      return () => unsubscribe();
    });
  });
  const val = { user, get_User, set_User, SetUser };
  return <userContext.Provider value={val}>{children}</userContext.Provider>;
};

export default AuthContext;
AuthContext.propTypes = {
  children: PropTypes.node,
};
