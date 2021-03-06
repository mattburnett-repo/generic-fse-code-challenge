
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from './context/auth.context'

import { GoogleOAuthProvider } from '@react-oauth/google'

import { RegisterDisplay } from './components/auth/RegisterDisplay'

import { Dashboard } from "./features/dashboard/dashboard";

import { ProtectedRoute } from './components/ProtectedRoute'

// NOTE: THIS IMPLEMENTATION DEPENDS ON REACT ROUTER VERSION 5 
//    not possible with version 6
//  https://blog.appseed.us/react-user-authentication-jwt-token/
const App = () => {
  // we get the user from the localStorage because that's where we will save their account on the login process
  // let user: any = localStorage.getItem("user"); // FIXME: this should be a TS User object
  let user = localStorage.getItem("generic-fse")
  user = JSON.parse(user);

  return (
    <BrowserRouter>
      <AuthProvider userData={user}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
          <Switch>
            <Route path="/register" component={RegisterDisplay} />
            <ProtectedRoute path="/" component={Dashboard} />              
          </Switch>
        </GoogleOAuthProvider>
      </AuthProvider>          
    </BrowserRouter>
  )
}

export default App; 
