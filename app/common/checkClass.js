class LoginSingleton {
    constructor() {
    }

    getEmail(email, checkerEmail) {
        if (email == checkerEmail) {
            return true
        } else {
            return false
        }
    }
    getPassword(password, checkerPassword) {
        if (password == checkerPassword) {
            return true
        } else {
            return false
        }
    }
    getFinalResult(emailResult, passwordResult) {
        let result;
        if (emailResult && passwordResult) {
            return result = { msg: 'successfully loggedin', value: true }
        } else if (!emailResult && !passwordResult) {
            return result = { msg: 'kindly fill correct email and password', value: false }
        } else if (!emailResult) {
            return result = { msg: 'kindly fill correct email', value: false }
        } else if (!passwordResult) {
            return result = { msg: 'kindly fill correct password', value: false }
        }
    }
}

const LoginInstance = new LoginSingleton();
Object.freeze(LoginInstance);

export default LoginInstance;