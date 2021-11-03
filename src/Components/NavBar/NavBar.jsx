import React from 'react'
import {Navbar} from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap'
import {CartWidget, dropdowns} from './MenuItems'
import './NavBar.css'

export default function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
    <Container fluid>
    <Navbar.Brand href="#">Drinks</Navbar.Brand>
    <i class="fas fa-cocktail"></i>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        {dropdowns.map((item, index)=>{
          return(
            <NavDropdown title={item.title} id="navbarScrollingDropdown">
            <NavDropdown.Item href={item.href1}>{item.href1}</NavDropdown.Item>
            <NavDropdown.Item href={item.href2}>{item.href2}</NavDropdown.Item>
            <NavDropdown.Item href={item.href3}>{item.href3}</NavDropdown.Item>
            </NavDropdown>)
        })}

      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      
      <CartWidget/>
      <Button variant='success'> Iniciar Sesion</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>)
}
