import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Deck from './Dashboard/deck'
import FilteredDeck from './filteredDeck'
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
        this.props.navigation.navigate(`${tables}`)
        // this.setState({ tables, displayTables: true })
    }
    displayDecks = (value) => {
        this.setState({ displayTables: value })
    }
    totalInfo=(userData1,key,loc,tableData,selectedDateTime,tid)=>{
        console.log(tid,'userData1')
         this.props.navigation.navigate('FilteredDeck',{
            userInfo: userData1,
            deckData:{
               key,
               loc},
               tableData,
               selectedDateTime,
               timeId: tid
        })
    }
    selectedComponent=(key)=>{
        if(key == 'all'){
            this.setState({displayTables: false})
        }else{
            this.setState({displayTables: true})
        }
    }
    reservationForm=(item)=>{
        this.props.navigation.navigate('Reservation',{
            userDatas: item
        })
    }
    render() {
        const { displayTables, tables } = this.state
        const { navigation } = this.props;
        const userInfo = navigation.getParam('userInfo', 'NO-ID');
        console.log(userInfo,'userInfo')
        return (
            <View style={{ flex: 1 }}>
                {/* <View style={{height:50,backgroundColor:'#1AB21D',display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
                    <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                        <Text>Open Drawer</Text>
                    </TouchableOpacity>
                    <View ><Text>Kolachi</Text></View>
                    <View ><Text>13-jan-2020</Text></View>
                </View> */}
                <TouchableOpacity onPress={()=>this.selectedComponent('all')}>
                    <Text>display all</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.selectedComponent('filtered')}>
                    <Text>filtered</Text>
                </TouchableOpacity>
                
                 {!displayTables && <Deck getTables={this.getDeckId} userData={userInfo} getAllInfo={this.totalInfo} formData={this.reservationForm} />}
                {displayTables && <FilteredDeck getTables={this.getDeckId} userData={userInfo} getAllInfo={this.totalInfo} formData={this.reservationForm}/>}
            </View>
        );
    }
}
