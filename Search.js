import React, { Component } from 'react';
import {  Header, Item,Left, Input, Icon,Body, Button, Text } from 'native-base';

const Search=(props)=>{


    const {navigation} =props;
    return (
      
        <Header searchBar style={{backgroundColor:'white'}}>
          <Left>
              <Button transparent onPress={()=>navigation.navigate("DrawerOpen")}>
            <Icon name='arrow-back' style={{color: 'blue'}}/>
            </Button>
            </Left>
            <Body>
                <Item style={{backgroundColor:'white'}}>
            <Input placeholder='Search Twitter'/>
            
          </Item>
          </Body>
          
        </Header>
      
    );
  }

export default Search;