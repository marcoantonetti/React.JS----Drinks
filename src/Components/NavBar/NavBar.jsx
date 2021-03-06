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
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant='dark' className='letras'>
    <Container fluid>
    <Link to='/'><Navbar.Brand >Drinks</Navbar.Brand><i class="fas fa-cocktail"></i></Link>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        {dropdowns.map((item, index)=>{
          return(
          <NavDropdown key={item.id} title={item.title} id="navbarScrollingDropdown">
          <NavDropdown.Item  ><NavLink to={`/categoria/${item.title}`}>{item.subcategoria}</NavLink></NavDropdown.Item>
          <NavLink className='navLinkNavBar' to={`/subcategoria/${item.subcategoria1}`}><NavDropdown.Item  >{item.subcategoria1}</NavDropdown.Item></NavLink>
           <NavDropdown.Item ><NavLink to={`/subcategoria/${item.subcategoria2}`}>{item.subcategoria2}</NavLink></NavDropdown.Item>
           <NavDropdown.Item ><NavLink to={`/subcategoria/${item.subcategoria3}`}>{item.subcategoria3}</NavLink></NavDropdown.Item>
            </NavDropdown>
            )
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
