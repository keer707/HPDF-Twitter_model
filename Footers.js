import React,{Component} from 'react';
import {Footer,FooterTab,Button,Icon} from  'native-base';
import { StyleSheet,Text } from 'react-native';


const Footers=()=>{

return(
<Footer>
  <FooterTab style={{backgroundColor:'#fff',borderColor:'grey',borderTopWidth:1}}>
    <Button> 
      <Text style={styles.style} active>All</Text>
    </Button >
    <Button >
      <Text style={styles.size}>Mentions</Text>
    </Button>
    <Button >
      <Icon style={{color:'skyblue'}} name="ios-settings" />
     </Button>
  </FooterTab>
</Footer>
);
};
const styles =StyleSheet.create({
    style: {
      fontWeight:'bold',
      fontSize: 20,
      color: 'skyblue'
    },
    size:{
       fontWeight:'bold',
       fontSize: 20,
       color: 'grey'
        
    }

});
export default Footers;