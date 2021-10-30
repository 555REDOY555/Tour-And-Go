import React from 'react';
import { useForm } from 'react-hook-form';

const AddUser = () => {
     const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data => {

          fetch(`http://localhost:5000/servises`, {
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
     return (
          <div>
               <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input placeholder="name"  {...register("name")} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input type="number" placeholder="price" {...register("price", { required: true })} />
                    <input placeholder="desciption" {...register("description", { required: true })} />
                    <input placeholder="img" {...register("img", { required: true })} />
                    <br />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="ms-5 my-4 btn btn-danger" type="submit" />
               </form>
          </div>
     );
};

export default AddUser;