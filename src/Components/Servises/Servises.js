import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Servise from '../Servise/Servise';

const Servises = () => {
     const [servises, setServises] = useState([]);

     useEffect(() => {
          fetch(`http://localhost:5000/servises`)
               .then(res => res.json())
               .then(data => {
                    setServises(data);
               });
     }, [])

     // console.log(servises)

     return (
          <div>
               <h1 className="text-center my-5" >
                    This is our best deals
               </h1>

               <div className="row row-cols-1 row-cols-md-2 g-4 mx-4 my-5  ">
                    {
                         servises.map(all => <Servise all={all}></Servise>)
                    }

               </div>

          </div>

     );
};

export default Servises;