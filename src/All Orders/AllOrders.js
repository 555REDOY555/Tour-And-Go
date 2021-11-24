import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Components/hook/useAuth';

const AllOrders = () => {
     const [services, setServices] = useState([])
     const { user } = useAuth()
     const [users, setUsers] = useState([]);





     useEffect(() => {
          fetch(`https://infinite-hamlet-14555.herokuapp.com/order`)
               .then(res => res.json())
               .then(data => {
                    setServices(data);
               });
     }, [])
     const handleDeleteUser = id => {
          const proceed = window.confirm('Are you sure, you want to delete?');
          if (proceed) {
               const url = `https://infinite-hamlet-14555.herokuapp.com/order/${id}`;
               fetch(url, {
                    method: 'DELETE'
               })
                    .then(res => res.json())
                    .then(data => {
                         if (data.deletedCount > 0) {
                              alert('deleted successfully');
                              const remainingUsers = users.filter(user => user._id !== id);
                              setUsers(remainingUsers);
                         }
                    });
          }
     }
     return (
          <div>
               <div className="row row-cols-1 row-cols-md-2 g-4 mx-4 my-5  ">
                    {
                         services.map((service) => <div className="card    ">

                              <div className="card-body">
                                   <h5 className="card-title">{service?.name}</h5>
                                   <p className="card-text text-primary "></p>
                                   <h2 className="text-primary mb-3 " >
                                        {service?._id}
                                   </h2>
                                   <p>{service?.phone}</p>
                                   <Link to='' ><Button onClick={() => handleDeleteUser(service._id)} className="btn btn-warning text-center " >DELETE</Button></Link>
                              </div>
                         </div>)
                    }

               </div>
          </div>
     );
};

export default AllOrders;