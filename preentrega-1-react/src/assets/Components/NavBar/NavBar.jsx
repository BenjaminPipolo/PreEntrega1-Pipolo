import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo';

function NavBar() {
  return (
    <>
      <Navbar className='navbar' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#remeras">Remeras</Nav.Link>
            <Nav.Link href="#camisas">Camisas</Nav.Link>
            <Nav.Link href="#buzos">Buzos</Nav.Link>
            <Nav.Link href="#pantalones">Pantalones</Nav.Link>
            <Nav.Link href="#carrito"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar;