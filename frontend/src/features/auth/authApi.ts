
import axios from "./axios";

class AuthApi {
  static Register = (data: any) => {
    return axios.post('/auth/basic/register', data)
  }

  static LoginBasic = (data: any) => { // FIXME: needs type def
    return axios.post(`/auth/basic/login/passport`, data)
  };

  static LoginOauthGoogle = () => {
    return axios.get('/auth/oauth/google')
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