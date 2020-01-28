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
    , LayoutAnimation, Platform, UIManager,Picker
} from 'react-native';
import { Icon, Button, SearchBar, Divider } from 'react-native-elements'
import reservationData from './../common/reservation'
import moment from 'moment'
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import Icons from 'react-native-vector-icons/AntDesign';
var arr = [];
export default class Users extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            language:'',
            sort: false,
            expanded: false,
            tableData: [],
            deckData: [],
            customerData: [],
            timeData: [],
            statusData: [],
            locationData: [],
            workinData: false,
            reservedData: [],
            search: '',
            timeSlots: [
                { id: 1, time: '00:00 am', to: '1:00 am', booked: true, deck: 'salsa', table: 'atl-1' },
                { id: 2, time: '1:00 am', to: '2:00 am', booked: false, deck: 'atlantis', table: 'atl-1' },
                { id: 3, time: '2:00 am', to: '3:00 am', booked: false, deck: 'burcott', table: 'atl-1' },
                { id: 4, time: '3:00 am', to: '4:00 am', booked: false, deck: 'Banthai', table: 'atl-1' },
                { id: 5, time: '4:00 am', to: '5:00 am', booked: false, deck: 'burcott', table: 'atl-1' },
                { id: 6, time: '5:00 am', to: '6:00 am', booked: false, deck: 'Banthai', table: 'atl-1' },
                { id: 7, time: '6:00 am', to: '7:00 am', booked: false, deck: 'burcott', table: 'atl-1' },
                { id: 8, time: '7:00 am', to: '8:00 am', booked: false, deck: 'Banthai', table: 'atl-1' },
                { id: 9, time: '8:00 am', to: '9:00 am', booked: false, deck: 'salsa', table: 'atl-1' },
                { id: 10, time: '9:00 am', to: '10:00 am', booked: false, deck: 'burcott', table: 'atl-1' },
                { id: 11, time: '10:00 am', to: '11:00 am', booked: false, deck: 'salsa', table: 'atl-1' },
                { id: 12, time: '11:00 am', to: '12:00 pm', booked: false, deck: 'salsa', table: 'atl-1' },
                { id: 13, time: '12:00 pm', to: '1:00 pm', booked: false, deck: 'burcott', table: 'atl-1' },
                { id: 14, time: '1:00 pm', to: '2:00 pm', booked: false, deck: 'Bistro', table: 'atl-1' },
                { id: 15, time: '2:00 pm', to: '3:00 pm', booked: false, deck: 'Bistro', table: 'atl-1' },
                { id: 16, time: '3:00 pm', to: '4:00 pm', booked: false, deck: 'burcott', table: 'atl-1' },
                { id: 17, time: '4:00 pm', to: '5:00 pm', booked: false, deck: 'salsa', table: 'atl-1' },
                { id: 18, time: '5:00 pm', to: '6:00 pm', booked: false, deck: 'Bistro', table: 'atl-1' },
                { id: 19, time: '6:00 pm', to: '7:00 pm', booked: false, deck: 'Banthai', table: 'atl-1' },
                { id: 20, time: '7:00 pm', to: '8:00 pm', booked: false, deck: 'Banthai', table: 'atl-1' },
                { id: 21, time: '8:00 pm', to: '9:00 pm', booked: false, deck: 'burcott', table: 'atl-1' },
                { id: 22, time: '9:00 pm', to: '10:00 pm', booked: false, deck: 'salsa', table: 'atl-1' },
                { id: 23, time: '10:00 pm', to: '11:00 pm', booked: true, deck: 'Bistro', table: 'atl-1' },
                { id: 24, time: '11:00 pm', to: '12:00 am', booked: false, deck: 'burcott', table: 'atl-1' },

            ]
        };
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
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
    componentDidMount() {

        var abcd = moment().format('LL')
        //current time
        var gdjf = moment().format('LTS')
        var res = abcd+' '+ gdjf
        var dateobj = new Date(res)
        //converted ISO format now use moment to performa all operation
        var B = dateobj.toISOString();
        console.log(res)
        console.log(moment(res).isBefore("January 27, 2020 16:35","hours"),'chekcAnswers') 

        //get table data
        reservationData.getTableData()
            .then((res) => { return res.json() })
            .then(data => this.setState({ tableData: data.table }, () => {
                if (this.state.tableData.cust_id != 0) {
                    this.getDeckData()
                }
            }))


        const { navigation } = this.props;
        const timeId = navigation.getParam('timeId', 'NO-ID');
        const deckInfo = navigation.getParam('deckData', 'NO-ID');
        const tableInfo = navigation.getParam('tableData', 'NO-ID');
        console.log(timeId, 'timeId1')
        this.setState({
            timeSlots: this.state.timeSlots.filter((item, index) => {
                if (timeId == item.id) {
                    item.deck = deckInfo.key
                    item.booked = true
                    item.table = tableInfo.name
                    return item
                }
                return item
            })
        })
    }

    getDeckData = () => {

        //get Deck data
        reservationData.getDecks()
            .then((res) => { return res.json() })
            .then(data => {
                this.setState({ deckData: data.deck })
                this.getLocationData()
            })
    }
    getLocationData = () => {
        //get location data
        reservationData.getLocation()
            .then((res) => { return res.json() })
            .then(data => {
                this.setState({ locationData: data.location })
                this.getTimeSlotsData()
            })
    }

    getTimeSlotsData = () => {
        //get timeSlots
        reservationData.getTimeSlots()
            .then((res) => { return res.json() })
            .then(data => {
                this.setState({ timeData: data.time })
                this.getStatusData()
            })
    }
    getStatusData = () => {
        //get status
        reservationData.getStatus()
            .then((res) => { return res.json() })
            .then(data => {
                this.setState({ statusData: data.status })
                this.getCustomerData()
            })
    }
    getCustomerData = () => {
        //get custoer data
        reservationData.getCustomers()
            .then((res) => { return res.json() })
            .then(data => this.setState({ customerData: data.customer }, () => this.performOperation()))

    }


    performOperation = () => {
        const { tableData, locationData, customerData, timeData, statusData, deckData } = this.state

        for (var i = 0; i < tableData.length; i++) {
            var value;
            if (tableData[i].cust_id != 0) {
                value = { id: tableData[i].id }
                for (var d = 0; d < deckData.length; d++) {
                    if (deckData[d].id == tableData[i].deck_id) {
                        value.deck = deckData[d].name
                        for (var l = 0; l < locationData.length - 1; l++) {
                            console.log(locationData, 'locationData')
                            if (locationData[l].id == deckData[d].loc_id) {
                                value.location = locationData[l].name
                            }
                        }
                    }
                }

                for (var s = 0; s < statusData.length; s++) {
                    if (statusData[s].id == tableData[i].status) {
                        value.status = statusData[s].status
                    }
                }

                for (var c = 0; c < customerData.length; c++) {
                    if (customerData[c].id == tableData[i].cust_id) {
                        value.name = customerData[c].name
                        value.guests = customerData[c].guests
                        value.reservedTime = moment(customerData[c].reservedTime).endOf("hours").fromNow()
                    }
                }

                for (var t = 0; t < timeData.length; t++) {
                    if (timeData[t].id == tableData[i].time_id[0]) {
                        value.from = timeData[t].time
                    }
                }

                for (var f = 0; f < timeData.length; f++) {
                    if (timeData[f].id == tableData[i].time_id[1]) {
                        value.to = timeData[f].time
                    }
                }
                value.table = tableData[i].name
                arr.push(value)
            }

        }
        this.setState({ reservedData: arr })
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState != this.state) {

        }
        if (this.props != prevProps) {
            const { navigation } = this.props;
            const timeId = navigation.getParam('timeId', 'NO-ID');
            const deckInfo = navigation.getParam('deckData', 'NO-ID');
            const tableInfo = navigation.getParam('tableData', 'NO-ID');
            console.log(timeId, 'timeId2')
            this.setState({
                timeSlots: this.state.timeSlots.filter((item, index) => {
                    if (timeId == item.id) {
                        item.deck = deckInfo.key
                        item.booked = true
                        item.table = tableInfo.name
                        return item
                    }
                    return item
                })
            })
        }

    }


    sortedList = () => {
        const { sort } = this.state
        if (!sort) {
            let arr1 = this.state.reservedData.sort((a, b) => (a.to > b.to) ? 1 : -1)
            this.setState({ reservedData: arr1, sort: true })
        } else {
            let arr1 = this.state.reservedData.sort((a, b) => (a.to < b.to) ? 1 : -1)
            this.setState({ reservedData: arr1, sort: false })
        }

    }
    updateSearch = search => {
        this.setState({ search });
    };
    changeLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded });
    }
    changeHours =()=>{
        this.setState({ language: itemValue },()=>{
        

        //converted ISO format now use moment to performa all operation
        // var B = dateobj.toISOString();

            // for(var i=o;i<this.state.reservedData.length;i++){
            //   let xyz = moment(this.state.reservedData[i].reservedTime).add(this.state.language,"hours") 
              
            //   console.log(moment("January 27, 2020 15:35").isBefore("January 27, 2020 16:35","hours"),'chekcAnswers') 

            // }
        })
     }
    render() {
        const { search, sort } = this.state;
        const { navigation } = this.props;
        const userInfo = navigation.getParam('userInfo', 'NO-ID');
        const deckInfo = navigation.getParam('deckData', 'NO-ID');
        const tableInfo = navigation.getParam('tableData', 'NO-ID');
        const timeId = navigation.getParam('timeId', 'NO-DATE')
        let filteredData = this.state.reservedData.filter(items => {
            return (items.name.indexOf(search.toLowerCase()) !== -1) || (items.table.indexOf(search.toLowerCase()) !== -1);
        })
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: 'white', flex: 2 }}>
                    <View style={{ display: 'flex', flexDirection: 'column', borderBottomWidth: 2, borderBottomColor: 'grey' }}>
                        <View style={styles.headerContent}>
                            <View>
                                <Text>dsfdsf</Text>
                                {/* <Icon name='bars' size={18} color="white" onPress={() => this.props.navigation.toggleDrawer()} /> */}
                            </View>
                            <View>
                                <Image source={require('./../assets/kolachiLogo.png')} style={{ width: 80, height: 50 }} />
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
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <TouchableOpacity style={{ margin: 2, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'orange', paddingRight: 6, borderBottomWidth: 2, borderRadius: 8 }} onPress={this.sortedList}>
                        {sort ? <Icon
                            reverse
                            name='ios-arrow-down'
                            type='ionicon'
                            color='orange'
                            size={10}
                        /> :
                            <Icon
                                reverse
                                name='ios-arrow-up'
                                type='ionicon'
                                color='orange'
                                size={10}
                            />}
                        <Text style={{ marginTop: 8 }}>Sort by time</Text>
                    </TouchableOpacity>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.changeHours(itemValue, itemIndex)}>
                        <Picker.Item label="all" value="all" />
                        <Picker.Item label="wihtin 3 hrs" value="3" />
                        <Picker.Item label="within 1 hr" value="1" />

                    </Picker>
                    <TouchableOpacity onPress={this.changeLayout} style={{ paddingTop: 7, display: 'flex', justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'orange', padding: 5, margin: 2, width: 100, borderBottomWidth: 2, borderRadius: 8 }}>
                        <Icons name='search1' size={15} color="white" />
                        <Text>Search</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>

                    <SearchBar
                        inputStyle={{ width: '100%' }}
                        placeholder="Type Here..."
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                </View>
                <View style={styles.tasks}>
                    <FlatList

                        columnWrapperStyle={styles.listContainer}
                        data={filteredData}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={[styles.card, { borderColor: 'red' }]} onPress={() => { this.clickEventListener(item) }}>
                                    {/* <Image style={styles.image} source={{uri: this.__getCompletedIcon(item)}}/> */}
                                    <View style={styles.cardContent}>
                                        <View style={{ display: 'flex' }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                                <Text style={[styles.description1]}>Deck: {item.deck}</Text>
                                                <Text style={[styles.description1]}>Table: {item.table} </Text>
                                            </View>
                                        </View>
                                        <Divider style={{ backgroundColor: 'orange', height: 3 }} />
                                        <View style={{ display: 'flex' }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View>
                                                    <Text style={[styles.description, this.__getDescriptionStyle(item)]}>customer Name: {item.name}</Text>
                                                    <Text style={[styles.description, this.__getDescriptionStyle(item)]}>Reserved from: {item.from} - {item.to}</Text>
                                                    <Text style={[styles.description, this.__getDescriptionStyle(item)]}>Guests: {item.guests}</Text>
                                                    <Text style={[styles.description, this.__getDescriptionStyle(item)]}>{item.reservedTime}</Text>
                                                </View><View >
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
                                                    </View></View>
                                            </View>
                                        </View>

                                        {/* <Text style={styles.date}>Time: </Text> */}
                                    </View>
                                </TouchableOpacity>
                            )
                        }} />
                </View>


                <TouchableOpacity onPress={() => this.props.navigation.navigate('Prefrence')} style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end' }}>
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
    headerContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

        alignItems: 'center',
        marginTop: 0,
        width: '100%',
        // backgroundColor: 'red',
        height: 50
        // opacity: 0.7,
        // borderBottomWidth: 2,
        // borderBottomColor: 'grey'
    },
    name: {
        fontSize: 13,
        fontWeight: '600',
        marginRight: 16
    },
    container: {
        flex: 1,

    },
    tasks: {
        flex: 10
    },
    cardContent: {
        // marginLeft: 20,
        // display:'flex',


    },
    image: {
        width: 25,
        height: 25,
    },

    card: {
        // shadowColor: '#00000021',
        // shadowOffset: {
        //     width: 0,
        //     height: 6,
        // },
        // shadowOpacity: 0.37,
        // shadowRadius: 7.49,
        // elevation: 12,

        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: '#eeeeee',
        // flexBasis: '46%',
        padding: 10,
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        borderLeftWidth: 6,

    },
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
    date: {
        fontSize: 14,
        flex: 1,
        color: "#696969",
        marginTop: 5
    },
});  