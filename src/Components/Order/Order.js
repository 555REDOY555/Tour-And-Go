import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hook/useAuth';
import './Order.css'

const Order = () => {


     const { id } = useParams();
     const [Order, setOrder] = useState({})





     useEffect(() => {
          fetch(`https://nameless-hamlet-63339.herokuapp.com/servises/${id}`)
               .then(res => res.json())
               .then(data => setOrder(data))

     }, [])
     console.log(id)

     // console.log(Order)


     return (
          <div>
               <h1>{id}</h1>

          </div>
     );
};

export default Order;