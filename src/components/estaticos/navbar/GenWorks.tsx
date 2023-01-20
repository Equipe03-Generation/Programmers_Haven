import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../logo.svg";
function CustomNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="Home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            GenWorks
          </Navbar.Brand>
          <Nav className="me-auto">
          
            <Nav.Link href="Home">Turmas</Nav.Link>
            <Nav.Link href="Project">Projetos</Nav.Link>
            <Nav.Link href="About">Grupos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default CustomNavbar;
