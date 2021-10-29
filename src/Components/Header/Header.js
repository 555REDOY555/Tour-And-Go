import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
     return (
          <div>
               <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
                    <Container fluid>
                         <Navbar.Brand href="#"></Navbar.Brand>
                         <Navbar.Toggle aria-controls="navbarScroll" />
                         <Navbar.Collapse id="navbarScroll">
                              <Nav className="d-flex justify-content-end">
                                   <Nav.Link className="navbar" as={HashLink} to="/home">Home</Nav.Link>
                                   <Nav.Link className="navbar" as={HashLink} to="/servise">Servise</Nav.Link>
                                   <Nav.Link className="navbar" as={HashLink} to="/MyOrder">MyOrder</Nav.Link>
                                   <Nav.Link className="navbar" as={HashLink} to="/About">About</Nav.Link>
                                   {/* <div className=""> */}



                                   {/* <button onClick={logOut} className=" btn-info" >Log-Out</button>
                                        : */}
                                   <Nav.Link as={HashLink} to="/login">LogIn</Nav.Link>



                                   {/* </div> */}
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