
export const setProfile = (response) => {
    let user = { ...response.data.user };
    user.token = response.data.authToken;
    user = JSON.stringify(user);
    //setUser is imported from the useAuth React Context
    setUser(user);
    //also set the user in local storage
    localStorage.setItem("user", user);
    return history.push("/policies");
  }; 