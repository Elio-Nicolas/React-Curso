import './CartWidget'
import CartWidget from './CartWidget'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbarr() {

    return (
        <>
            {/* <p>Navbar working!!</p>*/}

            <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Varios</Nav.Link>
           
          </Nav>

          <CartWidget />
          {/*<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>*/}
    </Navbar.Collapse>
      </Container>
    </Navbar>
            

        </>
    );
}

export default Navbarr