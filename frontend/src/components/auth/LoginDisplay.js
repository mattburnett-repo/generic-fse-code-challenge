
import { useRef } from 'react'
import { Link } from "react-router-dom"

import { GoogleLogin } from '@react-oauth/google'
import { useAuth } from '../../context/auth.context'

import LoginGithub from 'react-login-github'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { FlashMessageDisplay } from '../util/FlashMessageDisplay'
import { handleLoginClick, setProfile } from '../../features/auth/authFunctions'

// export const LoginDisplay = (): JSX.Element => {
export const LoginDisplay = () => {
    const flashRef = useRef(null)

    let { setUser } = useAuth() // reach into the Context and get state setter. Doesn't work with .tsx / JSX.ELement because initially it's null

    return (
        <div className="bg-gray-200 my-24 mx-auto py-5 w-1/4 border-2 border-black">
            <div className="text-4xl text-center m-4">Generic FSE Code Challenge</div>

            <FlashMessageDisplay ref={flashRef} />

            <div className="m-5 p-2 bg-gray-100 border-2 border-blue-200">
                <form onSubmit={(e) => handleLoginClick(e, {flashRef}, {setUser})}> 
                    <div className="text-center p-2" role="presentation" aria-label="username">
                        <input type='text' name="username" placeholder='username' required />
                    </div>
                    <div className="text-center p-2" role="presentation" aria-label="password">
                        <input type='text' name="password" placeholder='password' required />
                    </div>
                    <div className="text-center p-2">
                        <button type="submit" name="login-button" className="px-4 p-2 border-2 border-gray-300 bg-gray-100 w-36 hover:bg-gray-300 active:bg-gray-400 rounded">Log In</button>
                    </div>                       
                </form>
            </div>

            <div className="m-5 bg-gray-100 border-2 border-blue-200">
                <div className="text-center p-2">
                    <div className='p-2'> Or log in with</div>
                    <div className="flex flex-col justify-center items-center">
                        <GoogleLogin
                            onSuccess={response => {
                                console.log(response);
                                // generate JWT here?
                                setProfile(response, {setUser}) // this is not a jwt auth token...
                            }}
                            onError={() => {
                                flashRef.current.setErrorMessage('Google OAuth login failed.')
                            }}
                        />             
                        <LoginGithub 
                            clientId={process.env.REACT_APP_GITHUB_CLIENT_ID}
                            // redirectUri={process.env.REACT_APP_GITHUB_REDIRECT_URL}
                            onSuccess={response => {
                                console.log('github oauth success response ', response)
                                // https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#2-users-are-redirected-back-to-your-site-by-github
                                // axios.post with code to get token
                                setProfile(response, {setUser}) // this is not a jwt auth token...
                            }}
                            onFailure={response => {
                                console.log('github oauth fail response ', response)
                                flashRef.current.setErrorMessage('Github OAuth login failed.')
                            }}
                            buttonText="Sign on with Github"
                            className="py-1 px-8  my-2 bg-[#7DBBE6] text-white hover:bg-[#9CDAF1] active:bg-[#7DBBE6]"
                        />

                        {/* <FontAwesomeIcon icon={faGithub} className="p-2 mx-5 bg-[#211F1F] text-white hover:bg-[#9CDAF1] active:bg-[#7DBBE6]" >
                            Sign up with 
                        </FontAwesomeIcon> */}
                    </div>
                   
                    {/* <button type="button" onClick={handleGitHubClick} role="presentation" aria-label="login-with-github" data-bs-toggle="tooltip" title="Log on with GitHub"> 
                        <FontAwesomeIcon icon={faGithub} className="p-2 mx-5 bg-[#211F1F] text-white hover:bg-[#9CDAF1] active:bg-[#7DBBE6]"/>
                    </ button> */}
                </div>
            </div>

            <div className="m-5 bg-gray-100 border-2 border-blue-200">
                <div className="text-center p-2"role="presentation" aria-label="signup">
                    <div className="py-2">Don't have an account?</div>
                    <div className="text-center p-2">
                        {/* <button type="button" onClick={handleSignUpClick} className="bg-blue-200 hover:bg-blue-400 active:bg-blue-600 px-4"> */}
                        <Link to='/register' className="px-4 p-2 border-2 border-gray-300 bg-gray-100 w-36 hover:bg-gray-300 active:bg-gray-400 rounded">Sign Up</Link>
                        {/* </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}