class LoginAPI {
    constructor(loginData) {
        this.loginData = loginData;
    }

    getLoginData() {
        return new Promise((resolve, reject) => {
            resolve(fetch('https://demo9650340.mockable.io/loginUser'))
        })
    }
}

const LoginAPIInstance = new LoginAPI();
Object.freeze(LoginAPIInstance);

export default LoginAPIInstance;