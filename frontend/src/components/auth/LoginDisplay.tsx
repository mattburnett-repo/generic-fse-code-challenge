
import { useState, useEffect, useRef } from 'react'
import FlashMessage from 'react-flash-message'

import { FlashMessageDisplay } from '../util/FlashMessageDisplay'
import  AuthApi  from '../../features/auth/authApi'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

import { handleLoginClick, handleGoogleClick, handleGitHubClick, handleSignUpClick } from '../../features/auth/authFunctions'

export const LoginDisplay = (): JSX.Element => {
// export const LoginDisplay = () => {
    const flashRef = useRef(null)

    return (
        <div className="bg-gray-200 my-24 mx-auto py-5 w-1/4 border-2 border-black">
            <div className="text-4xl text-center m-4">Generic FSE Code Challenge</div>

            <FlashMessageDisplay ref={flashRef} />

            <div className="m-5 p-2 bg-gray-100 border-2 border-blue-200">
                <form onSubmit={(e) => handleLoginClick(e, {flashRef})}>
                    <div className="text-center p-2" role="presentation" aria-label="username">
                        <input type='text' name="username" placeholder='username' required />
                    </div>
                    <div className="text-center p-2" role="presentation" aria-label="password">
                        <input type='text' name="password" placeholder='password' required />
                    </div>
                    <div className="text-center p-2">
                        <button type="submit" name="login-button" className="bg-blue-200 hover:bg-blue-400 active:bg-blue-600 px-4">Log In</button>
                    </div>                       
                </form>
            </div>

            <div className="m-5 bg-gray-100 border-2 border-blue-200">
                <div className="text-center p-2">
                    <div className='p-2'> Or log in with</div>
                    <button type="button" onClick={handleGoogleClick} role="presentation" aria-label="login-with-google" data-bs-toggle="tooltip" title="Log on with Google"> 
                        <FontAwesomeIcon icon={faGoogle} className="p-2 mx-5 bg-[#DD4B39] text-white hover:bg-[#1DA1F2] active:bg-[#3B5998] "/>
                    </ button>
                    <button type="button" onClick={handleGitHubClick} role="presentation" aria-label="login-with-github" data-bs-toggle="tooltip" title="Log on with GitHub"> 
                        <FontAwesomeIcon icon={faGithub} className="p-2 mx-5 bg-[#211F1F] text-white hover:bg-[#9CDAF1] active:bg-[#7DBBE6]"/>
                    </ button>
                </div>
            </div>

            <div className="m-5 bg-gray-100 border-2 border-blue-200">
                <div className="text-center p-2"role="presentation" aria-label="signup">
                    <div className="py-2">Don't have an account?</div>
                    <div className="text-center p-2">
                        <button type="button" onClick={handleSignUpClick} className="bg-blue-200 hover:bg-blue-400 active:bg-blue-600 px-4">
                            Sign Up
                        </button>                    
                    </div>
                </div>
            </div>
        </div>
    )
}