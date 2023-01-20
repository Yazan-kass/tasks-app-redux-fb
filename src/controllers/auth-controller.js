import axios from "axios";

class AuthController {
  async login(email, password) {
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
        AIzaSyDh0CBL6vzcmT8laG0_fCyLFbdxNcreq78`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
      console.log(response.data);
      return {
        status: true,
        message: "Logged in successfully",
        token: response.data.idToken,
      };
    } catch (error) {
      console.log(error.response);
      return { status: false, message: error.response.data.error.message };
    }
  }

  async register(email, password) {
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
        AIzaSyDh0CBL6vzcmT8laG0_fCyLFbdxNcreq78`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
      console.log(response.data);
      return {
        status: true,
        message: "Registered successfully",
        token: response.data.idToken,
      };
    } catch (error) {
      console.log(error.response);
      return { status: false, message: "Registration failed, try again" };
    }
  }
}
export default AuthController;
