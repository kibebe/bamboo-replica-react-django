import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (
    {
        component: Component, 
        auth: {isAuthenticated, isLoading}, 
        ...rest
    }
    ) => (
    <Route
        {...rest}
        render={props => {
            if(isLoading){
                return <h1>Loading</h1>
            }else if(!isAuthenticated){
                return <Redirect to='/login' />
            }else{
                return <Component {...props} />
            }
        }}
    />
)

export default PrivateRoute