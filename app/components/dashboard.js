import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Deck from './Dashboard/deck'
import Tables from './Dashboard/tables'
import Icon from 'react-native-vector-icons/AntDesign';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayTables: false,
            tables: []
        };
    }

    getDeckId = (tables) => {

        this.setState({ tables, displayTables: true })
    }
    displayDecks = (value) => {
        this.setState({ displayTables: value })
    }
    render() {
        const { displayTables, tables } = this.state
        return (
            <View style={{ flex: 1 }}>
                <View style={{height:50,backgroundColor:'#1AB21D',display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
                    <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                        <Text>Open Drawer</Text>
                    </TouchableOpacity>
                    <View ><Text>Kolachi</Text></View>
                    <View ><Text>13-jan-2020</Text></View>
                </View>
                {!displayTables && <Deck getTables={this.getDeckId} />}
                {displayTables && <Tables data={tables} displayTables={this.displayDecks} />}
            </View>
        );
    }
}
