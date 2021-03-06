import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
// import { useUserContext } from '../context/user_context'

// rest operator -- rest operator collects rest of the parameters into
// a function body
const PrivateRoute = ({ children, ...rest }) => {
	const { user } = useAuth0()
	return (
		<Route
			{...rest}
			render={() => {
				return user ? children : <Redirect to='/'></Redirect>
			}}
		></Route>
	)
}
export default PrivateRoute
