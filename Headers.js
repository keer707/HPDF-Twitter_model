import React,{Component} from 'react';
import {  Header, Left, Body, Button,Thumbnail, Text } from 'native-base';
import {TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';

const Headers = (props) => {
 
const {navigation}=props;  
    return (
 
        <Header hasTabs style={{backgroundColor:'#fff',height:100}}>
          <Left>
           <Button transparent onPress={()=>navigation.navigate("DrawerOpen")}
            style={{backgroundColor:'#fff',height:60}}>
           <Thumbnail source={require('./pic1.jpg')}  />
            </Button>
          </Left>
          <Body>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Home</Text>
          </Body>

        </Header>

    );

    

}

export default Headers ;