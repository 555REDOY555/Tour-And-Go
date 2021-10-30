import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Components/hook/useAuth';

const MyOrder = () => {
     const { user } = useAuth();

     const email = user.email

     const [MyOrders, setMyOrders] = useState([])
     const [users, setUsers] = useState([]);


     useEffect(() => {
          fetch(`http://localhost:5000/order/${email}`)
               .then(res => res.json())
               .then(data => setMyOrders(data))
     }, [])

     const handleDeleteUser = id => {
          const proceed = window.confirm('Are you sure, you want to delete?');
          if (proceed) {
               const url = `http://localhost:5000/order/${id}`;
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

     console.log(MyOrders);



     return (
          <div>
               <h1 className="text-center" >This is my orders {MyOrders.length}</h1>
               <div className="allOrders">
                    <div className="row container text-center ">
                         {
                              MyOrders.map(orders => <div className="card m-4 bg-info  ">

                                   <div className="card-body">
                                        <h5 className="card-title">{orders?._id}</h5>
                                        <p className="card-text text-primary "></p>
                                        <h2 className="text-primary mb-3 " >
                                             {orders?.city}
                                        </h2>
                                        <p>{orders?.description}</p>
                                        <Link to='' ><Button onClick={() => handleDeleteUser(MyOrders._id)} className="btn btn-danger" >delate</Button></Link>
                                   </div>
                              </div>)
                         }
                    </div>
               </div>
          </div>
     );
};

export default MyOrder;