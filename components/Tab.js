import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,TouchableOpacity
} from 'react-native';
import{connect} from 'react-redux';
import Word from './Word';






 class Tab extends Component {

  getStatus(clickStatus){
const{myStatus} = this.props;
if(clickStatus === myStatus)
return{
    color:'red'
}

return {
    color:'black'
}

}



setDispack(actionType){
     this.props.dispatch({type:actionType});

}

  render() {
    return (
        <View style={{flex:1, justifyContent: 'space-between',alignItems:'center',flexDirection:'row'}}>
           <TouchableOpacity  onPress={()=>{
             this.setDispack('SHOW_ALL')
               
           }}   >
               <Text style={this.getStatus('SHOW_ALL')} > all </Text>
           </TouchableOpacity   >

           <TouchableOpacity  onPress={()=>{
            this.setDispack('DA_NHO')
               
           } }>
               <Text  style={this.getStatus('DA_NHO')}  > gach ngang </Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>{
this.setDispack('CHUA_NHO')
               
           } } >
               <Text style={this.getStatus('CHUA_NHO')} > chua gach </Text>
           </TouchableOpacity>
      </View>
    );
  }
}

function mapProps(state){
return{
    myStatus:state.filterStatus,
}

}

export default connect(mapProps)(Tab);