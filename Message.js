import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import {Container,Content, List,ListItem,Thumbnail,Fab,Body,Left,Right, View, Header,Icon,Input,Button, Text} from 'native-base';
import  Footers  from './Footers.js';
import Headers from './Headers.js';
import {Font } from 'expo';

class Message extends Component  {
  
    static navigationOptions = {
        
        tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-mail' style={{color: tintColor}} />
      ),
       };

  
render() {
    return (
    <Container style={{backgroundColor:'white'}}>
        <Content>
          <List>
            
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./pic1.jpg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Be happy...</Text>
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
                <Text note>Do good....</Text>
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
                <Text note>Be good...</Text>
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
                <Text note>Be brave...</Text>
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
          <Fab
            style={{ backgroundColor: '#007aff', marginBottom: 0 }}
            position="bottomRight" >
            <Icon name='md-mail' />
            </Fab>
      </Container>
      
    );
}
}



export default Message;
