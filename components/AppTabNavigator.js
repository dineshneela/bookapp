import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';
export const AppTabNavigator=createBottomTabNavigator({
Donatebooks: {
    screen:BookDonateScreen,
    NavigationOptions:{
        tabBarIcon:<Image source={require("../assets/request-list.png")} style={{width:20,Height:20}}/>,
        tabBarLabel:"Donate Books"
    }},
Requestbooks:{
    screen:BookRequestScreen,
    NavigationOptions:{
        tabBarIcon:<Image source={require("../assets/request-book.png")} style={{width:20,Height:20}}/>,
        tabBarLabel:"Request Books"
    }},

});