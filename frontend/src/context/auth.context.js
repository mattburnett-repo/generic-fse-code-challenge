
// https://blog.appseed.us/react-user-authentication-jwt-token/
import { useContext, createContext, useState } from 'react'

const AuthContext = createContext(null);

export const AuthProvider = ({ userData, children }) => {
  let [user, setUser] = useState(userData);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);