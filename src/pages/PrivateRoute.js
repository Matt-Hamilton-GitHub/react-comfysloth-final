import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';



const PrivateRoute = ({children, ...rest}) => {
  // children is checkout , 
  // ...rest is not a spread operator but gets the path perameters
  // console.log(children)
  // console.log(rest);

  const {user} = useAuth0()
  return <Route {...rest} render={()=>
  
  {return user ? children :<Redirect to='/' />}} >

  </Route>
};
export default PrivateRoute;
