import React from 'react'
import { Redirect, Route } from 'react-router'
import useFirebaseContext from './useFirebaseContext'

const PrivateRoute = ({children,...rest}) => {
  const {user,isLoading} = useFirebaseContext()
  if(isLoading){
    return <p>...Loading</p>
  }
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
