
import  AuthApi  from './authApi'

// FIXME: setUser(). 
//    the whole point of Context is to not prop-drill
//      but the only way to get 'setUser' into 'setProfile'
//          is to pass setUser all the way down. This is 
//          because in this file we have only functions,
//          and Context only works with functonal components.
export const setProfile = (response, { setUser }) => {
    try {
        let user = {}
        user.token = response.data.authToken;
        user = JSON.stringify(user);

        //setUser is imported from the useAuth React Context.
        //       but here we have to take it as an arg/prop
        //           because this is a function, not a 
        //           functional component.
        setUser(user); 
        // //also set the user in local storage
        localStorage.setItem("generic-fse", user);
        location.href = '/policies'
    } catch (err) {
        console.log('setProfile error ', err)
    }
}

// flashRef comes from LoginDisplay and links these functions to 
//      LoginDisplay and FlashMessageDisplay
// setUser updates user state in auth context, used in setProfile()
export const handleLoginClick = async (event, {flashRef}, {setUser}) => { 
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
        
        return setProfile(response, {setUser}); // lets user in
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

export function handleLogoutClick() {
    alert('log out')
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