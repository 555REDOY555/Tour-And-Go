import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Components/hook/useAuth';

const MyOrder = () => {

     const { user } = useAuth()
     const [orders, setOrders] = useState([]);
     const [users, setUsers] = useState([]);
     const [isDelete, setIsDelete] = useState(null);

     const email = user.email;

     useEffect(() => {
          fetch(`http://localhost:5000/myOrders/${email}`)
               .then((res) => res.json())
               .then((data) => setOrders(data));
     }, [email]);
     console.log(orders);

     const handleDeleteProduct = (id) => {
          console.log(id);

          fetch(`http://localhost:5000/deleteProduct/${id}`, {
               method: "DELETE",
               headers: { "Content-type": "application/json" },
          })
               .then((res) => res.json())
               .then((result) => {
                    if (result.deletedCount) {
                         setIsDelete(true);
                    } else {
                         setIsDelete(false);
                    }
               });
     };
     return (
          <div>
               <h1 className="text-center mb-4" >I am Dashboard {orders.length}</h1>
               <div className="all-products">
                    <div className="row container text-center">
                         {orders?.map((pd, index) => (
                              <div className="col-md-6 col-lg-4">
                                   <div className=" border border p-2 m-2">
                                        <h4>{pd.email}</h4>
                                        <h5>{pd?.name}</h5>
                                        <h5>{pd?.price}</h5>
                                        <h6>{pd?._id}</h6>
                                        <Button className="btn btn-danger" onClick={() => handleDeleteProduct(pd?._id)} >
                                             Delete order
                                        </Button>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     )
};

export default MyOrder;