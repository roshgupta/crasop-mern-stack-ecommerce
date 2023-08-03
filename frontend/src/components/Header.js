import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">CRASOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/cart">
              <i className='fa fa-shopping-cart'></i>
              {" "}
              Cart
            </Nav.Link>
            <Nav.Link href="/login">
              <i className='fa fa-user'></i>
              {" "}
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header