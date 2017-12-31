import React,{Component} from 'react';
import { StyleSheet } from 'react-native';
import Timeline from './Timeline';
import Footers from './Footers.js';

//import SearchScreen from './SearchScreen';
import {Container,Content, Fab,Icon } from 'native-base';
class HomeScreen extends React.Component{
    static navigationOptions={
        
         tabBarLabel:'Home',
         tabBarIcon:({tintColor})=>
         (<Icon name='home' style={{color:tintColor}}/>),
     };
    
    
    render(){
       

        return(
            <Container style={{backgroundColor:'white'}}>
               <Content>
               <Timeline/></Content>
               <Fab
            style={{ backgroundColor: '#007aff', marginBottom: 0}}
            position="bottomRight" >
            <Icon name='ios-leaf' />
            </Fab>
               </Container> 
           
        );
    };

    }

 export default HomeScreen;
