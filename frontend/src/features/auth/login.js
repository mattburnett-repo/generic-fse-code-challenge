
import { LoginDisplay } from '../../components/auth/LoginDisplay'

// import { ResultMessageContext } from "../../context/result.message.context"

export const Login = () => {

    // const { setFlashError, setFlashSuccess } = useContext(ResultMessageContext)

    // let message = 'message'

    return (
        //  pass in functions via value
        // <ResultMessageContext.Provider value={{message}} >
            <LoginDisplay />
        // </ResultMessageContext.Provider>
    )
}