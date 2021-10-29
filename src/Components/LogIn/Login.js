import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import './Login.css'

const Login = () => {
     const { signInUsingGoogle } = useAuth();
     const location = useLocation();
     const history = useHistory();
     const redirect_uri = location.state?.from || '/servise';


     const handleGoogleLogin = () => {
          signInUsingGoogle()
               .then(result => {
                    history.push(redirect_uri);
               })
     }
     return (
          <div className="container my-5">
               <form  >
                    <div class="mb-3">
                         <label for="exampleInputEmail1" class="form-label">Email address</label>
                         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                         <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                         <label for="exampleInputPassword1" class="form-label">Password</label>
                         <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                         <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                         <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
               </form>
               <div>-------or----------</div>
               <button
                    className=" btn btn-warning text-center"
                    onClick={handleGoogleLogin}
               >Google Sign In</button>
          </div>

     );
};

export default Login;