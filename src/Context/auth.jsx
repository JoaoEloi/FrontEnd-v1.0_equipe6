import React, { useState, createContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

// import { api, createSession } from "../Service/api";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = async (email, password, userName) => {
    // const response = await createSession(email, password);

    console.log("login auth", { email, password, userName });

    // api criar uma session

    const loggedInUser = { id: "123", email, userName };
    // const loggedInUser = response.data.user;
    // const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedInUser));
    // localStorage.setItem("token", token);

    // api.defaults.headers.Authorization = "Bearer " + token;

    if (password === "secret") {
      setUser(loggedInUser);
      navigate("/");
    }

    // setUser(loggedInUser);
    // navigate("/");
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    // localStorage.removeItem("token");
    // api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login");
  };
  return (
    <Authcontext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </Authcontext.Provider>
  );
};
