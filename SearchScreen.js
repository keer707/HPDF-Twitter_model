import React,{Component} from 'react';
import { StyleSheet } from 'react-native';
import SearchTab from './SearchTab';
import Footers from './Footers';
import {Container,Content,View,Icon} from 'native-base';


class SearchScreen extends React.Component{
    static navigationOptions={
        tabBarLabel:'Search',
        tabBarIcon:({tintColor})=>
        (<Icon name="search" style={{color:tintColor}}/>),
    }

    
render(){
    return(
        <Container style={{backgroundColor:'white'}}>
          <Content/>
            <Footers/>
            </Container>
    );
}
}
export default SearchScreen;
