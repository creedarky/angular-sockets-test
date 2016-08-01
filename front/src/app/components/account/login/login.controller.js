
export default class LoginController {

  constructor(Auth, $state) {
    this.Auth = Auth;
    this.user = { email: '', password: ''};
    this.$state = $state
  }

  login() {
    console.log(this.Auth);
    this.Auth.login(this.user).then((response) => {
      console.log(response);
      this.$state.go('home');
    })
  }





}




