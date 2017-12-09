import React, { Component } from "react";
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import Notifications from './Notifications';
import Message from './Message';
import { TabNavigator, StackNavigator, DrawerNavigator } from "react-navigation";
import Sidebar from './Sidebar';

import { ScrollView, Text } from 'react-native';


const TabList = TabNavigator({
  Home: {screen: HomeScreen},
  Search: { screen: SearchScreen},
  Notifications: {screen: Notifications}, 
  Message: {screen: Message},
	},
		
 
  
 );



const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: TabList  }
    
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);

const MyAppNavigator = StackNavigator({
  Home: { screen: TabList },
  
 });

export default TabList;