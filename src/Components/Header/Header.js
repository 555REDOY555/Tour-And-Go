import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../hook/useAuth';

const Header = () => {
     const { user, logOut } = useAuth();
     return (
          <div>
               <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
                    <Container fluid>
                         <Navbar.Brand href="#"></Navbar.Brand>
                         <Navbar.Toggle aria-controls="navbarScroll" />
                         <Navbar.Collapse id="navbarScroll">
                              <Nav className="d-flex justify-content-end">

                                   <Nav.Link className="navbar" as={HashLink} to="/servise">Servise</Nav.Link>
                                   <Nav.Link className="navbar" as={HashLink} to="/About">About</Nav.Link>
                                   <Nav.Link className="navbar" as={HashLink} to="/Businesses">Businesses</Nav.Link>
                                   {
                                        user.email ?
                                             <Nav.Link className="navbar" as={HashLink} to="/MyOrder">My Order</Nav.Link> : ""

                                   }
                                   {
                                        user.email ?
                                             <Nav.Link className="navbar" as={HashLink} to="/allOrder">Manage All Orders</Nav.Link> : ""

                                   }
                                   {
                                        user.email ?
                                             <Nav.Link className="navbar" as={HashLink} to="/allServ">Manage All Service</Nav.Link> : ""

                                   }
                                   {
                                        user.email ? <Nav.Link className="navbar" as={HashLink} to="/addUser">Add A New Service</Nav.Link> : ""
                                   }
                                   {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                                   {
                                        user.email ?
                                             <button className="btn btn-info" onClick={logOut}>log out</button>
                                             :
                                             <Nav.Link className="navbar" as={HashLink} to="/login">Login</Nav.Link>
                                   }
                              </Nav>
                              <Form className="d-flex flex-fill mx-5">
                                   <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                   />
                                   <Button className="btn btn-warning" >Search</Button>
                              </Form>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>

          </div>
     );
};

export default Header;