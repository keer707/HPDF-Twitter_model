import React, { Component } from 'react';
import {StyleSheet,Alert,TouchableOpacity, Image} from 'react-native';
import { Container,Content,List,ListItem,Fab,Thumbnail,Body,Left,Right, View, Header,Item,Icon,Input,Button, Text} from 'native-base';
import  Footers  from './Footers';
import {Headers} from './Headers';

class Notifications extends Component  {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-notifications' style={{color: tintColor}} />
    ),
     };
 
render() {
  const ShowAlert=()=>{
    Alert.alert(
      'See less often','',[{text:'Cancel' }]
    )
  }

    return (
     <Container style={{backgroundColor:'white'}}>
          <View style={{flex:1}}>
          <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./pic1.jpg')} />
              </Left>
              <Body>
                <Text>Do good...</Text>
              </Body>
              <Right>
                <Icon style={styles.iconStyle} onPress={ShowAlert} name='ios-arrow-down'/>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./tt1.jpg')} />
              </Left>
              <Body>
              <Text>Be good...</Text>
            </Body>
            <Right>
              <Icon style={styles.iconStyle} onPress={ShowAlert} name='ios-arrow-down'/>
            </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./tt2.jpg')} />
              </Left>
              <Body>
              <Text>Do good...</Text>
            </Body>
            <Right>
              <Icon style={styles.iconStyle} onPress={ShowAlert} name='ios-arrow-down'/>
            </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./tt5.jpg')} />
              </Left>
              <Body>
              <Text>Be good...</Text>
            </Body>
            <Right>
              <Icon style={styles.iconStyle} onPress={ShowAlert} name='ios-arrow-down'/>
            </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./pic4.jpg')} />
              </Left>
              <Body>
              <Text>Do good...</Text>
            </Body>
            <Right>
              <Icon style={styles.iconStyle} onPress={ShowAlert} name='ios-arrow-down'/>
            </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./tt4.jpg')} />
              </Left>
              <Body>
              <Text>Be good...</Text>
            </Body>
            <Right>
              <Icon style={styles.iconStyle} onPress={ShowAlert} name='ios-arrow-down'/>
            </Right>
            </ListItem>
          </List>
        </Content>
       </View>
       <Fab
           
            style={{ backgroundColor: '#007aff', marginBottom: 40 }}
            position="bottomRight">
            <Icon name="ios-leaf" />
            </Fab>
       <Footers/>
      </Container>        

    );
}
}
const styles =StyleSheet.create({
  
  iconStyle:{
      color:'grey',
      paddingLeft: 13   
  }
 
 

});


export default Notifications;
