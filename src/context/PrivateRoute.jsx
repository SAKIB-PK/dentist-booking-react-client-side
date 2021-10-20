import React from 'react'
import { Redirect, Route } from 'react-router'
import useFirebaseContext from './useFirebaseContext'

const PrivateRoute = ({children,...rest}) => {
  const {user} = useFirebaseContext()
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user?.displayName ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
          />
        )
      }
    /> 
    )
}

export default PrivateRoute
