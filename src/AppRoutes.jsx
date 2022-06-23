import {
  BrowserRouter as Routers,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import React, { useState, useContext } from "react";

import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import UserLoggedInNavBar from "./components/UserLoggedInNavBar";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import MinhasReservas from "./Pages/MinhasReservas";
import Reserva from "./Pages/Reserva";

import { AuthProvider, Authcontext } from "./Context/auth";
import { SearchProvider, SearchContext } from "./Context/search";
import ReservaSucess from "./Pages/ReservaSucess";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(Authcontext);

    if (loading) {
      return <div className="loading">Carregando</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const LoggedInUser = () => {
    const { authenticated } = useContext(Authcontext);

    if (authenticated) {
      return <UserLoggedInNavBar />;
    }
    return <NavBar />;
  };

  return (
    <Routers>
      <SearchProvider>
      <AuthProvider>
        <LoggedInUser />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="cadastro" element={<Cadastro />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/minhasreservas"
            element={
              <Private>
                <MinhasReservas />
              </Private>
            }
          />
          <Route exact path="*" element={<h1>Page not found - 404</h1>} />
          <Route path="/reserva/:id" element={<Reserva />} />
          <Route path="/reserva/sucess" element={<ReservaSucess />} />
        </Routes>
        <Footer />
      </AuthProvider>
      </SearchProvider>
    </Routers>
  );
};

export default AppRoutes;
