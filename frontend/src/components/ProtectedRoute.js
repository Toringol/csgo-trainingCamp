import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (props.isAuth) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to='/signin' />
          }
        }
      }
    />
  )
}

export default ProtectedRoute;