
import axios from "./axios";

class AuthApi {

  static Login = (data: any) => { // FIXME: needs type def
    return axios.post(`/auth/basic/login/passport`, data);
  };

  // don't forget to add the register and logout methods
}

export default AuthApi;