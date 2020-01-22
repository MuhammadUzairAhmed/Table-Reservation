import React, { Component } from 'react';
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
} from 'react-native';
import { Icon } from 'react-native-elements'
export default class Users extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            timeSlots:[
                {id:1, time:'00:00 am',to:'1:00 am', booked: true,deck:'salsa' ,table:'atl-1'},
                {id:2, time:'1:00 am',to:'2:00 am', booked: false,deck:'atlantis' ,table:'atl-1'},
                {id:3, time:'2:00 am',to:'3:00 am', booked: false,deck:'burcott' ,table:'atl-1'},
                {id:4, time:'3:00 am',to:'4:00 am', booked: false,deck:'Banthai' ,table:'atl-1'},
                {id:5, time:'4:00 am',to:'5:00 am', booked: false,deck:'burcott' ,table:'atl-1'},
                {id:6, time:'5:00 am',to:'6:00 am', booked: false,deck:'Banthai' ,table:'atl-1'},
                {id:7, time:'6:00 am',to:'7:00 am', booked: false,deck:'burcott' ,table:'atl-1'},
                {id:8, time:'7:00 am',to:'8:00 am', booked: false,deck:'Banthai' ,table:'atl-1'},
                {id:9, time:'8:00 am',to:'9:00 am', booked: false,deck:'salsa' ,table:'atl-1'},
                {id:10, time:'9:00 am',to:'10:00 am', booked: false,deck:'burcott' ,table:'atl-1'},
                {id:11, time:'10:00 am',to:'11:00 am', booked: false,deck:'salsa' ,table:'atl-1'},
                {id:12, time:'11:00 am',to:'12:00 pm', booked: false,deck:'salsa' ,table:'atl-1'},
                {id:13, time:'12:00 pm',to:'1:00 pm', booked: false,deck:'burcott' ,table:'atl-1'},
                {id:14, time:'1:00 pm',to:'2:00 pm', booked: false,deck:'Bistro' ,table:'atl-1'},
                {id:15, time:'2:00 pm',to:'3:00 pm', booked: false,deck:'Bistro' ,table:'atl-1'},
                {id:16, time:'3:00 pm',to:'4:00 pm', booked: false,deck:'burcott' ,table:'atl-1'},
                {id:17, time:'4:00 pm',to:'5:00 pm', booked: false,deck:'salsa' ,table:'atl-1'},
                {id:18, time:'5:00 pm',to:'6:00 pm', booked: false,deck:'Bistro' ,table:'atl-1'},
                {id:19, time:'6:00 pm',to:'7:00 pm', booked: false,deck:'Banthai' ,table:'atl-1'},
                {id:20, time:'7:00 pm',to:'8:00 pm', booked: false,deck:'Banthai' ,table:'atl-1'},
                {id:21, time:'8:00 pm',to:'9:00 pm', booked: false,deck:'burcott' ,table:'atl-1'},
                {id:22, time:'9:00 pm',to:'10:00 pm', booked: false,deck:'salsa' ,table:'atl-1'},
                {id:23, time:'10:00 pm',to:'11:00 pm', booked: true,deck:'Bistro' ,table:'atl-1'},
                {id:24, time:'11:00 pm',to:'12:00 am', booked: false,deck:'burcott' ,table:'atl-1'},
                
            ]
        };
    }

    clickEventListener = (item) => {
        Alert.alert("Item selected: " + item.description)
    }

    __getCompletedIcon = (item) => {
        if (item.completed == 1) {
            return "https://img.icons8.com/flat_round/64/000000/checkmark.png";
        } else {
            return "https://img.icons8.com/flat_round/64/000000/delete-sign.png";
        }
    }

    __getDescriptionStyle = (item) => {
        if (item.completed == 1) {
            return { textDecorationLine: "line-through", fontStyle: 'italic', color: "#808080" };
        }
    }
    componentDidMount(){
        const { navigation } = this.props;
        const timeId = navigation.getParam('timeId', 'NO-ID');
        const deckInfo = navigation.getParam('deckData', 'NO-ID');
        const tableInfo = navigation.getParam('tableData', 'NO-ID');
        console.log(timeId,'timeId1')
        this.setState({timeSlots: this.state.timeSlots.filter((item,index)=>{
            if(timeId == item.id){
                item.deck = deckInfo.key
                item.booked = true
                item.table = tableInfo.name
                return item
            }
            return item
        })
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(this.props != prevProps){
        const { navigation } = this.props;
        const timeId = navigation.getParam('timeId', 'NO-ID');
        const deckInfo = navigation.getParam('deckData', 'NO-ID');
        const tableInfo = navigation.getParam('tableData', 'NO-ID');
        console.log(timeId,'timeId2')
        this.setState({timeSlots: this.state.timeSlots.filter((item,index)=>{
            if(timeId == item.id){
                item.deck = deckInfo.key
                item.booked = true
                item.table = tableInfo.name
                return item
            }
            return item
        })
        })}
        
    }

    render() {
        const { navigation } = this.props;
        const userInfo = navigation.getParam('userInfo', 'NO-ID');
        const deckInfo = navigation.getParam('deckData', 'NO-ID');
        const tableInfo = navigation.getParam('tableData', 'NO-ID');
        const timeId = navigation.getParam('timeId', 'NO-DATE')
         return (
            <View style={styles.container}>
                <View style={styles.tasks}>
                <FlatList
                    
                    columnWrapperStyle={styles.listContainer}
                    data={this.state.timeSlots}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) => {
                        return (
                            item.booked == true ? <TouchableOpacity style={[styles.card, { borderColor: item.color }]} onPress={() => { this.clickEventListener(item) }}>
                                {/* <Image style={styles.image} source={{uri: this.__getCompletedIcon(item)}}/> */}
                                <View style={styles.cardContent}>
                                    <Text style={[styles.description, this.__getDescriptionStyle(item)]}>Deck: {item.deck}</Text>
                                    <Text style={[styles.description, this.__getDescriptionStyle(item)]}>Table  type: {item.table}</Text>
                                    <Text style={[styles.description, this.__getDescriptionStyle(item)]}>status: Reserved</Text>
                                     <Text style={styles.date}>Time: {item.time} - {item.to}</Text>
                                </View>
                            </TouchableOpacity> : null
                        )
                    }} />
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Prefrences')} style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Icon
                        reverse
                        name='ios-add'
                        type='ionicon'
                        color='#C11A2C'
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#eeeeee"
    },
    tasks: {
        flex: 6,
    },
    cardContent: {
        marginLeft: 20,
        marginTop: 10,
    },
    image: {
        width: 25,
        height: 25,
    },

    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "white",
        flexBasis: '46%',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderLeftWidth: 6,
    },

    description: {
        fontSize: 18,
        flex: 1,
        color: "#008080",
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        flex: 1,
        color: "#696969",
        marginTop: 5
    },
});  