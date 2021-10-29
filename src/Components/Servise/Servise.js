import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Servise = ({ service }) => {
     const { _id, name, price, img } = service;
     return (
          <div>

               <div className="">

                    <div className="col hover-card ">

                         <div className="card    ">
                              <img src={img} className="card-img-top img-fluid  " alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">{name}</h5>
                                   <p className="card-text text-primary "></p>
                                   <h2 className="text-primary mb-3 " >
                                        {price}
                                   </h2>
                                   <Link to={`/order/${_id}`} ><Button className="btn btn-warning" >Book</Button></Link>
                              </div>
                         </div>
                    </div>
               </div>

          </div >
     );
};

export default Servise;