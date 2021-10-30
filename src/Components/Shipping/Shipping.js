import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';

const Shipping = () => {
     const { id } = useParams();
     const [booking, setBooking] = useState([])
     const { user } = useAuth()

     const { register, reset, handleSubmit, formState: { errors } } = useForm();



     useEffect(() => {

          fetch(`http://localhost:5000/servises/${id}`)
               .then(res => res.json())
               .then(data => setBooking(data))

     }, [])

     const onSubmit = data => {

          fetch(`http://localhost:5000/order`, {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(data)

          })
               .then(res => res.json())
               .then(result => {
                    if (result.insertedId) {
                         alert('Added Successfuly')
                         reset()
                    }
               })

          console.log(data)
     };

     // const Iteam = booking.filter(td => td.id === id)
     // console.log(Iteam)

     console.log(booking)
     return (
          <div>

               <div className="card    ">

                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                         <input defaultValue={user.displayName} {...register("name")} />

                         <input defaultValue={user.email} {...register("email", { required: true })} />
                         <input defaultValue={id} {...register("service",)} />
                         {errors.email && <span className="error">This field is required</span>}
                         <input placeholder="Address" defaultValue="" {...register("address")} />
                         <input placeholder="City" defaultValue="" {...register("city")} />
                         <input placeholder="phone number" defaultValue="" {...register("phone")} />

                         <input type="submit" />
                    </form>
               </div>

          </div>
     );
};

export default Shipping;