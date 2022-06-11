
// import { useState } from 'react'

import { LoginDisplay } from '../../components/auth/LoginDisplay'

import { AuthContext, AuthProvider, useAuth } from "../../context/auth.context"

export const Login = () => {
    // let [user, setUser] = useState();
   
    // const { setFlashError, setFlashSuccess } = useContext(ResultMessageContext)

    // let message = 'message'

    // let { useState } = useAuth()

    return (
        //  pass in functions via value
        // <AuthProvider.Consumer value={{user, setUser}} >
            <LoginDisplay />
        // </AuthProvider.Consumer>
    )
}