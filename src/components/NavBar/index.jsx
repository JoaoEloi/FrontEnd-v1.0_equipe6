import "./style.scss";

import Logo from "../../assets/logo 1.png";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import { NavItem } from "react-bootstrap";

export default function NavBar() {
  return (
    <section id="navbar" className="navbar_container_home">
      <div className="div_da_logo">
        <Link to="/">
          <img src={Logo} alt="Logo do site" className="logo_do_navbar" />
        </Link>
        <h1 className="h1_do_navbar">Sinta-se em casa</h1>
      </div>
      {["lg"].map((expand) => (
        <Navbar key={expand} bg="#1dbeb4" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href={Logo} />
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <NavItem className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/cadastro">
                    <button className="button_da_navbar">
                      <NavItem>Criar Conta</NavItem>
                    </button>
                  </Link>

                  <Link to="/login">
                    <button className="button_da_navbar">
                      <NavItem>Iniciar sessão</NavItem>
                    </button>
                  </Link>
                </NavItem>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </section>
  );
}
