import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Shipping = () => {
     const { _id } = useParams();
     const [booking, setBooking] = useState([])

     useEffect(() => {
          fetch(`http://localhost:5000/servises`)
               .then(res => res.json())
               .then(data => setBooking(data))

     }, [])

     const Iteam = booking.filter(td => td.id === _id)
     console.log(Iteam)

     return (
          <div>

               <div className="card    ">
                    <img src={Iteam[0]?.img} className="card-img-top img-fluid  " alt="..." />
                    <div className="card-body">
                         <h5 className="card-title">{Iteam[0]?.name}</h5>
                         <p className="card-text text-primary "></p>
                         <h2 className="text-primary mb-3 " >
                              {Iteam[0]?.price}
                         </h2>
                         <p>{Iteam[0]?.description}</p>
                         <Link to={`/Order`} ><Button className="btn btn-warning" >Book</Button></Link>
                    </div>
               </div>

          </div>
     );
};

export default Shipping;