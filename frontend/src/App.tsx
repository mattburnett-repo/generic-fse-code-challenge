
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from './context/auth.context'

import { Policies } from './features/policy/policies'

import { ProtectedRoute } from './components/ProtectedRoute'


// NOTE: THIS IMPLEMENTATION DEPENDS ON REACT ROUTER VERSION 5 
//    not possible with version 6
//  https://blog.appseed.us/react-user-authentication-jwt-token/
const App = () => {
  // we get the user from the localStorage because that's where we will save their account on the login process
  let user: any = localStorage.getItem("user"); // FIXME: this should be a TS User object
  user = JSON.parse(user);

  return (
    <BrowserRouter>
      <AuthProvider userData={user}>
        <Switch>
          {/* Routes / ProtectedRoutes go here */}
          <ProtectedRoute path="/" component={Policies} />
        </Switch>           
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App; 
