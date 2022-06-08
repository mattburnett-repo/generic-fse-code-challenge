
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

import AuthApi from '../../features/auth/authApi'
import { setProfile } from '../../features/auth/authFunctions'

export const LoginDisplay = (): JSX.Element => {
    function handleGoogleClick() {
        alert('google')
    }
    function handleGitHubClick() {
        alert('github')
    }

    // update = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //     this.props.login[e.currentTarget.name] = e.currentTarget.value
    // }

    const handleLoginClick = async (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        //handle exceptions like: no email entered, no password entered, here.
        const username = event.currentTarget.username.value
        const password = event.currentTarget.password.value

        try {
            let response = await AuthApi.Login({
                username,
                password,
            });

            console.log('LoginDisplay authToken ', response.data.authToken)
            if (response.data && response.data.authToken === false) {
                //display error coming from server
                // return setError(response.data.msg);
                console.log(response.data.msg)
            }
            return setProfile(response);
        } catch (err) {
            //display error originating from server / other sources
            console.log(err);
            // if (err.response) {
            //     // return setError(err.response.data.msg);
            //     console.log(err.response.data.msg)
            // }
            // return setError("There has been an error.");
        }
    }
    function handleSignUpClick() {
        alert('sign up')
    }

    return (
        <div className="bg-gray-200 my-24 mx-auto w-1/4 border-2 border-black">
            <div className="text-4xl text-center m-4">Generic FSE Code Challenge</div>
            {/* TODO: add flash messaging */}
            <div className="m-5 p-2 bg-gray-100 border-black">
                <form onSubmit={handleLoginClick}>
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

            <div className="m-5 bg-gray-100 border-black">
                <div className="text-center p-2">
                    <div className='p-2'> Or log in with</div>
                    <button type="button" onClick={handleGoogleClick} role="presentation" aria-label="login-with-google"> 
                        <FontAwesomeIcon icon={faGoogle} className="p-4 mx-5 bg-[#DD4B39] text-white hover:bg-[#1DA1F2] active:bg-[#3B5998]"/>
                    </ button>
                    <button type="button" onClick={handleGitHubClick} role="presentation" aria-label="login-with-github"> 
                        <FontAwesomeIcon icon={faGithub} className="p-4 mx-5 bg-[#211F1F] text-white hover:bg-[#9CDAF1] active:bg-[#7DBBE6]"/>
                    </ button>
                </div>
            </div>

            <div className="m-5 bg-gray-100 border-black">
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