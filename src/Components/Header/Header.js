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
                                   <Nav.Link className="navbar" as={HashLink} to="/personal"> Businesses</Nav.Link>
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
               <div class="card bg-dark text-white">
                    <img src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560" class="card-img" alt="..." />
                    <div class="card-img-overlay">
                         <h5 class="card-title">We will take you to your deram palace</h5>
                         <p class="card-text"></p>
                         <p class="card-text"></p>
                    </div>
               </div>
          </div>
     );
};

export default Header;