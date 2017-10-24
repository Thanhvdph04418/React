import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import{connect} from 'react-redux';
import Word from './Word';
import Tab from './Tab';





 class Main extends Component {

    getdata(){
  const {myFilter,mydata}=this.props;

if(myFilter==='DA_NHO') return mydata.filter(e=>e.memorized);
if(myFilter==='CHUA_NHO')return mydata.filter(e=>!e.memorized);
return mydata;
}


  render() {
    return (
        <View style={{flex:1}}>
            <View style={{flex:10}}>
       < FlatList
        data={this.getdata()}
        renderItem={({item}) => <Word myWord={item} />}
        keyExtractor={item => item.id}

      />
      </View>

        <Tab style={{flex:1}} />
      </View>
    );
  }
}

function map(state){
return{
    mydata:state.arrWord,
    myFilter:state.filterStatus,
}

}


export default connect(map)(Main);

