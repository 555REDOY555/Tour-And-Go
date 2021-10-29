import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hook/useAuth';

const PrivatRoute = ({ children, ...rest }) => {

     const { user, loading } = useAuth();
     if (loading) return 'loading';
     return (
          <Route
               {...rest}
               render={({ location }) => user.email ? children : <Redirect
                    to={{
                         pathname: "/login",
                         state: { from: location }
                    }}
               ></Redirect>}
          >

          </Route>
     );

};

export default PrivatRoute;