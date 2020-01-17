import React, { Component } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'

export default class WelcomeScreen extends Component {

    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={()=>this.props.navigation.navigate('Reservation')}
                        title="on preference"
                        color="green"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={()=>this.props.navigation.navigate('Booked')}
                        title="Reserved"
                        color="green"
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    }
});
