import React, {useContext} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {AppContext} from '../../App';

const Navigation = () => {
  const {cart} = useContext(AppContext);
    console.log(cart);
    return (
        <div>
            <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Link to="/home" className="text-white me-2">Search Engine</Link>
    <Nav className="me-auto">
      <Link to="/home" className="text-white me-2">Home</Link>
      <Link to="cart" className="text-white me-2">Cart {cart.length > 0 && cart.length}</Link>
      <Link to="login" className="text-white me-2">Login</Link>
    </Nav>
    </Container>
  </Navbar>

</>
        </div>
    );
};

export default Navigation;