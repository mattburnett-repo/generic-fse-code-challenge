

import { AuthProvider } from './context/auth.context'
import { Policies } from './features/policy/policies'

// function App() {
//   return <Policies />
// }

// export default App;

//  https://blog.appseed.us/react-user-authentication-jwt-token/
const App = () => {
  // we get the user from the localStorage because that's where we will save their account on the login process
  let user:any = localStorage.getItem("user");
  user = JSON.parse(user);

  return (
    <AuthProvider userData={user}>
      {/* <Routes /> */}
      <Policies />
    </AuthProvider>
  );
};

export default App; 