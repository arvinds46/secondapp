import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">To Do App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/about" className='nav-link'>About</Link>
            <Link to="/contact" className='nav-link'>Contact Us</Link>
            <Link to="/register" className='nav-link'>Registration</Link>
            <Link to="/userlist" className='nav-link'>Show All Users</Link>
            <Link to="/todo" className='nav-link'>To Do App</Link>
            <Link to="/productlist" className='nav-link'>List of Products</Link>
            <Link to="/weather" className='nav-link'>Weather</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;