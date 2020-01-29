import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 2 }}>
                <View style={styles.superHeader}>
                    <View style={styles.headerContent}>
                        <View>
                            <Text>open</Text>
                            {/* <Icon name='bars' size={18} color="white" onPress={() => this.props.navigation.toggleDrawer()} /> */}
                        </View>
                        <View>
                            <Image source={require('./../../assets/kolachiLogo.png')} style={{ width: 80, height: 50 }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>
                                GRO
                                            </Text>
                            {/* <Icon onPress={this.greatJob} name='poweroff' size={15} color="red" /> */}
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,
        width: '100%',
        height: 50
    },
    superHeader: {
        display: 'flex',
        flexDirection: 'column',
        borderBottomWidth: 2,
        borderBottomColor: 'grey'
    },
    name: {
        fontSize: 13,
        fontWeight: '600',
        marginRight: 16
    },

})