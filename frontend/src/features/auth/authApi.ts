
import axios from "./axios";

class AuthApi {
  static Register = (data: any) => {
    return axios.post('/auth/basic/register', data)
  }

  static LoginBasic = (data: any) => { // FIXME: needs type def
    return axios.post(`/auth/basic/login/passport`, data)
  };

  static GetGithubToken = (code: string) => {
    return axios.post("https://github.com/login/oauth/access_token", {
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
      client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      code: code
    })
  }

  static GetUsers = () => {
    return axios.get('/auth/user')
  }

  static Logout = async (data: any) => {
    try {
      localStorage.clear()
      // location.href = '/'

      return 'success'

    } catch(err) {
      return 'error'
    }
  }
}

export default AuthApi;