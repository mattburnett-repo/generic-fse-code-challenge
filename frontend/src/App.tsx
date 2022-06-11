
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from './context/auth.context'

import { Policies } from './features/policy/policies'

import { ProtectedRoute } from './components/ProtectedRoute'

// NOTE: THIS IMPLEMENTATION DEPENDS ON REACT ROUTER VERSION 5 
//    not possible with version 6
//  https://blog.appseed.us/react-user-authentication-jwt-token/
const App = () => {
  // we get the user from the localStorage because that's where we will save their account on the login process
  // let user: any = localStorage.getItem("user"); // FIXME: this should be a TS User object
  let user: any = localStorage.getItem("generic-fse")
  user = JSON.parse(user);

  console.log('App.tsx user ', user)

  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider userData={user}>
          {/* Routes / ProtectedRoutes go here */}
          <ProtectedRoute path="/" component={Policies} />
        </AuthProvider>
      </Switch>           
    </BrowserRouter>
  );
};

export default App; 
