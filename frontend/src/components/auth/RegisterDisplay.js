
import { useRef } from 'react'
import { Link } from "react-router-dom"

import { FlashMessageDisplay } from '../util/FlashMessageDisplay'
import { handleRegisterClick } from '../../features/auth/authFunctions'

import { useAuth } from '../../context/auth.context'

// export const LoginDisplay = (): JSX.Element => {
export const RegisterDisplay = () => {
    const flashRef = useRef(null)

    let { setUser } = useAuth() // reach into the Context and get state setter. Doesn't work with .tsx / JSX.ELement because initially it's null

    return (
        <div className="bg-gray-200 my-24 mx-auto py-5 w-1/4 border-2 border-black">
            <div className="text-4xl text-center m-4">Generic FSE Code Challenge</div>

            <FlashMessageDisplay ref={flashRef} />

            <div className="m-5 p-2 bg-gray-100 border-2 border-blue-200">
                <form onSubmit={(e) => handleRegisterClick(e, {flashRef}, {setUser})}> 
                    <div className="text-center p-2" role="presentation" aria-label="username">
                        <input type='text' name="username" placeholder='username' required />
                    </div>
                    <div className="text-center p-2" role="presentation" aria-label="password">
                        <input type='text' name="password" placeholder='password' required />
                    </div>
                    <div className="text-center p-2" role="presentation" aria-label="confirm password">
                        <input type='text' name="confirmPassword" placeholder='confirm password' required />
                    </div>
                    <div className="text-center p-2">
                        <button type="submit" name="register-button" className="px-4 p-2 border-2 border-gray-300 bg-gray-100 w-36 hover:bg-gray-300 active:bg-gray-400 rounded">Register</button>
                    </div>                       
                </form>
            </div>

            <div className="m-5 bg-gray-100 border-2 border-blue-200">
                <div className="text-center p-2"role="presentation" aria-label="signup">
                    <div className="py-2">Already have an account?</div>
                    <div className="text-center p-2">
                        <Link to='/' className="px-4 p-2 border-2 border-gray-300 bg-gray-100 w-36 hover:bg-gray-300 active:bg-gray-400 rounded">Log In</Link>                   
                    </div>
                </div>
            </div>
        </div>
    )
}