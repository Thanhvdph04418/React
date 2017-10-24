import React, { Component } from 'react';
import {
    Button,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import{connect} from 'react-redux';






 class Word extends Component {
  render() {
    const{en,vn,memorized}=this.props.myWord;
const textDecorationLine=memorized ? 'line-through' : 'none';

    return (
        <View style={{backgroundColor:'#888888',marginTop:20}}  >
          <View style={{borderWidth:1,flex:1,flexDirection:'row'}}>
      
            <Button onPress={()=>{}}  title ='ghi nho' style={{flex:1,Width:50,}}/>
                <Text  style={{textDecorationLine}}>{en}</Text>
              </View>
      <View style={{borderWidth:1,flex:1,flexDirection:'row'}} >
      <Button onPress={()=>{}} title ='bo nho' style={{flex:1,Width:50,}}/>
      <Text>{vn}</Text>
      </View>
      </View>
    );
  }
}

export default connect()(Word);