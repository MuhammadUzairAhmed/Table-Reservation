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
    , LayoutAnimation, Platform, UIManager, Picker
} from 'react-native';
import { Icon, Button, SearchBar, Divider } from 'react-native-elements'
import reservationData from './../common/reservation'
import moment from 'moment'
import Icons from 'react-native-vector-icons/AntDesign';
import Header from './Header/header'
import DeckList from './deckList'
var arr = [];
export default class Users extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            language: '',
            sort: false,
            expanded: false,
            tableData: [],
            deckData: [],
            customerData: [],
            timeData: [],
            statusData: [],
            locationData: [],
            reservedData: [],
            search: '',
            workinproperly: false
        };
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentDidMount() {

        //get table data
        reservationData.getTableData()
            .then((res) => { return res.json() })
            .then(data => this.setState({ tableData: data.table }, () => {
                if (this.state.tableData.cust_id != 0) {
                    this.getDeckData()
                }
            }))
    }

    clickEventListener = (item) => {
        Alert.alert("Item selected: " + item.description)
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
                        value.actualTime = customerData[c].reservedTime
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
                value.timeChecking = true
                arr.push(value)
            }

        }
        this.setState({ reservedData: arr, workinproperly: true })
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
    changeHours = (itemValue, itemIndex) => {
        this.setState({ language: itemValue }, () => {
            this.setState({
                reservedData:
                    this.state.reservedData.filter(item => {
                        if (this.state.language != 'all') {
                            let addedTime = item.actualTime
                            let separateDate = moment(addedTime).format('LL')
                            let separatetimings = moment(addedTime).format('LTS')
                            let finalConvertedDateTime = separateDate + ' ' + separatetimings


                            //current time
                            var currentDate = moment().format('LL')
                            var curretnTime = moment().format('LTS')
                            var result = currentDate + ' ' + curretnTime

                            //converted ISO format now 
                            var dateobj = new Date(result)
                            var convDate = dateobj.toISOString();
                            convDate = moment(convDate).subtract(this.state.language, "hours")
                            var currentDate1 = moment(convDate).format('LL')
                            var curretnTime1 = moment(convDate).format('LTS')
                            var result1 = currentDate1 + ' ' + curretnTime1

                            let beforeChecking = moment(finalConvertedDateTime).isBefore(result, "hours")

                            let afterChecking = moment(finalConvertedDateTime).isAfter(result1, "hours")

                            // console.log(result1, 'before')
                            // console.log(finalConvertedDateTime, 'between')
                            // console.log(result, 'after')
                            // console.log(beforeChecking, 'beforeChecking')
                            // console.log(afterChecking, 'afterChecking')

                            if (beforeChecking && afterChecking) {
                                console.log('great')
                                item.timeChecking = true
                                return item
                            } else {
                                console.log('sorry')
                                item.timeChecking = false
                                return item
                            }
                        } else {
                            item.timeChecking = true
                            return item
                        }
                        return item
                    })

            }, () => console.log(this.state.reservedData, 'afterReserved'))

        })
    }
    render() {
        const { search, sort, workinproperly } = this.state;
        let filteredData = this.state.reservedData.filter(items => {
            return (items.name.indexOf(search.toLowerCase()) !== -1) || (items.table.indexOf(search.toLowerCase()) !== -1);
        })
        return (
            <View style={styles.container}>
                <Header />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

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
                        <Text style={{ marginTop: 8, marginRight: 2, color: 'white' }}>Sort by time</Text>
                    </TouchableOpacity>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: 40, width: 100 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.changeHours(itemValue, itemIndex)}>
                        <Picker.Item label="all" value="all" />
                        <Picker.Item label="wihtin 3 hrs" value="3" />
                        <Picker.Item label="within 1 hr" value="1" />
                    </Picker>
                    <TouchableOpacity onPress={this.changeLayout} style={{ paddingTop: 7, display: 'flex', justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'orange', padding: 5, margin: 2, width: 100, borderBottomWidth: 2, borderRadius: 8 }}>
                        <Icons name='search1' size={15} color="white" />
                        <Text style={{ color: 'white' }}>Search</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>

                    <SearchBar
                        inputStyle={{ width: '100%' }}
                        placeholder="seatch by name or table."
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                </View>
                <View style={styles.tasks}>
                    {workinproperly && <FlatList

                        columnWrapperStyle={styles.listContainer}
                        data={filteredData}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            return (
                                item.timeChecking ? <TouchableOpacity style={[styles.card, {
                                    borderColor: item.reservedTime.split(" ").pop() == 'ago' ? 'green' :
                                        item.reservedTime.split(" ").pop() == 'hours' && item.reservedTime[3] <= 3 && item.reservedTime[4] == '' && item.reservedTime[3] >= 0 ? 'orange' :
                                            item.reservedTime.split(" ").pop() == 'hour' ? 'red' : 'blue'
                                }]} onPress={() => { this.clickEventListener(item) }}>
                                    <DeckList
                                        booked={true}
                                        itemDeck={item.deck}
                                        itemTable={item.table}
                                        keyName="customer Name:" itemName={item.name}
                                        keyReserved="Reserved from:" itemFrom={item.from} itemTo={item.to}
                                        keyGuests="Guests:" itemGuests={item.guests}
                                        itemReservedTime={item.reservedTime}
                                    />
                                </TouchableOpacity> : null
                            )
                        }} />}
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
    container: {
        flex: 1,

    },
    tasks: {
        flex: 10
    },

    image: {
        width: 25,
        height: 25,
    },

    card: {
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: '#eeeeee',
        padding: 10,
        borderLeftWidth: 6,

    },

    date: {
        fontSize: 14,
        flex: 1,
        color: "#696969",
        marginTop: 5
    },
});  