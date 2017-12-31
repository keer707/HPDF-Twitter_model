import React,{Component} from 'react';
import {  Header,Content, Left, Body, Button,Thumbnail,Title,Item,Input,Icon,Right, Text } from 'native-base';
import {TouchableWithoutFeedback,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import SearchScreen from './SearchScreen';
import SearchTab from './SearchTab';
const Headers = (props) => {
const {navigation,tabKey}=props;  
console.log(navigation);
let body=null;
let right=null;
if(tabKey=='Search')
{right=<Right style={{marginRight:10,marginTop:20}}>
  <Icon style={styles.iconStyle} name='ios-person-add-outline'/></Right>}
if(tabKey=='Search')
{body=<Body style={{marginRight:0,marginLeft:80}}>
  <Button rounded style={{width: 250,height:40, backgroundColor: 'lightgrey',marginTop:20}} 
  onPress={() =>navigation.navigate('SearchTab')}>
    <Title style={{color:'grey'}}> Search Twitter </Title>
    </Button> 
   </Body>;
   
  } else {
    body=<Body style={{marginRight:200}}>
    <Title style={{color: 'black',fontSize: 20,marginTop:20, fontWeight: 'bold'}}>{tabKey}</Title>
    </Body>
  }
    return (
 
        <Header hasTabs='true' style={{backgroundColor:'#fff',height:80,elevation:0 }}>
          <Left>
           <Button transparent onPress={()=>navigation.navigate("DrawerOpen")}
            style={{backgroundColor:'white',height:40,marginTop:20}}>
           <Thumbnail source={require('./pic1.jpg')} small />
            </Button>
          </Left>
          {body}
          {right}
        </Header>

    );
};
const styles =StyleSheet.create({
  
  iconStyle:{
      color:'#007aff',
      
  }
 

});

export default Headers ;
