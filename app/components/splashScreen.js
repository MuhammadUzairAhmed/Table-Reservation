import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';


export default class Splash extends React.Component {
    static navigationOptions = {
        header: null

    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 3000)
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={[styles.container]} source={require('./../assets/spalshScreen.jpg')} >
                    <Text style={{ color: 'white', fontSize: 50, alignSelf: 'center' }}>Kolachi</Text>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})