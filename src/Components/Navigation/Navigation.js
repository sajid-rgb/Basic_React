import React, {useContext} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {AppContext} from '../../App';

const Navigation = () => {
  const {cart, user, setUser} = useContext(AppContext);
  //CRUD
  // create, read, update, delete
    return (
        <div>
            <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Link to="/home" className="text-white me-2">Search Engine</Link>
    <Nav className="me-auto">
      <Link to="/home" className="text-white me-2">Home</Link>
      <Link to="cart" className="text-white me-2">Cart {cart.length > 0 && cart.length}</Link>
      {
        Object.keys(user).length > 0 ? <Link to="/" className="text-white me-2" onClick={() => setUser({})}>Logout</Link> : <Link to="/login" className="text-white me-2">Login</Link>
      }
      <Link to="admin" className="text-white me-2">Admin</Link>
    </Nav>
    </Container>
  </Navbar>

</>
        </div>
    );
};

export default Navigation;