
export default class LoginController {

  constructor(Auth) {
    this.Auth = Auth;
    this.user = { email: '', password: ''};
  }

  login() {
    console.log(this.Auth);
    this.Auth.login(this.user).then((response) => {
      console.log(response);
    })
  }





}




