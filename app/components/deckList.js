import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    ScrollView,
    Alert
    , LayoutAnimation, Platform, UIManager, Picker
} from 'react-native'
import { Icon, Button, SearchBar, Divider } from 'react-native-elements'

export default class DeckList extends Component {

    // __getDescriptionStyle = (item) => {
    //     if (item.completed == 1) {
    //         return { textDecorationLine: "line-through", fontStyle: 'italic', color: "#808080" };
    //     }
    // }
    render() {
        return (
            <View style={[styles.card, {borderColor: this.props.borderStyle.split(" ").pop() == 'ago' ? 'green' :
            this.props.borderStyle.split(" ").pop() == 'hours' && this.props.borderStyle[3] <= 3 && this.props.borderStyle[4] == '' && this.props.borderStyle[3] >= 0 ? 'orange' :
            this.props.borderStyle.split(" ").pop() == 'hour' ? 'red' :'blue' 
            }]}>
                <View style={[{ display: 'flex' }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={[styles.description1]}>Deck: {this.props.itemDeck}</Text>
                        <Text style={[styles.description1]}>Table: {this.props.itemTable} </Text>
                    </View>
                </View>
                <Divider style={{ backgroundColor: 'orange', height: 3 }} />
                <View style={{ display: 'flex' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={[styles.description]}>{this.props.keyName} {this.props.itemName}</Text>
                            {this.props.booked == true ? <Text style={[styles.description]}>{this.props.keyReserved} {this.props.itemFrom} - {this.props.itemTo}</Text> : null}
                            <Text style={[styles.description]}>{this.props.keyGuests} {this.props.itemGuests}</Text>
                            <Text style={[styles.description]}>{this.props.itemReservedTime}</Text>
                        </View>
                        {this.props.booked == true || this.props.deck == true ? <View >
                            <View style={{ display: 'flex' }}>
                                <View style={{ justifyContent: 'flex-end', flexDirection: 'column' }}>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Icon
                                        reverse
                                        name='edit'
                                        type='Feather'
                                        color='orange'
                                    />
                                </View>
                            </View>
                        </View> : null}
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    description1: {
        fontSize: 18,
        flex: 1,
        color: "#008080",
        fontWeight: 'bold',
    },
    description: {
        fontSize: 13,
        flex: 1,
        color: "grey",
        fontWeight: 'bold',
    },
    card: {
         
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: '#eeeeee',
        padding: 10,
        borderLeftWidth: 6,

    },
})