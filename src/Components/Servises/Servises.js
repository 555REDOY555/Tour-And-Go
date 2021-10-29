import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Servise from '../Servise/Servise';

const Servises = () => {
     const [services, setServices] = useState([])





     useEffect(() => {
          fetch(`http://localhost:7000/servises`)
               .then(res => res.json())
               .then(data => {
                    setServices(data);
               });
     }, [])

     // console.log(servises)

     const heandleBook = (index) => {

          const data = services[index]
          data.email = "akredoy@gmail"
          fetch(`http://localhost:7000/order`, {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(data)

          })
     }
     return (
          <div>
               <div class="card bg-dark text-white">
                    <img src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560" class="card-img" alt="..." />
                    <div class="card-img-overlay">
                         <h5 class="card-title">We will take you to your deram palace</h5>
                         <p class="card-text"></p>
                         <p class="card-text"></p>
                    </div>
               </div>
               <h1 className="text-center my-5" >
                    This is our best deals
               </h1>

               <div className="row row-cols-1 row-cols-md-2 g-4 mx-4 my-5  ">
                    {
                         services.map((service, index) => <div className="card    ">
                              <img src={service?.img} className="card-img-top img-fluid  " alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">{service?.name}</h5>
                                   <p className="card-text text-primary "></p>
                                   <h2 className="text-primary mb-3 " >
                                        {service?.price}
                                   </h2>
                                   <p>{service?.description}</p>
                                   <Link to='' ><Button onClick={() => heandleBook(index)} className="btn btn-warning" >Book</Button></Link>
                              </div>
                         </div>)
                    }

               </div>

          </div>

     );
};

export default Servises;