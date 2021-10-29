import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Components/hook/useAuth';

const Alluser = () => {
     const [services, setServices] = useState([])
     const { user } = useAuth()
     const [users, setUsers] = useState([]);





     useEffect(() => {
          fetch(`http://localhost:5000/servises`)
               .then(res => res.json())
               .then(data => {
                    setServices(data);
               });
     }, [])
     const handleDeleteUser = id => {
          const proceed = window.confirm('Are you sure, you want to delete?');
          if (proceed) {
               const url = `http://localhost:5000/delete/${id}`;
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
                         services.map((service, index) => <div className="card    ">
                              <img src={service?.img} className="card-img-top img-fluid  " alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">{service?.name}</h5>
                                   <p className="card-text text-primary "></p>
                                   <h2 className="text-primary mb-3 " >
                                        {service?.price}
                                   </h2>
                                   <p>{service?.description}</p>
                                   <Link to='' ><Button onClick={() => handleDeleteUser(service._id)} className="btn btn-warning text-center " >DELETE</Button></Link>
                              </div>
                         </div>)
                    }

               </div>
          </div>
     );
};

export default Alluser;