import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Deck from './Dashboard/deck'
import FilteredDeck from './filteredDeck'
import Tables from './Dashboard/tables'
import Icon from 'react-native-vector-icons/AntDesign';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayTables: false,
            tables: [],
            defaultColor: 'white',
            selectedColor: '#53ADAB',
            defaultbackColor: '#53ADAB',
            selectedBackColor: 'white',
            defaultFont: 'normal',
            selectedFont: 'bold',
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
            this.setState({displayTables: false, defaultColor:'white',defaultbackColor:'#53ADAB',selectedBackColor:'white',selectedColor:'#53ADAB'})
        }else{
            this.setState({displayTables: true,selectedBackColor:'#53ADAB',selectedColor:'white',  defaultColor:'#53ADAB',defaultbackColor:'white'})
        }
    }
    reservationForm=(item)=>{
        this.props.navigation.navigate('Preview',{
            userDatas: item
        })
    }
    render() {
        const { displayTables, tables } = this.state
        const { navigation } = this.props;
        const userInfo = navigation.getParam('userInfo', 'NO-ID');
        console.log(userInfo,'userInfo')
        const { defaultColor, selectedColor, defaultbackColor, selectedBackColor, defaultFont, selectedFont } = this.state
      
        return (
            <View style={{ flex: 1 }}>
                {/* <View style={{height:50,backgroundColor:'#1AB21D',display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
                    <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                        <Text>Open Drawer</Text>
                    </TouchableOpacity>
                    <View ><Text>Kolachi</Text></View>
                    <View ><Text>13-jan-2020</Text></View>
                </View> */}
                 <View style={styles.headerChild2}>
                 <TouchableOpacity  onPress={()=>this.selectedComponent('all')} >
                        <Text style={{ ...styles.subHeaderchildsCommon, ...styles.subHeaderchilds21, color: `${defaultColor}`, backgroundColor: `${defaultbackColor}`, fontWeight: `${defaultFont}` }}>Filtered</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.selectedComponent('filtered')}>
                        <Text style={{ ...styles.subHeaderchildsCommon, ...styles.subHeaderchilds23, color: `${selectedColor}`, backgroundColor: `${selectedBackColor}`, fontWeight: `${selectedFont}` }}>All</Text>
                    </TouchableOpacity>
                    
                </View>
               
                {!displayTables && <FilteredDeck getTables={this.getDeckId} userData={userInfo} getAllInfo={this.totalInfo} formData={this.reservationForm}/>}
                 {displayTables && <Deck getTables={this.getDeckId} userData={userInfo} getAllInfo={this.totalInfo} formData={this.reservationForm} dispView="editable" />}
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    headerChild2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 8,
        marginTop:5
        
    },
    subHeaderchildsCommon: {
        borderWidth: 1,
        borderColor: '#53ADAB',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 6,
        paddingBottom: 6
    },
    subHeaderchilds21: {
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6
    },
    subHeaderchilds22: {},
    subHeaderchilds23: {
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
    },
})