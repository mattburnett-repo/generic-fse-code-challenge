
import  AuthApi  from './authApi'
// import { setUser } from '../../context/auth.context'

export const setProfile = (response) => {
    try {
        console.log('setProfile response', response)
        // let user = { ...response.data.user };
        // console.log('setProfile user pre-token', response.data.user)

        let user = {}
        user.token = response.data.authToken;
        user = JSON.stringify(user);
        console.log('setProfile user ', user)
        // console.log('setProfile user.token ', user.token)
        // //setUser is imported from the useAuth React Context
        setUser(user);
        // //also set the user in local storage
        localStorage.setItem("generic-fse", user);
        // return history.push("/policies");         
    } catch (err) {
        console.log('setProfile error ', err)
    }
}

// flashRef comes from LoginDisplay and links these functions to 
//      LoginDisplay and FlashMessageDisplay
export const handleLoginClick = async (event, {flashRef}) => { 
    event.preventDefault();
    
    const username = event.currentTarget.username.value
    const password = event.currentTarget.password.value

    let message = ""

    try {
        let response = await AuthApi.Login({
            username, password,
        });

        if (!response.data && !response.data.authToken) {
            message = 'Can\'t log in. Probably can\'t get authToken.'
            flashRef.current.setErrorMessage(message)
        }

        message = 'Login successful'
        flashRef.current.setSuccessMessage(message)
        
        return setProfile(response); // lets user in
    } catch (err) {  // send these to flash messaging
        if (err.response.status === 400) {      // bad request. probably a missing field
            message = 'Can\'t log in. Probably missing username or password.'
            flashRef.current.setErrorMessage(message)

        }
        if (err.response.status === 401) {      // unauthorized. probably bad username / password combination
            message = 'Can\'t log in. Probably wrong username or password.'
            flashRef.current.setErrorMessage(message)
        }
    }
}

export function handleGoogleClick() {
    alert('google')
}
export function handleGitHubClick() {
    alert('github')
}
export function handleSignUpClick() {
    alert('sign up')
}