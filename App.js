
import React, { Component } from 'react';
import HomeScreen from './app/components/homeScreen'
import DashboardScreen from './app/components/dashboard'
import SplashScreen from './app/components/splashScreen'
import HeaderScreen from './app/components/Header/header'
import NewReservation from './app/components/Reservation/reservationForm'
import Deck from './app/components/Reservation/reservationForm'
import Welcome from './app/components/welcomeScreen';
import PreviewReservation from './app/components/previewData'
import BookedUser from './app/components/booked'

import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from "react-navigation";




const Dashboard = createStackNavigator({
  Welcome: Welcome,
  Dashboards:DashboardScreen,
  Reservation: NewReservation,
  Preview: PreviewReservation,
  Booked : BookedUser
})

const bottomTabs = createBottomTabNavigator({
  Dashboard,
  Reservation: NewReservation,
  bokeedUser: BookedUser
})

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
  Home: HomeScreen

});

const switchNavigator = createSwitchNavigator({
  stack: AppNavigator,
  Dashboard: DrawerNavigator
  
})

export default createAppContainer(switchNavigator);
