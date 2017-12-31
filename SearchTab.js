import React, { Component } from 'react';
import {  Header,Container,Content, Item,Left, Input, Icon,Body, Button, Text } from 'native-base';
import Footers from './Footers';

class SearchTab extends React.Component{
  
  
render(){
  const {navigate}=this.props.navigation;
 

   return (
      
       <Header searchBar rounded style={{backgroundColor:'white',height:90}}>
           <Item style={{backgroundColor:'white',height:60,marginTop:25}}>
              <Button transparent style={{backgroundColor:'white',height:58}} 
           onPress={() => this.props.navigation.goBack()}>
           <Icon name='arrow-back' style={{color: '#007aff'}}/>
            </Button>
            <Input placeholder='Search Twitter'/>
            
          </Item>
          
          
        </Header>
      
    );
  }}

export default SearchTab;