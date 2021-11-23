import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../Assets/images/top-logo.png";


export default function NavbarFunc() {
 
  /* Navbar cambia style cuando window.scrollY supera los 90px */

  const [navbarScrollBg, setNavbarScrollBg] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setNavbarScrollBg(true);
    } else {
      setNavbarScrollBg(false);
    }
  };
   useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);   
  

  return (
    <Container fluid className="fixed-top">
      <Navbar
        collapseOnSelect
        expand="md"
        className={`my-navbar ${navbarScrollBg && "my-bg"}`}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo 25 Watts"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto d-inline-flex flex-wrap">
              <Nav.Link className="my-link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="my-link" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="my-link" href="#products">
                Products
              </Nav.Link>
              <Nav.Link className="my-link" href="#services">
                Services
              </Nav.Link>
              <Nav.Link className="my-link" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
