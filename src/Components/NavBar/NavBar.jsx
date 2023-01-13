import React from 'react'
import "./Navbar.css"
import Brand from '../Brand/Brand'
import CartWidget from '../CartWidget/CartWidget'
import { Navbar, Container, Nav, NavDropdown, Button, Form, NavLink } from "react-bootstrap"
import {Link} from 'react-router-dom'

function NavBar({ }) {
    return (
        <Navbar className='sticky-top' bg="light" expand="lg">
            <Container fluid>
                <Link to="/"><Brand /></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='pt-2' to="/">NUESTROS PRODUCTOS</Link>
                        <NavDropdown title="CATEGORIAS" id="navbarScrollingDropdown">
                            <Link className='ps-2' to='/category/Cerveza'>
                                CERVEZAS
                            </Link>
                            <br></br>
                            <Link className='ps-2' to='/category/BebidaBlanca'>
                                BEBIDA BLANCA
                            </Link>
                            {/* <NavDropdown.Item href="#action5">
                                LICORES
                            </NavDropdown.Item> */}
                        </NavDropdown>
                        <Link className='pt-2' href="#">
                            ¡PONTE EN CONTACTO!
                        </Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Link to="cart">
                    <CartWidget />
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar