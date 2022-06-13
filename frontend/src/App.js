
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from './context/auth.context'

import { RegisterDisplay } from './components/auth/RegisterDisplay'
import { Policies } from './features/policy/policies'
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
      <Switch>
        <AuthProvider userData={user}>
          <Route path="/register" component={RegisterDisplay} />
          {/* Routes / ProtectedRoutes go here */}
          {/* <Route path='/' component={Login} /> */}
          <ProtectedRoute path="/" component={Dashboard} />
          {/* <ProtectedRoute path="/" component={Policies} /> */}
        </AuthProvider>
      </Switch>           
    </BrowserRouter>
  );
};

export default App; 
