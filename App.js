
import React, { Component } from 'react';
import HomeScreen from './app/components/homeScreen'
import DashboardScreen from './app/components/dashboard'
import SplashScreen from './app/components/splashScreen'
import HeaderScreen from './app/components/Header/header'
import NewReservation from './app/components/Reservation/reservationForm'
import Deck from './app/components/Dashboard/deck'
import Welcome from './app/components/welcomeScreen';
import PreviewReservation from './app/components/previewData'
import BookedUser from './app/components/booked'
import FilteredData from './app/components/filteredDeck'
import EditReservation from './app/components/Reservation/editReservation'
import PreferenceList from './app/components/preferenceList'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from "react-native-vector-icons/MaterialIcons";
import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from "react-navigation";
import {View,Text} from 'react-native'

const deckForBottom = createStackNavigator({
  Deck: Deck
},{
  defaultNavigationOptions:{
    title: 'Deck View'
  }
})

const preferenceForBottom = createStackNavigator({
  PreferenceList,
  Prefrences: NewReservation,
  Dashboards:DashboardScreen,
  Preview: PreviewReservation,
  EditReservation
},{
  defaultNavigationOptions:{
    title: 'Preference',
  }
})

const Reservation = createStackNavigator({
  // Welcome: Welcome,
  Reservation: BookedUser,
  Booked : BookedUser,
  FilteredDeck : FilteredData,
  
})

const bottomTabs = createBottomTabNavigator({
  Reservation,
  Deck: deckForBottom,
  PrefrenceList: preferenceForBottom,
},

{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      // let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Deck') {
        iconName = 'restaurant'
      } else if (routeName === 'PrefrenceList') {
        iconName = 'assignment'
      }
      else if (routeName === 'Reservation') {
        iconName = 'date-range'
      }
      // You can return any component that you like here!
    return <View ><Icon name={iconName} size={26} color={tintColor} />
    </View>
                                  
    },
  }),
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    activeBackgroundColor:'green',
    labelStyle:{
      fontSize:17
    },
    style:{
    borderTopColor:'green',
    borderTopWidth:1 
    }
  }
}
);

const DrawerNavigator = createDrawerNavigator(
  {
    Dashboard: bottomTabs,
    MyAccount: HeaderScreen,
    SignOut: HomeScreen
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);

const AppNavigator = createStackNavigator({
  splash: SplashScreen,
  Home: HomeScreen,
});

const switchNavigator = createSwitchNavigator({
  stack: AppNavigator,
  Dashboard: DrawerNavigator
  
})

export default createAppContainer(switchNavigator);
