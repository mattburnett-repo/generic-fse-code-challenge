
import AuthApi  from './authApi'

// FIXME: setUser(). 
//    the whole point of Context is to not prop-drill
//      but the only way to get 'setUser' into 'setProfile'
//          is to pass setUser all the way down. This is 
//          because in this file we have only functions,
//          and Context only works with functonal components.
export const setProfile = (response, { setUser }) => {
    try {
        let user = {}

        if(response.data?.authToken) { // basic username / password
            user.token = response.data.authToken;
        }
        if(response.credential) {   // google oauth
            user.token = response.credential
        }
        if(response.code) {         // github oauth
            user.token = response.code
        }
        
        user = JSON.stringify(user);

        //setUser is imported from the useAuth React Context.
        //       but here we have to take it as an arg/prop
        //           because this is a function, not a 
        //           functional component.
        setUser(user); 
        // //also set the user in local storage
        localStorage.setItem("generic-fse", user);
        location.href = '/dashboard'
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
        let response = await AuthApi.LoginBasic({
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

export const handleLogoutClick = async(event, {flashRef}, {setUser}) => {
    try {
        let response = await AuthApi.Logout()

        if(response === 'success') {
            setUser('')
            location.href = '/'

            // let message = 'You are now logged out.'
            // console.log('handleLogoutClick ', message)
            // flashRef.current.setSuccessMessage(message)           
        } else {
            message = 'Can\'t log out in handleLogoutClick().'
            flashRef.current.setErrorMessage(message)
        }
    } catch (err) {
        console.log('Error in handleLogoutClick ', err)
        // let message = 'Can\'t log out.'
        // flashRef.current.setErrorMessage(message + ":  " + err.message)
    }
}

// google oauth is now handled in LoginDisplay
// export const handleGoogleClick = () => {
//     try {
//         // axios doesn't work for OAuth calls
//         //  https://stackoverflow.com/questions/57051175/how-to-use-axios-to-sign-in-with-oauth

//         window.location = process.env.REACT_APP_AUTH_SERVER + "/auth/oauth/google"     
//     } catch (err) {
//         console.log('ERROR: authFunctions.handleGoogleClick ', err)
//     }
// }
// export function handleGitHubClick() {
//     // axios doesn't work for OAuth calls
//         //  https://stackoverflow.com/questions/57051175/how-to-use-axios-to-sign-in-with-oauth
//     window.location = process.env.REACT_APP_AUTH_SERVER + "/auth/oauth/github"
// }


export const handleRegisterClick = async (event, {flashRef}, {setUser}) => {
    event.preventDefault()

    const username = event.currentTarget.username.value
    const password = event.currentTarget.password.value
    const confirmPassword = event.currentTarget.confirmPassword.value

    if(password !== confirmPassword) {
        flashRef.current.setErrorMessage('Passwords don\'t match')
    } else {
        try {
            let response = await AuthApi.Register({username, password})

            if(response.data.error) {
                flashRef.current.setErrorMessage(response.data.error)
            } 
            if (response.data.authToken) {
                return setProfile(response, {setUser}); // lets user in
            }
        } catch (err) {
            flashRef.current.setErrorMessage(err)
        }
    }
}
