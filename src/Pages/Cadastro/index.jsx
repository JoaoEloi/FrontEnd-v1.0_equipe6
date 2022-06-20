import "./style.scss";

import { Formik, Field, Form } from "formik";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
  Link,
  useNavigate,
} from "react-router-dom";

export default function Cadastro() {
  return (
    <>
      <div className="container_form_cadastro">
        <h1 className="h1_cadastro">Criar Conta</h1>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 100));
            alert("Insira seus Dados");
          }}
        >
          <Form className="form_cadastro_itens">
            <div className="inputs_do_cadastro">
              <label htmlFor="firstName" className="label_do_cadastro">
                Nome
              </label>
              <Field
                className="input_do_cadastro"
                id="Name"
                name="Name"
                placeholder="Insira seu nome"
              />

              <label htmlFor="lastName" className="label_do_cadastro">
                Sobremome
              </label>
              <Field
                className="input_do_cadastro"
                id="lastName"
                name="lastName"
                placeholder="Insira seu sobrenome"
              />

              <label htmlFor="email" className="label_do_cadastro">
                Email
              </label>
              <Field
                className="input_do_cadastro"
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />

              <label htmlFor="email" className="label_do_cadastro">
                Repetir Email
              </label>
              <Field
                className="input_do_cadastro"
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />

              <label htmlFor="password" className="label_do_cadastro">
                Senha
              </label>
              <Field
                className="input_do_cadastro"
                id="senha"
                name="senha"
                placeholder="Insira sua senha"
                type="password"
              />

              <button type="submit" className="button_cadastro">
                Registrar
              </button>
            </div>
          </Form>
        </Formik>

        <div className="container_redirect_to_login">
          <h2 className="h2_do_cadastro">
            Já tem uma conta?
            <Link to="/login">
              <button
                className="button_redirect_to_login"
                variant="outline-primary"
              >
                Iniciar sessão
              </button>
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
}
