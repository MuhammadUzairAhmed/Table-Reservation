import React,{Component} from 'react'

import { View, TouchableOpacity, Text, FlatList, StyleSheet, ScrollView, Modal, TextInput, Picker, Button } from "react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';
import moment from 'moment'
export default class EventCalender extends Component{
     
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            isDateTimePickerVisible: false,
            modalVisible: false,
            expanded: false,
            valuesId: 0,
            prevValueId: 0,
            numColumns: 3,
            name: '',
            contact: '',
            time: '',
            location: '',
            family: '',
            additionalReq: '',
            reservationForm: false,
            refresh: false,
            futureReserve: '',
            data: [
                {
                    id: 1, key: 'Burcott', color: '#557E77',
                    freeTables: '7/8 free',
                    arrowStatus: false,
                    locId: 1
                },
                {
                    id: 2, key: 'Atlantis', color: '#557E77',
                    freeTables: '8/8 free',
                    arrowStatus: false,
                    locId: 1
                },
                {
                    id: 3, key: 'Executive Hall', color: '#D22424',
                    freeTables: '1/8 free',
                    arrowStatus: false,
                    locId: 1
                },
                {
                    id: 4, key: 'Salsa', color: '#D22424',
                    freeTables: '6/8 free',
                    locId: 2,
                    arrowStatus: false
                },
                {
                    id: 5, key: 'Bistro', color: '#D22424',
                    freeTables: '3/8 free',
                    locId: 2,
                    arrowStatus: false
                },
                {
                    id: 6, key: 'Banthai', color: '#D22424',
                    freeTables: '5/8 free',
                    arrowStatus: false,
                    locId: 1
                },
                {
                    id: 7, key: 'Deck 7', color: '#D22424',
                    freeTables: '3/8 free',
                    locId: 2,
                    arrowStatus: false
                },
                {
                    id: 8, key: 'Deck 8', color: '#D22424',
                    freeTables: '3/8 free',
                    locId: 3,
                    arrowStatus: false
                }
            ],
            tableData: [

                { id: 1, decId: 1, color: '#77EE57', type: 'red apple', time: '1-13-20 4:11 pm', name: 'Atl-1', status: 'confirmed', statusFreeAt: '1 hr 30 mins', seats: 14, tableNo: 32, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: 2, decId: 1, color: '#E1E71C', type: 'red apple', time: '12-12-20 8:00 pm', name: 'Btl-1', status: 'pending', statusFreeAt: '1 hr', seats: 8, tableNo: 22, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: 3, decId: 1, color: '#DA6A2A', type: 'apple', time: '1-13-20 4:11 pm', name: 'Ctl-1', status: 'cancelled', statusFreeAt: '30 mins', seats: 4, tableNo: 12, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: 4, decId: 2, color: '#77EE57', type: 'red apple', time: '1-13-20 4:11 pm', name: 'Dtl-1', status: 'confirmed', statusFreeAt: '30 mins', seats: 9, tableNo: 37, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: 5, decId: 2, color: '#77EE57', type: 'red apple', time: '12-12-20 8:00 pm', name: 'Etl-1', status: 'confirmed', statusFreeAt: '2 hrs', seats: 11, tableNo: 72, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: 6, decId: 2, color: '#E1E71C', type: 'apple', time: '1-13-20 4:11 pm', name: 'Ftl-1', status: 'pending', statusFreeAt: '1 hr', seats: 10, tableNo: 78, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: 7, decId: 2, color: '#DA6A2A', type: 'red apple', time: '12-12-20 8:00 pm', name: 'Gtl-1', status: 'cancelled', statusFreeAt: '45 mins', seats: 18, tableNo: 31, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: 8, decId: 3, color: '#77EE57', type: 'apple', time: '12-12-20 8:00 pm', name: 'Htl-1', status: 'confirmed', statusFreeAt: '30 mins', seats: 24, tableNo: 61, detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." }

            ],
            Locations: [
                { id: 1, location: 'indoor' },
                { id: 2, location: 'outdoor' },
                { id: 3, location: 'sea' }
            ],
            seeAll: true,
            selectedDateTime: '',
            key: '',
            lid: 0,
            sub: {},
            userdat: {},
            timeSlots: [
                { id: 1,guests:6,name:'daniyal', time: '00:00', to: '1:00', booked: true, deck: 'salsa', table: 'atl-1', history: 'yesterday' },
                { id: 2,guests:6,name:'akhlaq', time: '1:00', to: '2:00', booked: false, deck: 'atlantis', table: 'atl-1', history: 'today' },
                { id: 3,guests:6,name:'akhlaq', time: '2:00', to: '3:00', booked: false, deck: 'burcott', table: 'atl-1', history: 'today' },
                { id: 4,guests:6,name:'daniyal', time: '3:00', to: '4:00', booked: false, deck: 'Banthai', table: 'atl-1', history: 'today' },
                { id: 5,guests:6,name:'daniyal', time: '4:00', to: '5:00', booked: false, deck: 'burcott', table: 'atl-1', history: 'today' },
                { id: 6,guests:6,name:'daniyal', time: '5:00', to: '6:00', booked: false, deck: 'Banthai', table: 'atl-1', history: 'today' },
                { id: 7,guests:6,name:'daniyal', time: '6:00', to: '7:00', booked: false, deck: 'burcott', table: 'atl-1', history: 'today' },
                { id: 8,guests:6,name:'daniyal', time: '7:00', to: '8:00', booked: false, deck: 'Banthai', table: 'atl-1', history: 'today' },
                { id: 9,guests:6,name:'daniyal', time: '8:00', to: '9:00', booked: false, deck: 'salsa', table: 'atl-1', history: 'today' },
                { id: 10,guests:6,name:'daniyal', time: '9:00', to: '10:00', booked: false, deck: 'burcott', table: 'atl-1', history: 'today' },
                { id: 11,guests:6,name:'daniyal', time: '10:00', to: '11:00', booked: false, deck: 'salsa', table: 'atl-1', history: 'today' },
                { id: 12,guests:6,name:'daniyal', time: '11:00', to: '12:00', booked: false, deck: 'salsa', table: 'atl-1', history: 'today' },
                { id: 13,guests:6,name:'daniyal', time: '12:00', to: '13:00', booked: false, deck: 'burcott', table: 'atl-1', history: 'today' },
                { id: 14, guests:6,name:'daniyal',time: '13:00', to: '14:00', booked: false, deck: 'Bistro', table: 'atl-1', history: 'today' },
                { id: 15,guests:6,name:'daniyal', time: '14:00', to: '15:00', booked: false, deck: 'Bistro', table: 'atl-1', history: 'today' },
                { id: 16,guests:6,name:'daniyal', time: '15:00', to: '16:00', booked: false, deck: 'burcott', table: 'atl-1', history: 'today' },
                { id: 17,guests:6,name:'daniyal', time: '16:00', to: '17:00', booked: false, deck: 'salsa', table: 'atl-1', history: 'today' },
                { id: 18,guests:6,name:'daniyal', time: '17:00', to: '18:00', booked: false, deck: 'Bistro', table: 'atl-1', history: 'today' },
                { id: 19,guests:6,name:'daniyal', time: '18:00', to: '19:00', booked: false, deck: 'Banthai', table: 'atl-1', history: 'today' },
                { id: 20,guests:6,name:'daniyal', time: '19:00', to: '20:00', booked: false, deck: 'Banthai', table: 'atl-1', history: 'today' },
                { id: 21,guests:6,name:'daniyal', time: '20:00', to: '21:00', booked: false, deck: 'burcott', table: 'atl-1', history: 'today' },
                { id: 22,guests:6,name:'daniyal', time: '21:00', to: '22:00', booked: false, deck: 'salsa', table: 'atl-1', history: 'today' },
                { id: 23,guests:6,name:'akhlaq', time: '22:00', to: '23:00', booked: true, deck: 'Bistro', table: 'atl-1', history: 'yesterday' },
                { id: 24,guests:6,name:'daniyal', time: '23:00', to: '00:00', booked: false, deck: 'burcott', table: 'atl-1', history: 'today' },

            ],
            from: '',
            to: '',
            save: '',
            currentDate:''
        }
    }
    componentDidMount(){
        this.setState({currentDate:moment().format('LL')})
        
        //current date
        var abcd = moment().format('LL')
        //current time
        var gdjf = moment().format('LTS')
        var res = abcd+' '+ gdjf
        var dateobj = new Date(res)
        //converted ISO format now use moment to performa all operation
        var B = dateobj.toISOString(); 
        console.log(B,'result')
    }
    selectEvent = (id) => {
        if (id.history == 'today') {
            this.setState({
                timeSlots: this.state.timeSlots.filter(item => {
                    if (item.id == id.id) {
                        item.booked = !item.booked
                        return item
                    }
                    return item
                })
            })
        }
    }
    savedData = () => {
        const { userData } = this.props
        let getData = this.state.timeSlots.filter(item=> item.history == 'today'&& item.booked == true )
        var getlastIndexValue;
        //find lastindexof time
        for(let i= this.state.timeSlots.length-1 ; i>=0 ;i--){
            if(this.state.timeSlots[i].history == 'today' && this.state.timeSlots[i].booked == true){
                getlastIndexValue = this.state.timeSlots[i].time;
                break;
            }
        }
        //find firstindex value for time
        const { navigation } = this.props;
        const user = navigation.getParam('user', 'NO-ID');
        const deck = navigation.getParam('deck', 'NO-ID');
        const table = navigation.getParam('table', 'NO-ID');
        const seats = navigation.getParam('seats', 'NO-ID');
        const tableNo = navigation.getParam('tableNo', 'NO-ID');
        const timeSlots = navigation.getParam('timeSlots', 'NO-ID');
        const guest = navigation.getParam('guest', 'NO-ID');
        const name = navigation.getParam('name', 'NO-ID');
        let getFirstTime = this.state.timeSlots.find(item=> item.history == 'today'&& item.booked == true )
        this.setState({to:getData.length >1 ?getlastIndexValue:getFirstTime.to,from:getFirstTime.time},()=>{
            console.log(this.state.from,'fromss')
            let res = this.state.currentDate+' '+this.state.from
            let final = new Date(res)
            var reserved = {
                deck: deck,
                tableName: table,
                seats: seats,
                tableNo: tableNo,
                time:{from: this.state.from,to:this.state.to},
                reservedTime: final.toISOString(),
                userData : user
            }
            this.setState({ save: reserved }, () => {
                // this.setModalVisible(false, 'saved')
                alert('Table Reserved Succcessfully')
                console.log(this.state.save,'timings')
               
            })    
        })
    }
    gotoFormPage = (item) => {
        console.log(this.state.save, 'gotopage')
       if(this.state.save != ''){
             this.props.navigation.navigate('Preview',{
                userDatas: this.state.save
            })
        }
    }
render(){
    const { navigation } = this.props;
    const user = navigation.getParam('user', 'NO-ID');
    const deck = navigation.getParam('deck', 'NO-ID');
    const table = navigation.getParam('table', 'NO-ID');
    const seats = navigation.getParam('seats', 'NO-ID');
    const tableNo = navigation.getParam('tableNo', 'NO-ID');
    const timeSlots = navigation.getParam('timeSlots', 'NO-ID');
    const guest = navigation.getParam('guest', 'NO-ID');
    const name = navigation.getParam('name', 'NO-ID');
    const viewData = navigation.getParam('viewData', 'NO-ID');
   
    return(
        <View style={{flex:1}} >
        
            <View style={{flex:4}}>
                <ScrollView >
                    <Separator bordered style={{ marginBottom: 20, width: '100%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 23 }}>{this.state.currentDate}</Text>
                    </Separator>
                    <Text style={{ fontSize: 20 }}>Deck: {deck}</Text>
                    <Text style={{ fontSize: 20 }}>Table: {table}</Text>
                    <Text style={{ fontSize: 20 }}>Seats: {seats}</Text>
                    <Text style={{ fontSize: 20 }}>Table No: {tableNo}</Text>
                    <View >
                        {this.state.timeSlots.map(item => {
                            return <View style={{ display: 'flex' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ marginRight: 2 }}>
                                        <Text >{item.time}</Text>
                                    </View>
                                    <View style={{ marginLeft: 2, marginTop: 8, backgroundColor: 'black', width: '79%', height: 2 }} />

                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                {viewData == true ?null: <Button
                                        title="Reserved"
                                        style={{ alignItems: 'center', borderRadius: 10 }}
                                        onPress={() => this.selectEvent(item)}
                                    />}
                                    <TouchableOpacity onPress={() => item.booked == true && item.history == 'today' ? this.gotoFormPage(item) : null} style={{ backgroundColor: item.booked == true && item.history == 'today' ? '#B6BBC2' : item.booked == true && item.history == 'yesterday' ? '#6A7280' : 'transparent', width: '79%', height: 50 }} >{item.booked == true && item.history == 'today' ?
                                    <View style={{display:'flex'}}>
                                    <Text style={{fontSize:15}}>guest:{guest} & name:{name}</Text>
                                    {/* <Text>{this.state.from} - {this.state.to}</Text> */}
                                    </View> :item.booked == true && item.history == 'yesterday' ?<Text>guest:{item.guests} & name:{item.name}</Text>:<Text></Text>}</TouchableOpacity>
                                </View>
                            </View>
                        })}
                    </View>
                </ScrollView>
                <View style={styles.popupButtons}>
                {viewData == true ?null:<TouchableOpacity onPress={this.savedData} style={[styles.btnClose, { backgroundColor: '#ACC1AD', marginLeft: 2 }]}>
                    <Text style={styles.txtClose}>Save</Text>
                </TouchableOpacity>}
                
            </View>
            </View>
          
        
    </View>  
    )
}
}




const styles = StyleSheet.create({
    position: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: "#696969"
    },
    about: {
        marginHorizontal: 10
    },
    /************ modals ************/
    popup: {
        backgroundColor: 'white',
        marginTop: 80,
        marginHorizontal: 20,
        borderRadius: 7,
    },
    popupOverlay: {
        backgroundColor: "#00000057",
        flex: 1,
        marginTop: 0
    },
    popupContent: {
        //alignItems: 'center',
        margin: 5,
        height: 400,
    },
    popupHeader: {
        marginBottom: 45
    },
    popupButtons: {
        marginTop: 15,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: "#eee",
        justifyContent: 'center'
    },
    popupButton: {
        flex: 1,
        marginVertical: 16
    },
    btnClose: {
        height: 'auto',
        padding: 10,
        width: 100,
        borderRadius: 10,
        marginBottom: 5
    },
    modalInfo: {
        justifyContent: 'space-between',
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtClose: {
        textAlign: 'center'
    },
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
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    msgTxt: {
        fontWeight: '400',
        color: '#008B8B',
        fontSize: 12,
        marginLeft: 15,
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