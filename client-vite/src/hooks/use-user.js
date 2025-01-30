// a function that returns three things:
// 1. user
// 2. a function to set the user
// 3. a function to remove the user

import { useEffect, useState } from "react";

const useUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUser(user);
      setIsLoggedIn(true);
    }
  }, []);

  const addUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));

    setUser(userData);
    setIsLoggedIn(true);
  };

  const removeUser = () => {
    localStorage.removeItem("user");

    setUser(null);
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    user,
    addUser,
    removeUser,
  };
};

export { useUser };
