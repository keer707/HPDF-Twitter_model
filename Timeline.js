import React,{Component} from 'react';
import { StyleSheet,Image } from 'react-native';
import { Content, Card,CardItem,Left,Right,Thumbnail,Body,  Button, Icon, Text  } from 'native-base';



const Timeline = () => {
    
        return (  
          <Content> 
             <Card>
               <CardItem>
                 <Left>
                   <Thumbnail source={require('./pic1.jpg')} />
                   <Body >
                     <Text style={{fontWeight:'bold',fontSize:20}}>Sivarajan</Text>
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
               <CardItem cardBody>
                    <Image source={require('./tt1.jpg')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>
                  
                </CardItem>
               <CardItem style={{justifyContent: 'flex-end'}}>
    
                   <Button small iconLeft transparent>
                     <Icon name="text" style={ styles.iconStyle } />
                     <Text style={ styles.textStyle }>40</Text>
                   </Button>
    
                 <Button small iconLeft transparent>
                    <Icon name="swap" style={ styles.iconStyle }/>
                    <Text style={ styles.textStyle } >5</Text>
                  </Button>
    
                   <Button small iconLeft transparent>
                     <Icon name="heart" style={ styles.iconStyle }/>
                     <Text style={ styles.textStyle }>10</Text>
                   </Button>
    
                   <Button default small transparent>
                     <Icon name="mail" style={ styles.iconStyle }/>
                     </Button>
               </CardItem>
             </Card>
             <Card>
               <CardItem>
                 <Left>
                   <Thumbnail source={require('./pic2.jpg')} />
                   <Body >
                     <Text style={{fontWeight:'bold',fontSize:20}}>Keerthi</Text>
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
               <CardItem cardBody>
                    <Image source={require('./tt2.jpg')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>
                  
                </CardItem>
               <CardItem style={{justifyContent: 'flex-end'}}>
    
                   <Button small iconLeft transparent>
                     <Icon name="text" style={ styles.iconStyle } />
                     <Text style={ styles.textStyle }>40</Text>
                   </Button>
    
                 <Button small iconLeft transparent>
                    <Icon name="swap" style={ styles.iconStyle }/>
                    <Text style={ styles.textStyle } >5</Text>
                  </Button>
    
                   <Button small iconLeft transparent>
                     <Icon name="heart" style={ styles.iconStyle }/>
                     <Text style={ styles.textStyle }>10</Text>
                   </Button>
    
                   <Button default small transparent>
                     <Icon name="mail" style={ styles.iconStyle }/>
                     </Button>
               </CardItem>
             </Card>
             <Card>
               <CardItem>
                 <Left>
                   <Thumbnail source={require('./pic3.jpg')} />
                   <Body >
                     <Text style={{fontWeight:'bold',fontSize:20}}>Lokesh</Text>
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
               <CardItem cardBody>
                    <Image source={require('./tt3.jpg')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>
                  
                </CardItem>
               <CardItem style={{justifyContent: 'flex-end'}}>
    
                   <Button small iconLeft transparent>
                     <Icon name="text" style={ styles.iconStyle } />
                     <Text style={ styles.textStyle }>40</Text>
                   </Button>
    
                 <Button small iconLeft transparent>
                    <Icon name="swap" style={ styles.iconStyle }/>
                    <Text style={ styles.textStyle } >5</Text>
                  </Button>
    
                   <Button small iconLeft transparent>
                     <Icon name="heart" style={ styles.iconStyle }/>
                     <Text style={ styles.textStyle }>10</Text>
                   </Button>
    
                   <Button default small transparent>
                     <Icon name="mail" style={ styles.iconStyle }/>
                     </Button>
               </CardItem>
             </Card>
             <Card>
               <CardItem>
                 <Left>
                   <Thumbnail source={require('./pic4.jpg')} />
                   <Body >
                     <Text style={{fontWeight:'bold',fontSize:20}}>Manoharan</Text>
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
               <CardItem cardBody>
                    <Image source={require('./tt4.jpg')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>
                  
                </CardItem>
               <CardItem style={{justifyContent: 'flex-end'}}>
    
                   <Button small iconLeft transparent>
                     <Icon name="text" style={ styles.iconStyle } />
                     <Text style={ styles.textStyle }>40</Text>
                   </Button>
    
                 <Button small iconLeft transparent>
                    <Icon name="swap" style={ styles.iconStyle }/>
                    <Text style={ styles.textStyle } >5</Text>
                  </Button>
    
                   <Button small iconLeft transparent>
                     <Icon name="heart" style={ styles.iconStyle }/>
                     <Text style={ styles.textStyle }>10</Text>
                   </Button>
    
                   <Button default small transparent>
                     <Icon name="mail" style={ styles.iconStyle }/>
                     </Button>
               </CardItem>
             </Card>
             <Card>
               <CardItem>
                 <Left>
                   <Thumbnail source={require('./pic5.jpg')} />
                   <Body >
                     <Text style={{fontWeight:'bold',fontSize:20}}>Lisa</Text>
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
               <CardItem cardBody>
                    <Image source={require('./tt5.jpg')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>
                  
                </CardItem>
               <CardItem style={{justifyContent: 'flex-end'}}>
    
                   <Button small iconLeft transparent>
                     <Icon name="text" style={ styles.iconStyle } />
                     <Text style={ styles.textStyle }>40</Text>
                   </Button>
    
                 <Button small iconLeft transparent>
                    <Icon name="swap" style={ styles.iconStyle }/>
                    <Text style={ styles.textStyle } >5</Text>
                  </Button>
    
                   <Button small iconLeft transparent>
                     <Icon name="heart" style={ styles.iconStyle }/>
                     <Text style={ styles.textStyle }>10</Text>
                   </Button>
    
                   <Button default small transparent>
                     <Icon name="mail" style={ styles.iconStyle }/>
                     </Button>
               </CardItem>
             </Card>
            
             </Content>
           
         );
        }
       
    
         const styles =StyleSheet.create({
              textStyle: {
                paddingLeft: 5,
                color: 'grey'
              },
              iconStyle:{
                  color:'grey',
                  paddingLeft: 5,
                  
              }
    
         });
    
    export default Timeline ;