import { useState } from "react";
import AuthContext from "./AuthContext";

const getDefaultUsers = () => {
  return new Map([
    ["demo@example.com", "password123"],
    ["test@user.com", "testpass"]
  ]);
};

const AuthContextProvider = ({ children }) => {
  const [activatedUsers, setActivatedUsers] = useState(getDefaultUsers());

  const login = (email, password) => {
    if (!activatedUsers.has(email)) {
      throw new Error("User not found");
    }
    if (activatedUsers.get(email) !== password) {
      throw new Error("Invalid password");
    }

    // Log this user in sessionStorage
    sessionStorage.setItem("currentlyLoggedInUser", email.split("@")[0]);
    return true;
  };

  const signUp = (email, password) => {
    if (activatedUsers.has(email)) {
      throw new Error("User already exists");
    }
    setActivatedUsers((prev) => {
      const newMap = new Map(prev);
      newMap.set(email, password);
      return newMap;
    });

    // Log this user in sessionStorage
    sessionStorage.setItem("currentlyLoggedInUser", email.split("@")[0]);
    return true;
  };

  const getCurrentUser = () => {
    return sessionStorage.getItem("currentlyLoggedInUser");
  };

  return (
    <AuthContext.Provider value={{
      activatedUsers,
      setActivatedUsers,
      login,
      signUp,
      getCurrentUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
