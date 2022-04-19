import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Link to="/" className="text-white me-2">Search Engine</Link>
    <Nav className="me-auto">
      <Link to="/" className="text-white me-2">Home</Link>
      <Link to="cart" className="text-white me-2">Cart</Link>
      <Link to="login" className="text-white me-2">Login</Link>
    </Nav>
    </Container>
  </Navbar>

</>
        </div>
    );
};

export default Navigation;