
import React, { Component } from 'react';
import HomeScreen from './app/components/homeScreen'
import DashboardScreen from './app/components/dashboard'
import SplashScreen from './app/components/splashScreen'
import HeaderScreen from './app/components/Header/header'
import NewReservation from './app/components/Reservation/reservationForm'
import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from "react-navigation";


const bottomTabs = createBottomTabNavigator({
  Dashboard: DashboardScreen,
  MyAccount: HeaderScreen
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
