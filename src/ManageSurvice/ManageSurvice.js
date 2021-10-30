// import Button from '@restart/ui/esm/Button';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const ManageSurvice = () => {
//      const [services, setServices] = useState([])


//      useEffect(() => {
//           fetch(`http://localhost:5000/servises`)
//                .then(res => res.json())
//                .then(data => {
//                     setServices(data);
//                });
//      }, [])
//      return (
//           <div>
//                <div className="row row-cols-1 row-cols-md-2 g-4 mx-4 my-5  ">
//                     {
//                          services.map(all => {
//                               <div className="col hover-card ">

//                                    <div className="card    ">
//                                         <img src={all.img} className="card-img-top img-fluid  " alt="..." />
//                                         <div className="card-body">
//                                              <h5 className="card-title">{all.name}</h5>
//                                              <p className="card-text text-primary "></p>
//                                              <h2 className="text-primary mb-3 " >
//                                                   {all.price}
//                                              </h2>
//                                              <Link to='' ><Button className="btn btn-warning" >Book</Button></Link>
//                                         </div>
//                                    </div>
//                               </div>
//                          })
//                     }
//                </div>
//           </div>
//      );
// };

// export default ManageSurvice;