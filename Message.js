import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container,Content,List,ListItem,Thumbnail,Body,Left,Right, View, Header,Item,Icon,Input,Button, Text} from 'native-base';
import { Footers } from './Footers';
import {Headers} from './Headers';



class Message extends Component  {
  static navigationOptions = {
      tabBarLabel:'Mail',
      tabBarIcon: ({ tintColor }) => (
      <Icon name="mail" style={{color: tintColor}} />
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
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./tt1.jpg')} />
              </Left>
              <Body>
                <Text>Swetha</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>1:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./tt2.jpg')} />
              </Left>
              <Body>
                <Text>Cindhu</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:03 am</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./tt5.jpg')} />
              </Left>
              <Body>
                <Text>Keerthi</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./pic4.jpg')} />
              </Left>
              <Body>
                <Text>Surya</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./tt4.jpg')} />
              </Left>
              <Body>
                <Text>Sakthi</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
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



export default Message;