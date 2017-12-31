import React from 'react';
import Headers from './Headers';

import {StyleSheet,Platform, Text, TouchableNativeFeedback, View,ScrollView, Animated } from 'react-native';
import {  Content,Header,Left,Body,Icon, Image,Right,Title,Button} from 'native-base';

class TabComponent extends React.Component {
render () {
  const {
    navigation,
    renderIcon,
    activeTintColor,
    inactiveTintColor,
    jumpToIndex
    } = this.props;
    console.log(this.props);
    const {routes} = navigation.state;
    console.log(routes);
  
      let header=null;
    let currentIndex=navigation.state.index;
    let currentKey=navigation.state.routes[currentIndex].key
    console.log();
    header=<Headers navigation={navigation} tabKey = {currentKey} />;

    return (
      
    <View>
      
      
     {header}
    
  
    <View style={styles.tabbar}>
        {routes && routes.map((route, index) => {
          const focused = index === navigation.state.index;
          const tintColor = focused ? activeTintColor : inactiveTintColor;
         const tabKey = route.key;
         
          return (
            
            <TouchableNativeFeedback
              key={route.key}
              style={styles.tab}
              
              onPress={()=>{jumpToIndex(index); }}
              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
              <View style={styles.tab}>
                {renderIcon({
                  route,
                  index,
                  focused,
                  tintColor
                })}
              </View>
            </TouchableNativeFeedback>
          );
        })}

      </View>
    
       </View>
    )
}
};

const styles = StyleSheet.create({
    tabbar: {
      height: 45,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderTopWidth:0,
      borderBottomColor: 'blue',
      backgroundColor: 'white',
    },
    tab: {
      alignSelf: 'stretch',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
   
  });

  export default TabComponent;