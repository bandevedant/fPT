import React from 'react'
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap/';
import {Link} from 'react-scroll'

const NavbarTop = () => {
  return (
    <Navbar className="py-3 " sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand style={{fontSize:"2rem"}} href="#home">fPT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto " style={{fontSize:"1.2rem"}}>
            <Nav.Link href="#about">About</Nav.Link>
           
            <Nav.Link as={Link} to="footer" smooth={true} duration={500} href="#contactus">Contact Us</Nav.Link>
          
            <Nav.Link href="http://github.com/bandevedant/">Github</Nav.Link>
            
          </Nav>
          <Nav style={{fontSize:"1.2rem"}}>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#signup">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarTop
