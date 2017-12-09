import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container,Content,List,ListItem,Thumbnail,Body,Left,Right, View, Header,Item,Icon,Input,Button, Text} from 'native-base';
import { Footers } from './Footers';
import {Headers} from './Headers';

class Notifications extends Component  {
  static navigationOptions = {
      tabBarLabel:'Notifications',
      tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-notifications' style={{color: tintColor}} />
    ),
     }
  
render() {
    return (
      <Container>
        <Headers/>
          <View style={{flex:1}}>
          <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./pic1.jpg')} />
              </Left>
              <Body>
                <Text>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward'/>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./tt1.jpg')} />
              </Left>
              <Body>
              <Text>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Icon name='ios-arrow-forward'/>
            </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./tt2.jpg')} />
              </Left>
              <Body>
              <Text>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Icon name='ios-arrow-forward'/>
            </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./tt5.jpg')} />
              </Left>
              <Body>
              <Text>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Icon name='ios-arrow-forward'/>
            </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./pic4.jpg')} />
              </Left>
              <Body>
              <Text>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Icon name='ios-arrow-forward'/>
            </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./tt4.jpg')} />
              </Left>
              <Body>
              <Text>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Icon name='ios-arrow-forward'/>
            </Right>
            </ListItem>
          </List>
        </Content>
       </View>
        <Footers />
        </Container>
      
    );
}
}



export default Notifications;