import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default class Preview extends Component {
    render() {
        const { navigation } = this.props;
        const userInfo = navigation.getParam('userInfo', 'NO-ID');
        const deckInfo = navigation.getParam('deckData', 'NO-ID');
        const tableInfo = navigation.getParam('tableData', 'NO-ID');
        const selectedDateTime = navigation.getParam('selectedDateTime', 'NO-DATE')
        console.log(userInfo, 'users')
        console.log(deckInfo, 'Deck')
        console.log(tableInfo, 'tables')
        console.log(selectedDateTime, 'selectedDateTime')
        return (
            <ScrollView>
                <Card>
                    <Card.Content>
                        <Title>User</Title>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Name:</Text>
                                <Text style={styles.mblTxt}>{userInfo.name}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Category:</Text>
                                <Text style={styles.mblTxt}>{userInfo.category}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Contact:</Text>
                                <Text style={styles.mblTxt}>{userInfo.contact}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Total Guests:</Text>
                                <Text style={styles.mblTxt}>{userInfo.guests}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Location:</Text>
                                <Text style={styles.mblTxt}>sad</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Time:</Text>
                                <Text style={styles.mblTxt}>{userInfo.selectedDateTime}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Smoking:</Text>
                                <Text style={styles.mblTxt}>{userInfo.smoke}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Other detail:</Text>
                                <Text style={styles.mblTxt}>{userInfo.other}</Text>
                            </View>
                        </View>
                        <Title>Deck</Title>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Name:</Text>
                                <Text style={styles.mblTxt}>{deckInfo.key}</Text>
                            </View>
                        </View>
                        <Title>Table</Title>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Table Type:</Text>
                                <Text style={styles.mblTxt}>{tableInfo.name}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Total seats:</Text>
                                <Text style={styles.mblTxt}>{tableInfo.seats}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Table Free in:</Text>
                                <Text style={styles.mblTxt}>{tableInfo.statusFreeAt}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Table No:</Text>
                                <Text style={styles.mblTxt}>{tableInfo.tableNo}</Text>
                            </View>
                        </View>


                    </Card.Content>
                    <Card.Actions>
                        <Button>Confirmed</Button>
                        <Button>Cancel</Button>
                    </Card.Actions>
                </Card>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 18,
        width: 170,
    },
    mblTxt: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#DCDCDC',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 10,
    },
})