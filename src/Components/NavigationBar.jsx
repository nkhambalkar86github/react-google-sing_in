import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/TokenUtil";



export function NavigationBar() {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    logout();
    navigate("/");
  }
  return (
    <Navbar expand="lg" data-bs-theme="dark" style={{ backgroundColor: "#1a1a1c" }}>
      <Container>
        <Navbar.Brand href="/main-dashboard" >Admin project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <LinkContainer to="/login-first">
              <Nav.Link>Login here</Nav.Link>
            </LinkContainer>
    {/*
            <LinkContainer to="/dashboard">
              <Nav.Link>Dashboard1</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/user-list">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>



            <LinkContainer to="/admin-registration">
              <Nav.Link>Create Admin</Nav.Link>
  </LinkContainer>*/}



            <LinkContainer to="/">
              <Nav.Link>User Registration</Nav.Link>
            </LinkContainer>
          </Nav>
          <Button variant="primary" size="sm" onClick={handleLogoutClick}>Logout</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}