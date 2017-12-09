import React from "react";
import { Image, StatusBar, Settings } from "react-native";
import {
  Header,
  Footer,
  Left,
  Right,
  Card,CardItem,
  Text,Body,
  Container,
  Thumbnail,
  List,
  ListItem,
  Content,
  View,
  Icon
} from "native-base";
const routes = [{name: "Profile",icon: 'contact'},{name: "Lists", icon: 'list-box'},{name: "Moments",icon: 'thunderstorm'}, {name: 'Highlights',icon:'pricetags'} ];

class Sidebar extends React.Component {
 
  


  render() {
    
    return (
      <Container>
        <Content>
        <Card>
            <CardItem >
              <View style = {{flex: 1,
        flexDirection: 'column', justifyContent: 'flex-end'}}>
              
              <Thumbnail source={require('./pic1.jpg')} />
            
              
                
                  <Text style={{fontWeight: 'bold'}}>Keerthana Manoharan</Text>
                  <Text note>@keer707</Text>
                  
              
            <View style = {{flexDirection: 'row'}} >
              <Text>250 Following </Text>
                  <Text >198 Followers</Text>
                  </View>
                  </View>
             </CardItem>
           
        
          <CardItem style={{elevation: 2,borderBottomWidth: 4,borderTopWidth: 4}}>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem>
                 
                <Left>
                <Icon name={data.icon}/>
                
              </Left>
              <Body>
              <Text>{data.name}</Text>
              </Body>
              <Right/>
                
                  
                </ListItem>
              );
            }}
          />
          </CardItem>
          <CardItem >
            <List>
              <ListItem>
                  <Text>Settings and Privacy</Text>               
              </ListItem>
              <ListItem>
                  <Text>Help Center</Text>               
              </ListItem>
            </List>
          </CardItem>
          </Card>
          <Footer >
            <Left>
             <Icon style={{ marginLeft: 5 }} name='moon'></Icon>
           </Left>
            <Right>
            <Icon style={{ marginRight: 5 }} name='qr-scanner'></Icon>
            </Right>
          </Footer>
        </Content>
      </Container>
    );
  }
}
export default Sidebar;
