
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
        <div className="auth-container">
            <div className="auth-title">Generic FSE Code Challenge</div>

            <FlashMessageDisplay ref={flashRef} />

            <div className="auth-panel">
                <form onSubmit={(e) => handleRegisterClick(e, {flashRef}, {setUser})}> 
                    <div className="auth-input" role="presentation" aria-label="username">
                        <input type='text' name="username" placeholder='username' required />
                    </div>
                    <div className="auth-input" role="presentation" aria-label="password">
                        <input type='text' name="password" placeholder='password' required />
                    </div>
                    <div className="auth-input" role="presentation" aria-label="confirm password">
                        <input type='text' name="confirmPassword" placeholder='confirm password' required />
                    </div>
                    <div className="auth-input">
                        <button type="submit" name="register-button" className="btn-auth">Register</button>
                    </div>                       
                </form>
            </div>

            <div className="auth-panel">
                <div className="auth-input"role="presentation" aria-label="signup">
                    <div className="py-2">Already have an account?</div>
                    <div className="auth-input">
                        <Link to='/' className="btn-auth">Log In</Link>                   
                    </div>
                </div>
            </div>
        </div>
    )
}