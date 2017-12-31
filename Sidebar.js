import React from "react";
import { Image, StatusBar, Settings } from "react-native";
import {
  Header,
  Footer,
  Left,
  Right,
  Card,CardItem,
  Text,
  Container,
  Thumbnail,
  List,
  ListItem,
  Content,
  View,
  Icon,Button
} from "native-base";

class SideBar extends React.Component {
  render() {
    
    return (
       
      <Container>
        <Content>
        <Card style={{elevation: 1}}>
            <CardItem >
              <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
              <Thumbnail source={require('./pic1.jpg')} />
                  <Text style={{fontWeight: 'bold'}}>Keerthana Manoharan</Text>
                  <Text note>@keer707</Text></View><Right>
                    <Button transparent><Icon style={{color:'skyblue' }} name='ios-arrow-down'/></Button></Right></CardItem>
                  <CardItem style={{borderBottomWidth:2}}>
            <View style = {{flexDirection: 'row'}} >
              <Text style={{fontWeight: 'bold'}}>250 <Text note>Following</Text>  </Text>
                  <Text style={{fontWeight: 'bold'}}>198 <Text note>Followers</Text> </Text>
                  </View>
             </CardItem></Card>
             <Card style={{elevation: 1}}>
             <CardItem>
              <Icon name='ios-person-outline' />
              <Text>Profile</Text>
             </CardItem>
             <CardItem >
              <Icon name='ios-list-box-outline' />
              <Text>Lists</Text>
             </CardItem>
             <CardItem>
              <Icon name='ios-thunderstorm-outline' />
              <Text>Moments</Text>
             </CardItem>
             <CardItem>
              <Icon name='ios-paper-outline' />
              <Text>Highlights</Text>
             </CardItem>
        </Card><Card style={{elevation: 0}}>
           
          <CardItem >
            
                  <Text>Settings and Privacy</Text>               
                  </CardItem><CardItem>    
                  <Text>Help Center</Text>               
             
          </CardItem>
          </Card>
          </Content>
          <Footer style={{backgroundColor:'#fff',borderTopWidth:1,borderColor:'grey' }}>
            <Left><Button transparent >
             <Icon style={{ marginLeft: 20,color:'skyblue'}} name='ios-moon'></Icon></Button>
           </Left>
            <Right><Button transparent  >
            <Icon style={{ marginRight: 20,color:'skyblue' }} name='qr-scanner'></Icon></Button>
            </Right>
          </Footer>
       
      </Container>
    );
  }
}
export default SideBar;
