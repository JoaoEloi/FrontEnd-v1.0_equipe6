import "./style.scss";
import { Link } from "react-router-dom";

import { Authcontext } from "../../Context/auth";
import * as yup from "yup";

import React, { useState, useContext } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  // if (!(await validate())) return;

  const { login } = useContext(Authcontext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit do login", { email, password, userName });

    login(email, password, userName); //integração com o context/API
  };

  // async function validate() {
  //   let schema = yup.object().shape({
  //     email: yup.string().email(),
  //     password: yup.string().password(),
  //   })
  // }

  return (
    <>
      <div className="container_form_login">
        <h1 className="h1-do-login">Iniciar sessão</h1>
        <form className="form_login_itens" onSubmit={handleSubmit}>
          <div className="inputs_do_login">
            {/* <label className="label-do-login" htmlFor="text">
              Nome de Usuário
            </label>
            <input
              className="input-do-login"
              name="text"
              type="text"
              placeholder="Insira seu nome de usuário"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            /> */}
            <label className="label-do-login" htmlFor="email">
              Email
            </label>
            <input
              className="input-do-login"
              name="email"
              type="email"
              placeholder="Insira seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="label-do-login" htmlFor="password">
              Senha
            </label>
            <input
              className="input-do-login"
              type="password"
              name="password"
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="button-login" type="submit">
            Entrar
          </button>
          <div className="container_redirect_to_cadastro">
            <h2 className="h2_do_login">
              Ainda não tem conta?
              <Link to="/cadastro">
                <button className="button_redirect_to_cadastro">
                  Registre-se
                </button>
              </Link>
            </h2>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
