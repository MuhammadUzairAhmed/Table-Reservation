import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import myLogin from './../common/checkClass'
import loginAPI from './../common/loginAPI'

export default class LoginView extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        state = {
            email: '',
            password: '',
            err1: true
        }
    }
    onClickListener = (viewId) => {
        switch (viewId) {
            case 'login':
                loginAPI.getLoginData()
                    .then((res) => { return res.json() })
                    .then(data => this.loggedIn(data))
                break;
            default:
                console.log('sorry')
        }
    }
    loggedIn = (data) => {
        const { email, password } = this.state
        let emailResult = myLogin.getEmail(data.email, email)
        let passwordResult = myLogin.getPassword(data.password, password)
        let result = myLogin.getFinalResult(emailResult, passwordResult)
        if (!result.value) {
            alert(result.msg)
        } else {
            alert(result.msg)
            this.props.navigation.navigate('Dashboard')
        }
    }
    // addStyle=()=>{
    //    return {borderColor:'red',borderWidth:2,borderBottomWidth:2,borderBottomColor:'red'}
    // }
    addsteric = () => {
        return <Text style={{ color: 'red' }}>*</Text>
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.inputContainer]}>
                    <Image style={[styles.inputIcon, { width: 30 }]} source={require('./../assets/spalshScreen.jpg')} />
                    {/* {this.addsteric()} */}
                    <TextInput style={[styles.inputs]}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>


                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={require('./../assets/spalshScreen.jpg')} />
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
                    <Text>Forgot your password?</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
                    <Text>Register</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});