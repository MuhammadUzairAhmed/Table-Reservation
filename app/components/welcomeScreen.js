import React, { Component } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'

export default class WelcomeScreen extends Component {

    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={()=>this.props.navigation.navigate('Reservation')}
                        title="Reservation"
                        color="#689C4E"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={()=>this.props.navigation.navigate('Dashboards')}
                        title="on preferencde"
                        color="#689C4E"
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
