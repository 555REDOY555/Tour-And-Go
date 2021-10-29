import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hook/useAuth';
import './Order.css'

const Order = () => {
     const { register, reset, handleSubmit, formState: { errors } } = useForm();

     const { _id } = useParams();
     const [Order, setOrder] = useState([])
     const { user } = useAuth()



     useEffect(() => {
          fetch(`http://localhost:5000/Servises/${_id}`)
               .then(res => res.json())
               .then(data => setOrder(data))

     }, [])

     console.log(Order)

     const onSubmit = (data) => {


          fetch(`http://localhost:5000/order`, {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(data)

          })
               .then(res => res.json())
               .then(result => {
                    if (result._id) {
                         alert('Order Successfuly')
                         reset()
                    }

               })
          console.log(data)
     }
     return (
          <div>
               <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    <input defaultValue={Order?._id} {...register("service", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />

                    <input type="submit" />
               </form>
          </div>
     );
};

export default Order;