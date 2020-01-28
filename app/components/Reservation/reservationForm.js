import React, { Component } from 'react'
import DateTimePicker from "react-native-modal-datetime-picker";
import { View, Text, TextInput, Picker, Button, Modal,StyleSheet, ScrollView, Image,TouchableOpacity
    , LayoutAnimation, Platform, UIManager } from 'react-native';
import moment from "moment";
import Icons from 'react-native-vector-icons/AntDesign';
import { Overlay } from 'react-native-elements';

export default class ReservationFrome extends Component {
constructor(props){
    super(props);
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
    state = {
        modalVisible:false,
        expanded: false,
        expanded1:false,
        expanded2:false,
        name: '',
        contact: '',
        altContact: '',
        guests: '',
        category: '',
        location: '',
        smoke: '',
        isDateTimePickerVisible: false,
        isTimePickerVisible: false,
        other: '',
        selectedDateTime: '',
        restLocations: [
            { id: 1, location: 'indoor' },
            { id: 2, location: 'outdoor' },
            { id: 3, location: 'sea' }
        ]
    };

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };
    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        // var xyz = moment(date).endOf("hours").fromNow()
        var xyz = moment(date).format('lll')
        this.setState({ selectedDateTime: xyz }, () => {
            console.log(this.state.selectedDateTime)
        })
        this.hideDateTimePicker();
    };

    componentDidMount() {
        var fg = moment('2020-01-26T20:00:00.000Z').endOf("hours").fromNow();

        console.log(fg, 'newdate')
    }
    componentDidUpdate(prevProps, prevStates) {
        if (prevProps != this.props) {
            const { navigation } = this.props;
            const userDatas = navigation.getParam('userDatas', 'NO-ID');
            this.setState({
                name: userDatas.userData.name,
                contact: userDatas.userData.contact,
                altContact: userDatas.userData.altContact,
                guests: userDatas.userData.guests,
                category: userDatas.userData.category,
                location: userDatas.userData.location,
                smoke: userDatas.userData.smoke,
                other: userDatas.userData.other,
                selectedDateTime: userDatas.userData.selectedDateTime
            })
        }
    }
    changeLayout = (key) => {
        if(key == 'PI'){
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded });}
        if(key == 'DI'){
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({ expanded1: !this.state.expanded1 });
        }
        if(key == 'OI'){
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({ expanded2: !this.state.expanded2 });
        }
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    render() {
        const { name, contact, altContact, guests, category, location, smoke, other, isDateTimePickerVisible, selectedDateTime } = this.state
        return (
            <View style={{ flex: 1 }}>
                  <Modal
                    animationType={'fade'}
                    transparent={true}
                    onRequestClose={() => this.setModalVisible(false)}
                    visible={this.state.modalVisible}>

                    <View style={styles.popupOverlay}>
                        <View style={styles.popup}>
                        <View style={styles.popupContent}>
                            <ScrollView contentContainerStyle={styles.modalInfo}>
                            <Text>Name: {name}</Text>
                            <Text>Contact: {contact}</Text>
                            <Text>Secondary Contact: {altContact}</Text>
                            <Text>Guests: {guests}</Text>
                            <Text>Category: {category}</Text>
                            <Text>Location: {this.state.restLocations.map(item=>location==item.id ? item.location : null)}</Text>
                            <Text>Smoking: {smoke}</Text>
                            <Text>Additional Details: {other}</Text>
                            <Text>Preferred Time: {selectedDateTime}</Text>
                            </ScrollView>
                        </View>
                        <View style={styles.popupButtons}>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Dashboards', {
                                userInfo: { name, contact, altContact, guests, category, location, smoke, other, selectedDateTime }
                            })} style={{ paddingTop: 7, display: 'flex', justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'orange', padding: 5, margin: 2, width: 100, borderBottomWidth: 2, borderRadius: 8 }}>
                        <Text>Reserve</Text>
                    </TouchableOpacity>
                        <TouchableOpacity   onPress={() => this.setModalVisible(false)} style={{ paddingTop: 7, display: 'flex', justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'orange', padding: 5, margin: 2, width: 100, borderBottomWidth: 2, borderRadius: 8 }}>
                                    <Text>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </View>
                    </Modal>
                <ScrollView style={{ margin: 5 }}>

                    <TouchableOpacity onPress={()=>this.changeLayout('PI')} style={styles.notificationBox}>
                        <View style={styles.subnotificationBox}>
                            <View style={{ marginTop: 3 }}>
                                <Icons name='user' size={15} color="white" />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.descriptionForm}>Personal Information</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
                    <TextInput
                        placeholder='Name'
                        value={name}
                        style={[styles.margins, { height: 60, borderColor: 'gray', borderWidth: 1 }]}
                        onChangeText={name => this.setState({ name })}
                    />
                    <TextInput
                        placeholder='No. Of Guests'
                        style={[styles.margins, { height: 60, borderColor: 'gray', borderWidth: 1 }]}
                        value={guests}
                        onChangeText={guests => this.setState({ guests })}
                    />
                    <TextInput
                        placeholder='Contact'
                        style={[styles.margins, { height: 60, borderColor: 'gray', borderWidth: 1 }]}
                        value={contact}
                        onChangeText={contact => this.setState({ contact })}
                    />
                    <TextInput
                        placeholder='Secondary Contact'
                        style={[styles.margins, { height: 60, borderColor: 'gray', borderWidth: 1 }]}
                        value={altContact}
                        onChangeText={altContact => this.setState({ altContact })}
                    />
                    </View>
                    <TouchableOpacity onPress={()=>this.changeLayout('DI')} style={styles.notificationBox}>
                        <View style={styles.subnotificationBox}>
                            <View style={{ marginTop: 3 }}>
                                <Icons name='user' size={15} color="white" />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.descriptionForm}>Categories</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: this.state.expanded1 ? null : 0, overflow: 'hidden' }}>
                   
                    <Picker
                        selectedValue={category}
                        style={[styles.margins, { height: 60, width: '100%', borderBottomColor: 'grey', borderBottomWidth: 1 }]}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ category: itemValue })
                        }>
                        <Picker.Item label="select category" value="" />
                        <Picker.Item label="Family" value="Family" />
                        <Picker.Item label="Friend" value="Friends" />
                    </Picker>
                    <Picker
                        selectedValue={location}
                        style={[styles.margins, { height: 60, width: '100%', borderBottomColor: 'grey', borderBottomWidth: 1 }]}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ location: itemValue })
                        }>
                        <Picker.Item label="select location" value="" />
                        {this.state.restLocations.map((subitem, index) => {
                            return <Picker.Item label={`${subitem.location}`} value={`${subitem.id}`} />
                        })}
                    </Picker>
                    <Picker
                        selectedValue={smoke}
                        style={[styles.margins, { height: 60, width: '100%', borderBottomColor: 'grey', borderBottomWidth: 1 }]}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ smoke: itemValue })
                        }>
                        <Picker.Item label="select smoking" value="" />
                        <Picker.Item label="Yes" value="Yes" />
                        <Picker.Item label="No" value="No" />
                    </Picker>
                    </View>
                    <TouchableOpacity onPress={this.showDateTimePicker} style={styles.notificationBox}>
                        <View style={styles.subnotificationBox}>
                            <View style={{ marginTop: 3 }}>
                                <Icons name='user' size={15} color="white" />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.descriptionForm}>{selectedDateTime != '' ? '':'Set time'}</Text>
                            </View>
                            <View style={{ marginLeft: 1 }}>
                            <Text style={styles.descriptionForm}>{selectedDateTime}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <DateTimePicker
                        mode={'datetime'}
                        is24Hour={false}
                        isVisible={isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                    />
                     <TouchableOpacity onPress={()=>this.changeLayout('OI')} style={styles.notificationBox}>
                        <View style={styles.subnotificationBox}>
                            <View style={{ marginTop: 3 }}>
                                <Icons name='user' size={15} color="white" />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.descriptionForm}>Add more Details (Optional)</Text>
                            </View>  
                             
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.margins, styles.textAreaContainer,{ height: this.state.expanded2 ? null : 0, overflow: 'hidden' }]} >
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder="Other Details"
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                            onChangeText={(other) => this.setState({ other })}
                            value={other} />
                    </View>
                    <View style={[styles.margins]}>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <TouchableOpacity  onPress={() => this.setModalVisible(true)} style={{ paddingTop: 7, display: 'flex', justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'orange', padding: 5, margin: 2, width: 100, borderBottomWidth: 2, borderRadius: 8 }}>
                        <Text>Preview</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => this.setState({name:'', contact:'', altContact:'', guests:'', category:'', location:'', smoke:'', other:'', selectedDateTime:''})} style={{ paddingTop: 7, display: 'flex', justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'orange', padding: 5, margin: 2, width: 100, borderBottomWidth: 2, borderRadius: 8 }}>
                        <Text>Clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={() => this.props.navigation.navigate('Preferences')} style={{ paddingTop: 7, display: 'flex', justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'orange', padding: 5, margin: 2, width: 100, borderBottomWidth: 2, borderRadius: 8 }}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                    
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textAreaContainer: {
        borderColor: 'grey',
        borderWidth: 2
    },
    textArea: {},
    margins: { marginTop: 5,display:'flex' },

    notificationBox: {
        padding: 10,
        marginTop: 5,
        marginBottom: 0,
        backgroundColor: 'green',
        flexDirection: 'row',
        borderRadius: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'grey',
        display: 'flex'
    },
    subnotificationBox: {
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    descriptionForm: {
        fontSize: 18,
        color: "white",
    },
    popup: {
        backgroundColor: 'white',
        marginTop: 80,
        marginHorizontal: 20,
        borderRadius: 7,
      },
      popupOverlay: {
        backgroundColor: "#00000057",
        flex: 1,
        marginTop: 30
      },
      popupContent: {
        //alignItems: 'center',
        margin: 5,
        height:"auto",
        padding:10
      },
      popupHeader: {
        marginBottom: 45
      },
      popupButtons: {
        marginTop: 15,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: "#eee",
        justifyContent:'center'
      },
      popupButton: {
        flex: 1,
        marginVertical: 16
      },
      btnClose:{
        height:20,
        backgroundColor:'#20b2aa',
        padding:20
      },
      modalInfo:{
        alignItems:'center',
        justifyContent:'center',
      }
})