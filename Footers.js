import React,{Component} from 'react';
import {Footer,FooterTab,Button,Right,Left,Body,Icon} from  'native-base';
import { StyleSheet,Text } from 'react-native';


const Footers=()=>{

return(
<Footer>
  <FooterTab style={{backgroundColor:'#fff',borderColor:'grey',borderTopWidth:1}}>
  <Left>
    <Button transparent style={{backgroundColor:'#fff',width:50}}> 
      <Text style={styles.style} active>All</Text>
    </Button >
    </Left> 
    <Button transparent style={{backgroundColor:'#fff',height:40,width:50,marginRight:150}}>
      <Text style={styles.size}>Mentions</Text>
    </Button>
    <Right>
    <Button transparent info style={{marginRight:5}}>
      <Icon style={{color:'#007aff'}} name="ios-settings-outline" />
     </Button>
     </Right>
  </FooterTab>
</Footer>
);
};
const styles =StyleSheet.create({
    style: {
      fontWeight:'bold',
      marginLeft:20,
      fontSize: 20,
      color: '#007aff'
    },
    size:{
       fontWeight:'bold',
       fontSize: 20,
       color: 'grey'
        
    }

});
export default Footers;
