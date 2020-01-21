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
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state ={
            restLocations:[
                {id:1,location:'indoor'},
                {id:2,location:'outdoor'},
                {id:3,location:'sea'}
            ]
        }
    }
    
    render() {
        const { navigation } = this.props;
        const userDatas = navigation.getParam('userDatas', 'NO-ID');
        
        return (
            <ScrollView>
                <Card>
                    <Card.Content>
                        <Title>User</Title>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Name:</Text>
                                <Text style={styles.mblTxt}>{userDatas.userData.name}</Text>
                            </View>
                        </View>
                        
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Contact:</Text>
                                <Text style={styles.mblTxt}>{userDatas.userData.contact}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Total Guests:</Text>
                                <Text style={styles.mblTxt}>{userDatas.userData.guests}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Location:</Text>
                               { this.state.restLocations.map(item=> item.id == userDatas.userData.location? <Text style={styles.mblTxt}>{item.location}</Text>:null) }
                               </View>
                        </View>
                        <Title>Deck</Title>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Deck:</Text>
                                <Text style={styles.mblTxt}>{userDatas.deck}</Text>
                            </View>
                        </View>
                        <Title>Table</Title>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Table Type:</Text>
                                <Text style={styles.mblTxt}>{userDatas.tableName}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Total seats:</Text>
                                <Text style={styles.mblTxt}>{userDatas.seats}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Time:</Text>
                                <Text style={styles.mblTxt}>{userDatas.time.from} - {userDatas.time.to}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Table No:</Text>
                                <Text style={styles.mblTxt}>{userDatas.tableNo}</Text>
                            </View>
                        </View>


                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={()=>this.props.navigation.navigate('Reservation',{userDatas})}>Edit</Button>
                      
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