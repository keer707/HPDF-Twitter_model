import React,{Component} from 'react';
import {TabNavigator,StackNavigator,DrawerNavigator} from 'react-navigation';
import Notifications from './Notifications';
import Message from './Message';
import HomeScreen from './HomeScreen';
import  Footers  from './Footers';
import Headers from './Headers.js';
import SearchScreen from './SearchScreen';
import SearchTab from './SearchTab';
import TabComponent from './TabComponent';
import SideBar from './SideBar';
import {Font} from 'expo';

var MainScreenNavigator= TabNavigator({
  Home:{screen: HomeScreen},
  Search:{screen:SearchScreen},
  Notifications: {screen:Notifications},
  Message:{screen: Message}

},{ 
  tabBarComponent:props=>(<TabComponent {...props}/>),
  tabBarPosition:'top',
  animationEnabled:true,
  tabBarOptions:{
    activeTintColor:'#007aff',
    inactiveTintColor:'grey',
    activeBackgroundColor:'blue',
    inactiveBackgroundColor:'#fff',
    showIcon:true,
    showLabel:false,
    tabBgColor:"#fff",
    topTabActiveBgColor: "#fff",
    topTabBarActiveBorderColor: "#007aff"
  },
  
});


const Router = DrawerNavigator({
  Home: { screen: MainScreenNavigator,
    navigationOptions: {    }, },
  
 },
{contentComponent:props=>(<SideBar {...props}/>),
drawerWidth:350}
);

const MyAppNavigator = StackNavigator({
  Home: { screen: Router,
    navigationOptions:{header:null},
  },
  SearchTab:{screen:SearchTab,
  navigationOptions:{header:null},} 
});


 

export default MyAppNavigator;
