import React,{Component} from 'react';
import { StyleSheet } from 'react-native';
import Headers from './Headers';
import Footers from './Footers';
import Timeline from './Timeline';
import SearchScreen from './SearchScreen';
import {Container, Fab,Icon } from 'native-base';
import TabList from './App';

class HomeScreen extends React.Component{
    static navigationOptions={
        screen:HomeScreen,
        tabBarLabel:'Home',
        tabBarIcon:({tintColor})=>
        (<Icon name="home" style={{color:tintColor}}/>),
    }
    
    
    render(){
       

        return(
            
            <Container>
                <Headers/>
                <Timeline/>
                <Fab
           
            style={{ backgroundColor: 'skyblue', marginBottom: 30 }}
            position="bottomRight">
            <Icon name="add" />
            </Fab>
                <Footers/>
            </Container>
        );
    };

    }

 export default HomeScreen;