import React, { Component } from 'react'
import DateTimePicker from "react-native-modal-datetime-picker";
import { View, Text, TextInput, Picker, Button, StyleSheet,ScrollView } from 'react-native';
import moment from "moment";

export default class ReservationFrome extends Component {
   
    state = {
        name: '',
        contact: '',
        altContact: '',
        guests: '',
        category: '',
        location: '',
        smoke: '',
        isDateTimePickerVisible: false,
        isTimePickerVisible:false,
        other: '',
        selectedDateTime:'',
        restLocations:[
            {id:1,location:'indoor'},
            {id:2,location:'outdoor'},
            {id:3,location:'sea'}
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
        this.setState({selectedDateTime: moment(date).format('MMMM, Do YYYY HH:mm')},()=>{
            console.log(this.state.selectedDateTime)
        })
        this.hideDateTimePicker();
    };
   
componentDidUpdate(prevProps,prevStates){
    if(prevProps != this.props){
        console.log(this.props,'datas')
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
componentDidMount(){
    console.log('didmoiunt')
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
    render() {
        const { name, contact, altContact, guests, category, location, smoke, other, isDateTimePickerVisible,selectedDateTime } = this.state
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{margin:5}}>
                <TextInput
                    placeholder='Name'
                    value={name}
                    style={[styles.margins,{ height: 60, borderColor: 'gray', borderWidth: 1 }]}
                    onChangeText={name => this.setState({ name })}
                />
                <TextInput
                    placeholder='No. Of Guests'
                    style={[styles.margins,{ height: 60, borderColor: 'gray', borderWidth: 1 }]}
                    value={guests}
                    onChangeText={guests => this.setState({ guests })}
                />
                <TextInput
                    placeholder='Contact'
                    style={[styles.margins,{ height: 60, borderColor: 'gray', borderWidth: 1 }]}
                    value={contact}
                    onChangeText={contact => this.setState({ contact })}
                />
                <TextInput
                    placeholder='Secondary Contact'
                    style={[styles.margins,{ height: 60, borderColor: 'gray', borderWidth: 1 }]}
                    value={altContact}
                    onChangeText={altContact => this.setState({ altContact })}
                />
                <Picker
                    selectedValue={category}
                    style={[styles.margins,{ height: 60, width: '100%', borderBottomColor: 'grey', borderBottomWidth: 1 }]}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ category: itemValue })
                    }>
                    <Picker.Item label="select category" value="" />
                    <Picker.Item label="Family" value="Family" />
                    <Picker.Item label="Friend" value="Friends" />
                </Picker>
                <Picker
                    selectedValue={location}
                    style={[styles.margins,{ height: 60, width: '100%', borderBottomColor: 'grey', borderBottomWidth: 1 }]}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ location: itemValue })
                    }>
                    <Picker.Item label="select location" value="" />
                    {this.state.restLocations.map((subitem,index)=>{
                        return   <Picker.Item label={`${subitem.location}`} value={`${subitem.id}`} />
                    })}
                </Picker>
                <Picker
                    selectedValue={smoke}
                    style={[styles.margins,{ height: 60, width: '100%', borderBottomColor: 'grey', borderBottomWidth: 1 }]}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ smoke: itemValue })
                    }>
                    <Picker.Item label="select smoking" value="" />
                    <Picker.Item label="Yes" value="Yes" />
                    <Picker.Item label="No" value="No" />
                </Picker>
                <Button title="Set Date and Time" onPress={this.showDateTimePicker} />
                <DateTimePicker
                    mode={'datetime'}
                    is24Hour={false}
                    isVisible={isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
                <View style={[styles.margins,styles.textAreaContainer]} >
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
                    <Button
                        onPress={()=>this.props.navigation.navigate('Dashboards',{
                           userInfo:{ name, contact, altContact, guests, category, location, smoke, other,selectedDateTime}
                        })}
                        title="Submit"
                        color="#689C4E"
                    />
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
    margins: {marginTop:5}
})