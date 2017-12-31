import React,{Component} from 'react';
import { StyleSheet,Image } from 'react-native';
import { Content, Card,CardItem,Left,Right,Thumbnail,Body,  Button, Icon, Text  } from 'native-base';



class Timeline extends Component {
   
  render() {
    
        return (  
          <Content> 
             <Card style={{elevation:1}}>
               <CardItem>
                 <Left>
                   <Thumbnail source={require('./pic1.jpg')} />
                   <Body >
                     <Text style={styles.name }>Sivarajan </Text>
                     <Text note>@siva66</Text>
                     <Text>Hi...there!!!</Text>  
                    </Body>
                 </Left>
                 <Right>
                 <Button transparent>
            <Icon name='ios-arrow-down' style={ styles.iconStyle }/>
            </Button>
          </Right>
               </CardItem>
               <CardItem >
                 <Body>
                    <Image source={require('./tt1.jpg')} style={styles.images}/>
                  </Body>
                </CardItem>
               <CardItem style={{justifyContent: 'flex-end'}}>
    
                   <Button small iconLeft transparent>
                     <Icon name="ios-text-outline" style={ styles.iconStyle } />
                     <Text style={ styles.textStyle }>40</Text>
                   </Button>
    
                 <Button small iconLeft transparent>
                    <Icon name="ios-swap-outline" style={ styles.iconStyle }/>
                    <Text style={ styles.textStyle } >5</Text>
                  </Button>
    
                   <Button small iconLeft transparent>
                     <Icon name="ios-heart-outline" style={ styles.iconStyle }/>
                     <Text style={ styles.textStyle }>10</Text>
                   </Button>
    
                   <Button default small transparent>
                     <Icon name="ios-mail-outline" style={ styles.iconStyle }/>
                     </Button>
               </CardItem>
             </Card>
             <Card style={{elevation:1}}>
               <CardItem>
                 <Left>
                   <Thumbnail source={require('./pic2.jpg')} />
                   <Body >
                     <Text style={styles.name}>Keerthi</Text>
                     <Text note>@keerthi8</Text>
                     <Text>Hi...there!!!</Text>  
                    </Body>
                 </Left>
                 <Right>
                 <Button transparent>
            <Icon name='ios-arrow-down' style={ styles.iconStyle }/>
            </Button>
          </Right>
               </CardItem>
               <CardItem ><Body>
                    <Image source={require('./tt2.jpg')} style={styles.images}/>
                  </Body>

                </CardItem>
               <CardItem style={{justifyContent: 'flex-end'}}>
    
                   <Button small iconLeft transparent>
                     <Icon name="ios-text-outline" style={ styles.iconStyle } />
                     <Text style={ styles.textStyle }>40</Text>
                   </Button>
    
                 <Button small iconLeft transparent>
                    <Icon name="ios-swap-outline" style={ styles.iconStyle }/>
                    <Text style={ styles.textStyle } >5</Text>
                  </Button>
    
                   <Button small iconLeft transparent>
                     <Icon name="ios-heart-outline" style={ styles.iconStyle }/>
                     <Text style={ styles.textStyle }>10</Text>
                   </Button>
    
                   <Button default small transparent>
                     <Icon name="ios-mail-outline" style={ styles.iconStyle }/>
                     </Button>
               </CardItem>
             </Card>
             <Card style={{elevation:1}}>
               <CardItem>
                 <Left>
                   <Thumbnail source={require('./pic3.jpg')} />
                   <Body >
                     <Text style={styles.name}>Lokesh</Text>
                     <Text note>@lokesh</Text>
                     <Text>Hi...there!!!</Text>  
                    </Body>
                 </Left>
                 <Right>
                 <Button transparent>
            <Icon name='ios-arrow-down' style={ styles.iconStyle }/>
            </Button>
          </Right>
               </CardItem>
               <CardItem><Body>
                    <Image source={require('./tt3.jpg')} style={styles.images}/>
               </Body>   
                </CardItem>
               <CardItem style={{justifyContent: 'flex-end'}}>
    
                   <Button small iconLeft transparent>
                     <Icon name="ios-text-outline" style={ styles.iconStyle } />
                     <Text style={ styles.textStyle }>40</Text>
                   </Button>
    
                 <Button small iconLeft transparent>
                    <Icon name="ios-swap-outline" style={ styles.iconStyle }/>
                    <Text style={ styles.textStyle } >5</Text>
                  </Button>
    
                   <Button small iconLeft transparent>
                     <Icon name="ios-heart-outline" style={ styles.iconStyle }/>
                     <Text style={ styles.textStyle }>10</Text>
                   </Button>
    
                   <Button default small transparent>
                     <Icon name="ios-mail-outline" style={ styles.iconStyle }/>
                     </Button>
               </CardItem>
             </Card>
             <Card style={{elevation:1}}>
               <CardItem>
                 <Left>
                   <Thumbnail source={require('./pic4.jpg')} />
                   <Body >
                     <Text style={styles.name}>Manoharan</Text>
                     <Text note>@mano8</Text>
                     <Text>Hi...there!!!</Text>  
                    </Body>
                 </Left>
                 <Right>
                 <Button transparent>
            <Icon name='ios-arrow-down' style={ styles.iconStyle }/>
            </Button>
          </Right>
               </CardItem>
               <CardItem><Body>
                    <Image source={require('./tt4.jpg')} style={styles.images}/>
                 </Body> 
                </CardItem>
               <CardItem style={{justifyContent: 'flex-end'}}>
    
                   <Button small iconLeft transparent>
                     <Icon name="ios-text-outline" style={ styles.iconStyle } />
                     <Text style={ styles.textStyle }>40</Text>
                   </Button>
    
                 <Button small iconLeft transparent>
                    <Icon name="ios-swap-outline" style={ styles.iconStyle }/>
                    <Text style={ styles.textStyle } >5</Text>
                  </Button>
    
                   <Button small iconLeft transparent>
                     <Icon name="ios-heart-outline" style={ styles.iconStyle }/>
                     <Text style={ styles.textStyle }>10</Text>
                   </Button>
    
                   <Button default small transparent>
                     <Icon name="ios-mail-outline" style={ styles.iconStyle }/>
                     </Button>
               </CardItem>
             </Card>
             <Card style={{elevation:1}}>
               <CardItem>
                 <Left>
                   <Thumbnail source={require('./pic5.jpg')} />
                   <Body >
                     <Text style={styles.name}>Lisa</Text>
                     <Text note>@lisa22</Text>
                     <Text>Hi...there!!!</Text>  
                    </Body>
                 </Left>
                 <Right>
                 <Button transparent>
            <Icon name='ios-arrow-down' style={ styles.iconStyle }/>
            </Button>
          </Right>
               </CardItem>
               <CardItem><Body>
                    <Image source={require('./tt5.jpg')} style={styles.images}/>
                </Body>  
                </CardItem>
               <CardItem style={{justifyContent: 'flex-end'}}>
    
                   <Button small iconLeft transparent>
                     <Icon name="ios-text-outline" style={ styles.iconStyle } />
                     <Text style={ styles.textStyle }>40</Text>
                   </Button>
    
                 <Button small iconLeft transparent>
                    <Icon name="ios-swap-outline" style={ styles.iconStyle }/>
                    <Text style={ styles.textStyle } >5</Text>
                  </Button>
    
                   <Button small iconLeft transparent>
                     <Icon name="ios-heart-outline" style={ styles.iconStyle }/>
                     <Text style={ styles.textStyle }>10</Text>
                   </Button>
    
                   <Button default small transparent>
                     <Icon name="ios-mail-outline" style={ styles.iconStyle }/>
                     </Button>
               </CardItem>
             </Card>
            
             </Content>
           
         );
        }
    }
       
    
         const styles =StyleSheet.create({
              textStyle: {
                paddingLeft: 13,
                color: 'grey',
              },
              iconStyle:{
                  color:'grey',
                  paddingLeft: 13,
                  
              },
              name:{
                fontWeight:'bold',
                fontSize:20,
              },
              images:{
                height: 170,
                width: 310,
                borderRadius:5,
                alignSelf:'flex-end' 
              }
    
         });
    
    export default Timeline ;
