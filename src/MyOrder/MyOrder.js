import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyOrder = () => {

     const email = "akredoy@gmail"
     const [MyOrders, setMyOrders] = useState([])


     useEffect(() => {
          fetch(`http://localhost:5000/MyOrder/${email}`)
               .then(res => res.json())
               .then(data => setMyOrders(data))
     }, [])

     console.log(MyOrders);



     return (
          <div>
               <h1 className="text-center" >This is my orders {MyOrders.length}</h1>
               <div className="allOrders">
                    <div className="row container text-center ">
                         {
                              MyOrders.map(orders => <div className="card    ">

                                   <div className="card-body">
                                        <h5 className="card-title">{orders?.name}</h5>
                                        <p className="card-text text-primary "></p>
                                        <h2 className="text-primary mb-3 " >
                                             {orders?.price}
                                        </h2>
                                        <p>{orders?.description}</p>
                                        <Link to='' ><Button className="btn btn-danger" >delate</Button></Link>
                                   </div>
                              </div>)
                         }
                    </div>
               </div>
          </div>
     );
};

export default MyOrder;