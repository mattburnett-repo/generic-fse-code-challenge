
import { Login } from '../features/auth/login'
import { useAuth } from '../context/auth.context'

import { Route } from "react-router-dom"

export const ProtectedRoute = ({...rest }) => {
  let { user } = useAuth();

  if (!user || !user.token || user.token === "") {
    return (
      <Login />
    );
  }

  // let user through if they're logged in
  return <Route {...rest} />;
};