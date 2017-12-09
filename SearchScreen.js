import React,{Component} from 'react';
import { StyleSheet } from 'react-native';
import Search from './Search';
import Footers from './Footers';
import {Container,Icon} from 'native-base';


class SearchScreen extends React.Component{
    static navigationOptions={
        tabBarLabel:'Search',
        tabBarIcon:({tintColor})=>
        (<Icon name="search" style={{color:tintColor}}/>),
    }

    
render(){
    return(
        <Container>
            <Search/>
            <Footers/>
            </Container>
    );
}
}
export default SearchScreen;