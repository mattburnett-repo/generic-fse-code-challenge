
// https://blog.appseed.us/react-user-authentication-jwt-token/
import { useContext, createContext, useState } from 'react'

export const AuthContext = createContext(null);

export const AuthProvider = ({ userData, children }) => {
  let [user, setUser] = useState(userData);

  // console.log('AuthProvider user ', user)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);